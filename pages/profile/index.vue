<template>
  <el-row class="sw-centered-hr">
    <el-col class="hidden-sm-and-down" :sm="4">&nbsp;</el-col>
    <el-col style="margin-right: 50px" :xs="24" :sm="24" :md="5">
      <spacer-item space="10"></spacer-item>
      <el-menu
        style="background-color: rgba(255,225,82,0); border-right: 0"
        default-active="2"
        class="el-menu-vertical-demo"
        @select="handleSelect"
      >
        <el-menu-item index="senders">
          <i class="el-icon-document-add"></i>
          <span>My Send Orders</span>
        </el-menu-item>
        <el-menu-item index="carriers">
          <i class="el-icon-document-remove"></i>
          <span>My Carry Orders</span>
        </el-menu-item>
        <el-menu-item index="matches">
          <i class="el-icon-document-checked"></i>
          <span>My Matches</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :xs="24" :sm="24" :md="10">
      <h2>
        User profile
        <el-popover
          v-if="!verified"
          placement="right"
          title="Not Verified"
          width="250"
          trigger="hover"
          content="Confirm your phone number to verify"
        >
          <i
            slot="reference"
            class="fas fa-question-circle yellow-icon"
            aria-hidden="true"
          ></i>
        </el-popover>
        <el-popover
          v-if="verified"
          placement="right"
          title="Verified"
          content=""
          width="10"
          trigger="hover"
        >
          <i
            slot="reference"
            class="fas fa-check-square green-icon"
            aria-hidden="true"
          ></i>
        </el-popover>
      </h2>

      <el-form disabled="" label-position="right" label-width="110px">
        <spacer-item space="40"></spacer-item>
        <h5>General Information</h5>
        <spacer-item space="20"></spacer-item>

        <el-form-item label="Username">
          <el-input v-model="username">
            <i slot="prefix" class="fas fa-user el-input__icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="First Name">
          <el-input v-model="firstName">
            <i slot="prefix" class="fas fa-dice-one el-input__icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input v-model="lastName">
            <i slot="prefix" class="fas fa-dice-six el-input__icon"></i>
          </el-input>
        </el-form-item>
      </el-form>

      <spacer-item space="40"></spacer-item>
      <h2>Email Addresses</h2>
      <spacer-item space="20"></spacer-item>

      <el-card v-if="email">
        <el-row>
          <el-col :xs="16" :sm="16" :lg="16">
            Email
          </el-col>
          <el-col :xs="4" :sm="4" :lg="4">
            Verified
          </el-col>
          <el-col :xs="4" :sm="4" :lg="4">
            Primary
          </el-col>
        </el-row>
        <spacer-item space="5"></spacer-item>
        <hr />
        <spacer-item space="20"></spacer-item>
        <el-row>
          <el-col :xs="16" :sm="16" :lg="16">
            {{ email.email_address }}
          </el-col>
          <el-col :xs="4" :sm="4" :lg="4">
            <span v-if="email.verified">
              <i class="fas fa-check-square green-icon"></i>
            </span>
            <span v-if="!email.verified">
              <i class="fas fa-window-close grey-icon"></i>
            </span>
          </el-col>
          <el-col :xs="4" :sm="4" :lg="4">
            <span v-if="email.primary">
              <i class="fas fa-check-square green-icon"></i>
            </span>
            <span v-if="!email.primary">
              <i class="fas fa-window-close grey-icon"></i>
            </span>
          </el-col>
          <spacer-item space="40"></spacer-item>
          <hr />
          <spacer-item space="20"></spacer-item>
        </el-row>
      </el-card>

      <el-card v-if="email === null">
        <h4>There is no email address defined</h4>
      </el-card>

      <spacer-item space="40"></spacer-item>
      <h2>
        Phone Numbers &nbsp;&nbsp;
        <el-popover
          placement="top"
          width="250"
          trigger="hover"
          content="Adding and Verifying your phone number, makes status of your profile Verified."
        >
          <el-button
            slot="reference"
            type="primary"
            icon="el-icon-plus"
            circle
            @click="enableAddPhoneNumberForm"
          ></el-button>
        </el-popover>
      </h2>
      <spacer-item space="20"></spacer-item>

      <el-card v-if="phoneNumbers.length > 0">
        <el-row>
          <el-col :xs="16" :sm="16" :lg="16">
            Number
          </el-col>
          <el-col :xs="4" :sm="4" :lg="4">
            Verified
          </el-col>
          <el-col :xs="4" :sm="4" :lg="4">
            Primary
          </el-col>
        </el-row>
        <spacer-item space="5"></spacer-item>
        <hr />
        <spacer-item space="20"></spacer-item>
        <el-row v-for="phoneNumber in phoneNumbers" :key="phoneNumber.id">
          <el-col :xs="16" :sm="16" :lg="16">
            {{ phoneNumber.phone_number }}
          </el-col>
          <el-col :xs="4" :sm="4" :lg="4">
            <span v-if="phoneNumber.verified">
              <i class="fas fa-check-square green-icon"></i>
            </span>
            <span v-if="!phoneNumber.verified">
              <i
                class="fas fa-window-close grey-icon"
                @click="
                  confirmPhoneNumber(phoneNumber.id, phoneNumber.phone_number)
                "
              ></i>
            </span>
          </el-col>
          <el-col :xs="4" :sm="4" :lg="4">
            <span v-if="phoneNumber.primary">
              <i class="fas fa-check-square green-icon"></i>
            </span>
            <span v-if="!phoneNumber.primary">
              <i
                class="fas fa-window-close grey-icon"
                @click="setPrimary(phoneNumber.id)"
              ></i>
            </span>
          </el-col>
          <spacer-item space="40"></spacer-item>
          <hr />
          <spacer-item space="20"></spacer-item>
        </el-row>
      </el-card>

      <el-card v-if="phoneNumbers.length === 0">
        <h4>There is no phone number defined</h4>
      </el-card>

      <spacer-item space="40"></spacer-item>

      <el-form v-if="addPhoneNumberFormEnabled" :inline="true">
        <h3>Add new phone number</h3>
        <el-alert
          title="Phone Number format"
          type="warning"
          description="Please add + sign to start and Don't forget to add country code."
          :closable="false"
          show-icon
        >
        </el-alert>
        <spacer-item space="10"></spacer-item>
        <el-form-item label="Phone Number">
          <el-input v-model="gsm"></el-input>
        </el-form-item>

        <el-form-item>
          <el-row :gutter="20">
            <el-col :xs="24">
              <spacer-item class="hidden-md-and-up" space="10"></spacer-item>
              <el-button type="primary" @click="addPhoneNumber">
                Save
              </el-button>
              <el-button type="secondary" @click="disableAddPhoneNumberForm">
                Cancel
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col class="hidden-sm-and-down" :sm="4">&nbsp;</el-col>
  </el-row>
