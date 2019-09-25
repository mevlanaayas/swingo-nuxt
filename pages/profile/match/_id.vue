<template>
  <div>
    <el-row :gutter="50" style="padding-left: 20px; padding-right: 20px">
      <el-col :xs="24" :sm="24" :md="8">
        <spacer-item space="20"></spacer-item>
        <h2>
          Deal details
        </h2>
        <checkout-item v-if="match !== null" :element="match"></checkout-item>
      </el-col>

      <el-col :xs="24" :sm="24" :md="8">
        <spacer-item class="hidden-md-and-up" space="100"></spacer-item>
        <spacer-item space="20"></spacer-item>
        <h2>
          Track your deal
        </h2>
        <el-steps
          direction="vertical"
          :active="passed"
          process-status="process"
          finish-status="success"
          align-center
        >
          <el-step
            v-for="step in steps"
            :key="step.id"
            :title="step.title"
            :description="step.desc"
          ></el-step>
        </el-steps>
        <el-row v-if="matchStatus === 'Finished'">
          <el-col :xs="24" :md="24" :lg="24">
            <el-form>
              <h5>Rate User</h5>
              <el-rate
                v-model="value"
                :texts="['The Worst', 'Bad', 'Not Bad', 'Good', 'The Best']"
                show-text
              >
              </el-rate>
              <spacer-item space="10"></spacer-item>
              <el-form-item>
                <el-button type="warning" @click="sendRating">Rate</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>

        <el-row
          v-if="
            matchStatus === 'Packet Delivery Code Sent' &&
              amIPermitted(current.carrier)
          "
          justify="center"
        >
          <el-col :xs="24" :md="24" :lg="24">
            <el-form :inline="true">
              <h3 style="text-align: start">Confirmation Code</h3>
              <el-form-item>
                <el-input
                  v-model="confirmationCode"
                  class="text-input-width"
                ></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="warning" @click="confirmDeliveryCode"
                  >Confirm</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>

        <el-row
          v-if="
            matchStatus === 'Packet Taking Code Sent' &&
              amIPermitted(current.carrier)
          "
        >
          <spacer-item space="10"></spacer-item>
          <el-col :xs="24" :md="24" :lg="24">
            <el-form :inline="true">
              <h3 style="text-align: start">Confirmation Code</h3>
              <el-form-item label="Code">
                <el-input v-model="takingCode"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="warning" @click="confirmTakingCode"
                  >Confirm</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>

        <spacer-item space="20"></spacer-item>

        <el-row
          v-if="
            matchStatus !== 'Packet Delivery Code Sent' &&
              matchStatus !== 'Packet Taking Code Sent' &&
              matchStatus !== 'Finished'
          "
          class="sw-centered-hr"
        >
          <el-button v-if="current.id < 5" type="success" @click="accept()"
            >Accept</el-button
          >
          <el-button v-if="current.id < 5" type="danger" @click="reject()"
            >Reject</el-button
          >
          <el-button
            v-if="amIPermitted(current.carrier)"
            type="primary"
            @click="next()"
            >Progress
          </el-button>
        </el-row>
      </el-col>

      <el-col :xs="24" :sm="24" :md="8">
        <spacer-item class="hidden-md-and-up" space="100"></spacer-item>
        <spacer-item space="20"></spacer-item>
        <h2>
          Talk about your deal
        </h2>

        <el-row v-if="match !== null">
          <el-card>
            <spacer-item space="20"></spacer-item>

            <el-row>
              <el-card shadow="never" class="chat-message-container">
                <el-row v-for="msg in messages" :key="msg.createdAt.$date">
                  <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                    <span style="font-size: 20px; color: grey">{{
                      msg.createdBy
                    }}</span
                    >:&nbsp;&nbsp;{{ msg.message }}
                  </el-col>
                  <el-col
                    style="text-align: right !important;"
                    :xs="0"
                    :sm="8"
                    :md="8"
                    :lg="8"
                    :xl="8"
                  >
                    {{ msg.createdAt.$date | moment_to_date }}
                  </el-col>
                  <spacer-item space="40"></spacer-item>
                </el-row>
              </el-card>
            </el-row>

            <spacer-item space="5"></spacer-item>

            <el-row>
              <el-form>
                <el-form-item>
                  <el-input
                    v-model="message"
                    type="textarea"
                    :autosize="{ minRows: 3, maxRows: 5 }"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item style="float: right !important;">
                  <el-button type="primary" @click="sendMessage">
                    &nbsp;&nbsp;&nbsp;&nbsp;Send&nbsp;&nbsp;&nbsp;&nbsp;
                  </el-button>
                </el-form-item>
              </el-form>
            </el-row>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import io from 'socket.io-client'
import SpacerItem from '@/components/SpacerItem'
import CheckoutItem from '@/components/item/CheckoutItem'

export default {
  auth: true,
  meta: {
    auth: { authority: 1 }
  },
  name: 'Match',
  components: {
    SpacerItem,
    CheckoutItem
  },
  data() {
    return {
      id: this.$route.params.id,
      visible2: false,
      events: [],
      input: null,
      nonce: 0,
      message: '',
      isLoading: true,
      messages: [],
      chatRoom: '',
      responseMessage: '',
      value: null,
      confirmationCode: null,
      takingCode: null,
      match: null,
      steps: [
        /*
         * key: to choose active step
         * title: to show step title on screen
         * desc: to show step description on screen
         * carrier: if true, visible to carrier, visible to sender otherwise
         * */
        {
          id: 1,
          key: 'Created',
          title: 'Created',
          desc: 'You are welcome',
          completedCondition: 'Initiated',
          carrier: false
        },
        {
          id: 2,
          key: 'Initiated',
          title: 'Carrier turn to approve',
          desc: 'Talking about deal',
          completedCondition: 'Carrier Approved',
          carrier: false
        },
        {
          id: 3,
          key: 'Carrier Approved',
          title: 'Sender turn to approve',
          desc: 'Waiting for sender to approve',
          completedCondition: 'Approved',
          carrier: false
        },
        {
          id: 4,
          key: 'Approved',
          title: 'Make a Payment',
          desc: 'Waiting for Payment',
          completedCondition: 'Payment Passed for On Delivery',
          carrier: false
        },
        {
          id: 5,
          key: 'Payment Passed for On Delivery',
          title: 'Carrier Turn',
          desc: 'Please check the box carefully.',
          completedCondition: 'Box Check Passed',
          carrier: true
        },
        {
          id: 6,
          key: 'Box Check Passed',
          title: 'Request Taking Packet',
          desc: 'We will send confirmation code to Sender.',
          completedCondition: 'Packet Taking Code Sent',
          carrier: true
        },
        {
          id: 7,
          key: 'Packet Taking Code Sent',
          title: '3D Security',
          desc: 'Carrier must confirm that Box is taken from Sender',
          completedCondition: 'On Way',
          carrier: true
        },
        {
          id: 8,
          key: 'On Way',
          title: 'Request Delivering Packet',
          desc: 'Carrier arrived, send the confirm code.',
          completedCondition: 'Packet Delivery Code Sent',
          carrier: true
        },
        {
          id: 9,
          key: 'Packet Delivery Code Sent',
          title: '3D Security',
          desc: 'Carrier must confirm that Box is delivered to Receiver',
          completedCondition: 'Finished',
          carrier: true
        },
        {
          id: 10,
          key: 'Finished',
          title: 'Finished',
          desc:
            'We are happy to see you finished a deal. Always a pleasure to serve you.',
          completedCondition: 'Finished',
          carrier: false
        }
      ],
      socket: io(process.env.socketUrl, {
        secure: true,
        rejectUnauthorized: false
      })
    }
  },
  computed: {
    matchStatus() {
      if (this.match != null) {
        return this.match.status
      }
      return 'Waiting For Payment'
    },
    matchSender() {
      if (this.match != null) {
        return this.match.sender.username
      }
      return ''
    },
    matchCarrier() {
      if (this.match != null) {
        return this.match.carrier.username
      }
      return ''
    },
    username() {
      return this.$auth.user.username
    },
    passed() {
      let result = 0
      for (let i = 0; i < this.steps.length; i++) {
        if (this.match != null) {
          if (this.steps[i].completedCondition === this.match.status) {
            if (this.steps[i].id > result) {
              result = this.steps[i].id
            }
          }
        }
      }
      return result
    },
    current() {
      for (let i = 0; i < this.steps.length; i++) {
        if (this.match != null) {
          if (this.steps[i].key === this.match.status) {
            return this.steps[i]
          } else if (this.steps[i].key === 'Payment Done') {
            if (this.match.status === 'Payment Passed for On Delivery') {
              return this.steps[i]
            }
          }
        }
      }
      return this.steps[1]
    }
  },
  async asyncData(ctx) {
    let params = { id: ctx.params.id }
    const match = await ctx.app.$repository.RetrieveMatch({ params })
    params = params = { id: match.chat_room_id }
    const messages = ctx.app.$repository.ListChatMessages({ params })
    return {
      match,
      messages,
      chatRoom: messages.chatRoom
    }
  },
  mounted() {
    this.joinSocketRoom()
    this.socket.on('JOIN_ROOM', (data) => {
      if (data.successful === true) {
        // this.isJoined = true;
      } else {
        this.responseMessage = data.message
      }
    })
    this.socket.on('SEND_MESSAGE', (data) => {
      this.messages.push(data)
    })
    this.socket.on('UPDATE_MATCH', (data) => {
      this.$notify.info({
        title: 'Update match status',
        message: data,
        offset: 60
      })
    })
  },
  methods: {
    alertOpenedReject() {
      setTimeout(() => {
        this.$router.push({ name: 'profile-match-id', params: { id: this.id } })
      }, 4000)
    },
    joinSocketRoom() {
      this.socket.emit('JOIN_ROOM', {
        username: this.username,
        roomId: this.match.chat_room_id
      })
    },
    sendMessage() {
      this.socket.emit('SEND_MESSAGE', {
        username: this.username,
        message: this.message,
        roomId: this.match.chat_room_id
      })
      this.socket.emit('UPDATE_MATCH', {
        username: this.username,
        status: 'Updated',
        roomId: this.match.chat_room_id
      })
      this.message = ''
    },
    sendRating() {
      if (this.matchCarrier === this.username) {
        this.$repository
          .RateSender({
            params: { id: this.match.id, rating: this.value }
          })
          .then((response) => {
            if (response.data.isSuccessful) {
              this.$swal.fire({
                title: 'Successful!',
                text: '',
                type: 'success',
                onOpen: this.alertOpened,
                timer: 4000
              })
            } else {
              this.$notify.error({
                title: 'Error',
                message: response.data.msg,
                offset: 60
              })
            }
          })
      } else if (this.matchSender === this.username) {
        this.$repository
          .RateCarrier({
            params: { id: this.match.id, rating: this.value }
          })
          .then((response) => {
            if (response.data.isSuccessful) {
              this.$swal.fire({
                title: 'Successful!',
                text: '',
                type: 'success',
                onOpen: this.alertOpened,
                timer: 4000
              })
            } else {
              this.$notify.error({
                title: 'Error',
                message: response.data.msg,
                offset: 60
              })
            }
          })
      }
    },
    amIPermitted(carrierCanPerformThisAction) {
      if (carrierCanPerformThisAction) {
        // check means, carrier can perform this action
        if (this.matchCarrier === this.username) {
          return true
        }
      } else if (this.matchSender === this.username) {
        // in this scope, if I am sender I can perform this action
        return true
      }
      return false
    },
    confirmTakingCode() {
      // confirm code
      this.$repository
        .WeAreOk({
          params: { id: this.match.id, code: this.takingCode }
        })
        .then((response) => {
          if (response.data.isSuccessful) {
            this.$swal.fire({
              title: 'Successful!',
              text: '',
              type: 'success',
              onOpen: this.alertOpened,
              timer: 4000
            })
          } else {
            this.$notify.error({
              title: 'Error',
              message: response.data.msg,
              offset: 60
            })
          }
        })
    },
    confirmDeliveryCode() {
      // confirm code
      this.$repository
        .IHaveACode({
          params: { id: this.match.id, code: this.confirmationCode }
        })
        .then((response) => {
          if (response.data.isSuccessful) {
            this.$swal.fire({
              title: 'Successful!',
              text: '',
              type: 'success',
              onOpen: this.alertOpened,
              timer: 4000
            })
          } else {
            this.$notify.error({
              title: 'Error',
              message: response.data.msg,
              offset: 60
            })
          }
        })
    },
    next() {
      const self = this
      this.$repository
        .fire({
          title: 'Are you sure?',
          text: 'You cant undo this action.',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, progress!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        })
        .then((result) => {
          if (result.value) {
            // update status
            switch (this.match.status) {
              case 'Payment Done':
                this.$repository
                  .BoxIsOk({ params: { id: this.match.id } })
                  .then((response) => {
                    if (response.data.isSuccessful) {
                      this.$swal.fire({
                        title: 'Successful!',
                        text: '',
                        type: 'success',
                        onOpen: this.alertOpened,
                        timer: 4000
                      })
                    } else {
                      self.$notify.error({
                        title: 'Error',
                        message: response.data.msg,
                        offset: 60
                      })
                    }
                  })
                break
              case 'Payment Passed for On Delivery':
                this.$repository
                  .BoxIsOk({ params: { id: this.match.id } })
                  .then((response) => {
                    if (response.data.isSuccessful) {
                      this.$swal.fire({
                        title: 'Successful!',
                        text: '',
                        type: 'success',
                        onOpen: this.alertOpened,
                        timer: 4000
                      })
                    } else {
                      self.$notify.error({
                        title: 'Error',
                        message: response.data.msg,
                        offset: 60
                      })
                    }
                  })
                break
              case 'Box Check Passed':
                this.$repository
                  .LetMeTakeBox({ params: { id: this.match.id } })
                  .then((response) => {
                    if (response.data.isSuccessful) {
                      this.$swal.fire({
                        title: 'Successful!',
                        text: '',
                        type: 'success',
                        onOpen: this.alertOpened,
                        timer: 4000
                      })
                    } else {
                      self.$notify.error({
                        title: 'Error',
                        message: response.data.msg,
                        offset: 60
                      })
                    }
                  })
                break
              case 'Packet Taking Code Sent':
                this.$repository
                  .WeAreOk({ params: { id: this.match.id } })
                  .then((response) => {
                    if (response.data.isSuccessful) {
                      this.$swal.fire({
                        title: 'Successful!',
                        text: '',
                        type: 'success',
                        onOpen: this.alertOpened,
                        timer: 4000
                      })
                    } else {
                      self.$notify.error({
                        title: 'Error',
                        message: response.data.msg,
                        offset: 60
                      })
                    }
                  })
                break
              case 'On Way':
                this.$repository
                  .LetMeDeliver({ params: { id: this.match.id } })
                  .then((response) => {
                    if (response.data.isSuccessful) {
                      this.$swal.fire({
                        title: 'Successful!',
                        text: '',
                        type: 'success',
                        onOpen: this.alertOpened,
                        timer: 4000
                      })
                    } else {
                      self.$notify.error({
                        title: 'Error',
                        message: response.data.msg,
                        offset: 60
                      })
                    }
                  })
                break
              case 'Confirm Code Sent':
                this.$repository
                  .IHaveACode({ params: { id: this.match.id } })
                  .then((response) => {
                    if (response.data.isSuccessful) {
                      this.$swal.fire({
                        title: 'Successful!',
                        text: '',
                        type: 'success',
                        onOpen: this.alertOpened,
                        timer: 4000
                      })
                    } else {
                      self.$notify.error({
                        title: 'Error',
                        message: response.data.msg,
                        offset: 60
                      })
                    }
                  })
                break
              case 'Waiting For Payment':
                this.$router.push({
                  name: 'payment',
                  params: {
                    matchId: this.match.id
                  }
                })
                break
              default:
            }
          }
        })
    },
    alertOpened() {
      this.updateMatch()
      setTimeout(() => {
        this.retrieveMatch()
      }, 1000)
    },
    accept() {
      const self = this
      this.$swal
        .fire({
          title: 'You are accepting a match?',
          text: 'This action will let you accept match! (Unrecoverable)',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, process!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        })
        .then((result) => {
          if (result.value) {
            this.$repository
              .AcceptMatch({ params: { id: this.match.id } })
              .then((response) => {
                if (response.data.isSuccessful) {
                  this.$swal.fire({
                    title: 'Accepted!',
                    text: '',
                    type: 'success',
                    onOpen: this.alertOpened(),
                    timer: 2000
                  })
                } else {
                  self.$notify.error({
                    title: 'Error',
                    message: response.data.msg,
                    offset: 60
                  })
                }
              })
          }
        })
    },
    reject() {
      const self = this
      this.$swal
        .fire({
          title: 'You are rejecting a match?',
          text: 'This action will let you reject match! (Unrecoverable)',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, let me reject it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        })
        .then((result) => {
          if (result.value) {
            this.$repository
              .RejectMatch({ params: { id: this.match.id } })
              .then((response) => {
                if (response.data.isSuccessful) {
                  this.$swal.fire({
                    title: 'Rejected!',
                    text: '',
                    type: 'success',
                    onOpen: this.alertOpenedReject,
                    timer: 2000
                  })
                } else {
                  self.$notify.error({
                    title: 'Error',
                    message: response.data.msg,
                    offset: 60
                  })
                }
              })
          }
        })
    },
    updateMatch() {
      this.$notify.error({
        title: 'Update match with id',
        message: this.match.chat_room_id,
        offset: 60
      })
      this.socket.emit('UPDATE_MATCH', {
        roomId: this.match.chat_room_id
      })
    }
  }
}
</script>

<style scoped>
.chat-message-container {
  height: 300px !important;
  overflow: scroll;
}
</style>