</template>

<script>
import SpacerItem from '@/components/SpacerItem'

export default {
  auth: true,
  meta: {
    auth: { authority: 1 }
  },
  name: 'Profile',
  components: {
    SpacerItem
  },
  data() {
    return {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      verified: false,
      gsm: '',
      phoneNumbers: [],
      addPhoneNumberFormEnabled: false
    }
  },
  async asyncData(ctx) {
    const client = await ctx.app.$repository.Client()
    const phoneNumbers = await ctx.app.$repository.ListPhoneNumbers()
    return {
      username: client.username,
      firstName: client.first_name,
      lastName: client.last_name,
      email: client.email_address,
      verified: client.is_approved,
      phoneNumbers
    }
  },
  created() {
    // this.getClient()
    // this.getPhoneNumbers()
  },
  methods: {
    getClient() {
      this.repository.Client().then((response) => {
        const results = response.data.results[0]
        this.username = results.username
        this.firstName = results.first_name
        this.lastName = results.last_name
        this.email = results.email_address
        this.verified = results.is_approved
      })
    },
    getPhoneNumbers() {
      this.repo.ListPhoneNumbers().then((response) => {
        this.phoneNumbers = response.data.results
      })
    },
    saveClient() {
      this.repo.Client().then((response) => {
        const results = response.data.results[0]
        this.firstName = results.first_name
        this.lastName = results.last_name
        this.email = results.email
      })
    },
    enableAddPhoneNumberForm() {
      this.addPhoneNumberFormEnabled = true
    },
    disableAddPhoneNumberForm() {
      this.addPhoneNumberFormEnabled = false
    },
    addPhoneNumber() {
      this.repo.AddPhoneNumber({ phone_number: this.gsm }).then((response) => {
        const phoneNumberId = response.data.id
        const phoneNumber = response.data.phone_number
        this.confirmPhoneNumber(phoneNumberId, phoneNumber)
      })
    },
    confirmPhoneNumber(phoneNumberId, phoneNumber) {
      this.$router.push({
        name: 'confirm-phone-number',
        params: {
          phoneNumberId,
          phoneNumber
        }
      })
    },
    setPrimary(phoneNumberId) {
      this.repo.SetPrimary({ id: phoneNumberId }).then((response) => {
        this.$notify({
          title: 'Set as Primary',
          message: response.data.msg,
          position: 'top-right',
          offset: 100
        })
        this.getPhoneNumbers()
      })
    },
    handleSelect(index) {
      if (index === 'senders') {
        this.$router.push({
          name: 'profile-orders-type',
          params: { type: 'send' }
        })
      } else if (index === 'carriers') {
        this.$router.push({
          name: 'profile-orders-type',
          params: { type: 'carry' }
        })
      } else if (index === 'matches') {
        this.$router.push({ name: 'profile-match' })
      }
    }
  }
}
</script>

<style scoped>
.el-menu-item i,
span {
  font-size: 20px;
}
</style>
