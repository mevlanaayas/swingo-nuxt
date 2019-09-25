<template>
  <el-row class="sw-centered-hr">
    <spacer-item space="20"></spacer-item>
    <span
      v-for="bet in ['terms', 'privacy', 'customer', 'guarantee']"
      :key="bet"
      class="index"
      @click="go(bet)"
      >{{ bet }}</span
    >
    <h1>Customer Terms and Conditions</h1>
    <p>Last updated: 14 September 2019</p>
    <p>Welcome to Swingo.</p>

    <p><strong>SWINGO USER AGREEMENT</strong></p>
    <p>
      <strong>1-</strong><span style="font-weight: 400;">&nbsp; </span
      ><strong>PARTIES</strong>
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >SWINGO A.Ş., referred to as SWINGO in the contract is a company
        established under the Republic of Turkey&rsquo;s law and is the owner
        and operator of Swingo. Swingo is the communication platform that brings
        the carrier and the shipper together for the transportation of the
        products. It collects the allowance from the carrier and the
        sender.</span
      >
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >&ldquo;MEMBER&rdquo; means the user of the SWINGO application.</span
      >
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >&ldquo;SENDER&rdquo; means the person who accepted the offer of moving
        the goods via a carrier and who has applied in the application.</span
      >
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >&ldquo;CARRIER&rdquo; means the person who proposes to carry the goods
        that the sender wishes to send and delivers the goods to the receiver
        for a fee.</span
      >
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >&ldquo;RECEIVER&rdquo; means the natural or legal person who will
        receive the product at the destination according to the contract freely
        agreed by the shipper and the carrier.</span
      >
    </p>
    <p><span style="font-weight: 400;">&nbsp;</span></p>
    <p>
      <strong>2-</strong><span style="font-weight: 400;">&nbsp; </span
      ><strong>APPLICATION AND MEMBERSHIP</strong>
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >Member downloads the app, fills the information requested by the
        application for membership (Name, surname, the registered country, the
        passport number, one profile Picture with the clear appearance of the
        persons face, e-mail address and telephone number) in a complete way.
        For application and membership, the parties must be over 18 years old
        and have the capacity to act. Members who are deprived of their legal or
        civil rights and those convicted of offensive crimes may not be
        carriers. After the requested information is entered and confirmed by
        GSM number or e-mail address, the member enters its password and starts
        to use the Application under these conditions.</span
      >
    </p>
    <p><span style="font-weight: 400;">&nbsp;</span></p>
    <p>
      <strong>3-</strong><span style="font-weight: 400;">&nbsp; </span
      ><strong>ACCEPTANCE OF CONDITIONS</strong>
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >Members agree that all information they provide when creating User
        Accounts in the application is accurate and complete. A member can only
        have one user account. Cannot obtain a user account using someone else's
        name or someone else's information. SWINGO shall not be liable to any
        member in relation to the missing, misleading or fraudulent information
        of the members. Access to the Services will not be permitted unless the
        application and membership requirements are fully accepted. No Member
        has the right to partially accept the Terms. It is accepted that all
        terms and conditions are read in full and that members are aware of
        them.</span
      >
    </p>
    <p><span style="font-weight: 400;">&nbsp;</span></p>
    <p>
      <strong>4-</strong><span style="font-weight: 400;">&nbsp; </span
      ><strong>GENERAL CONDITIONS OF USE</strong>
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >The member starts to use SWINGO with the verification code sent to his
        / her GSM or mail upon completing the membership form. By mean of the
        application, the carrier, and the sender match. The parties freely agree
        on the nature of the goods to be sent, at the time of shipment and
        arrival, in the determination of the fee. However, the parties may not
        propose a fee for the fee below SWINGO's recommended price. The carrier
        and the sender can only communicate through the application. SWINGO
        shall not be held liable for any damages and grievances that may arise
        in the event of communication with other means (telephone, e-mail,
        social media accounts, etc.).</span
      >
    </p>
    <p>&nbsp;</p>
    <p>
      <strong>5-</strong><span style="font-weight: 400;">&nbsp; </span
      ><strong>THE STATUS OF SWINGO</strong>
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >Swingo is a communication platform that allows the senders and carriers
        to match and process. Swingo does not offer commercial transportation
        activities. It does not interfere with trips, destinations and time.
        SWINGO is not a party to any agreement or transaction. It does not act
        as a representative. There is no agency, partnership relationship or
        connection between Swingo and its users; the users are not employees or
        subcontractors of Swingo.</span
      >
    </p>
    <p><span style="font-weight: 400;">&nbsp;</span></p>
    <p>
      <strong>6-</strong><span style="font-weight: 400;">&nbsp; </span
      ><strong>USE OF APPLICATION</strong>
    </p>
    <p><strong>&nbsp;</strong></p>
    <p>
      <strong>6.1</strong><span style="font-weight: 400;"> &nbsp; </span
      ><strong>Type of Products to Transport</strong>
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >Any goods except customs prohibited products may be shipped. Drugs,
        addictive substances, over-the-counter medications, penetrating and
        cutting tools with gun characteristics, all kinds of firearms or their
        counterfeits, explosive and flammable substances may not be subject to
        transport. Deliveries contrary to the Postal Law such as cash money, all
        kinds of valuable documents, checks, bills, policies, stocks, bonds,
        gold are not allowed to be carried. Green prescription drugs,
        prescription drugs, tobacco products, alcohol, live and endemic plants
        can be transported if they are legally obliged by the laws of the
        countries the item is being transported to and from. The main
        responsibility to check these allowances belongs to the sender.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>6.2 Insurance of the product to be transported</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >The insurance of the product to be transported will be freely agreed
        between the parties at the discretion of the sender. The insurance fee
        is paid by the sender.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>6.3 Packaging of the product to be transported</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >The sender is responsible for the packaging of the product based on the
        characteristics of the product to be transported. Unless there is a
        serious defect of the carrier, the shipper shall be responsible in case
        of breakage, bending, tearing, abrasion, spillage, deterioration, and
        smelling arising from the defect or lack of packaging.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>6.4 Responsibility of the Carrier</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >The carrier is responsible for delivering the goods to be transported
        to the buyer on time and on the spot according to the contract freely
        established with the shipper. In order for the goods to be delivered on
        time and on-site, the carrier is obliged to obtain the contact
        information of the recipient from the sender. The carrier must provide
        the shipper with complete and accurate travel information. It must
        fulfill the necessary care and obligation to carry the product without
        any deficiency. The carrier should use the right of passenger baggage
        based on the weight of the product to be transported. In case of excess
        baggage, the carrier cannot recourse to the shipper for the excess
        charge. The carrier has the right and obligation to see the product to
        be sent by the shipper. Any problems that may occur during the trip must
        be notified to both the sender and SWINGO in advance and approved. In
        case of damage due to the failure of the airline during the
        transportation of the carrier, the carrier should have a record at the
        airport. The Carrier must inspect the product and packaging carefully to
        ensure that it does not contain or hide illegal or prohibited materials.
        In case of strong suspicion, the carrier has the right to terminate the
        contract.</span
      >
    </p>
    <p>
      <span style="font-weight: 400;"
        >Recommendations: It is recommended that the product to be transported
        be opened, seen, inspected, checked for damage, if it is an electronic
        product, and photographed or video taken if possible.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>6.5. Responsibility of Shipper</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >The sender may not send any other goods other than those which are
        freely agreed to be shipped according to the agreed contract. The sender
        informs the carrier of all the characteristics of the goods to be sent
        (type, characteristics, dimensions, quantity, weight, etc.) of the
        goods. Provides the documents or invoice of the goods to be sent to the
        carrier. If the carrier communicates to the sender that he/she wants to
        see the sent item, the sender must show the item which is to be sent. If
        not shown, the carrier may terminate the contract unilaterally. It is
        the responsibility of the shipper to investigate whether the goods are
        prohibited from passing through customs and the maximum amount of
        transit. The consignor must inform the carrier of the taxes and fees to
        be incurred by the carrier. These taxes and charges will be collected as
        prepayment from the shipper prior to travel. If these costs are incurred
        during the journey, the shipper will be charged automatically without
        waiving these costs. In case of transport prohibition or exceeding the
        maximum amount, the carrier and SWINGO shall not be liable. In order to
        ensure that the delivery is timely and on-site, the consignor is
        responsible for accurately and accurately communicating the recipient's
        contact details to the carrier. In the event that the delivery cannot be
        forwarded to the receiver due to a condition which is not caused by the
        carrier's fault or the delivery is not accepted by the buyer, the sender
        agrees to pay the costs of return and return of the delivery to him in
        advance.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>6.6. SWINGO&rsquo;s Responsibility</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >Swingo's responsibility is limited to the communication between the
        carrier and the shipper. SWINGO shall not be held liable to any of the
        parties for any misunderstanding of the parties, failure to fulfill the
        agreement, and for any damages or damages that may arise, as a result of
        its serious failure.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>6.7. Price Determination</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >The fee shall be freely agreed between the parties, not to be below
        Swingo's offer based on location-generated algorithm.</span
      >
    </p>
    <p><strong>6.8.Payment Method</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >The method of the payment shall be freely agreed between the
        parties.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>6.9. Delivery Time and Place of Delivery</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >The delivery shall be made between the time-range requested by the
        sender, and place of the delivery shall be discussed between receiver
        and carrier..</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>6:10. Breach Of Contract</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >Violation of these provisions and obligations shall constitute a
        cancellation of the transport contract. The infringing sender or carrier
        or buyer is responsible for the costs and losses caused by the
        cancellation of the contract.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>6:11. Phone Number Verification</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >The user is obliged to update the phone number in his / her profile in
        case of a telephone change. Users can verify their mobile phone number
        to improve reliability and avoid false phone number notifications.</span
      >
    </p>
    <p>&nbsp;</p>
    <p>
      <strong>7-</strong><span style="font-weight: 400;"> &nbsp; </span
      ><strong>PROTECTION OF PERSONAL DATA AND PRIVACY POLICY</strong>
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >Personal information and data other than those to be shared with
        members, which are obtained at the stage of filling out the membership
        form, are not shared by unauthorized persons. The data kept in the
        application may be given upon the request of the member after the
        security check has been made.</span
      >
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >SWINGO reserves the right to make changes to the privacy policy. In
        case of changes, the members will be informed by the SWINGO.</span
      >
    </p>
    <p><span style="font-weight: 400;">&nbsp;</span></p>
    <p><strong>8-&nbsp; OTHER CONDITIONS</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
      ><strong>8.1. Intellectual Property Rights</strong>
    </p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >The design, text, image, html code, content and format of the
        application are protected by copyright law. No copyrighted work may be
        reproduced, copied, distributed, sold or derived from SWİNGO without
        express written consent.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>8.2. Contract Changes</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >SWINGO may, unilaterally, amend the contract by announcing it through
        the Application if necessary. In the current circumstances, the
        cancellation of a paragraph shall not lead to the cancellation of the
        entire agreement. Amendments shall become effective on or after their
        announcement. The remaining provisions shall remain in full force and
        effect.</span
      >
    </p>
    <p><br /><br /></p>
    <p><strong>8.3. Force Majeure</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >&ldquo;Force Majeure&rdquo; are going to be accepted as natural
        disasters, riots, war, strikes, communication problems, infrastructure
        and internet failures, including bad weather, but beyond the reasonable
        control of the carrier or shipper, and which SWINGO cannot prevent,
        despite due diligence. In all cases deemed legally force majeure, SWINGO
        shall not be liable for late or incomplete performance of the
        performance or for non-performance at all. No indemnity can be asked
        against the company in any way.</span
      >
    </p>
    <p><strong>8.4. Applicable Law and Authority</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >In the application and interpretation of these conditions, Turkish law
        shall apply to all disputes arising out of these Terms. Istanbul
        (Central) Courts and Execution Offices are authorized in case of any
        dispute.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>8.5. Evidence Agreement</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >E-mail and all correspondence, telephone call records and SMS
        information messages sent to the telephone in case of any dispute
        arising out of this agreement shall be in the sense of evidence contract
        within the meaning of Article 193 of HMK and it is definitive
        evidence.</span
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>8.6. Annulment of Contract</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >In the case of parties do not fulfill the essential elements agreed in
        accordance with the agreement established between the Shipper and
        Carrier;</span
      >
    </p>
    <p>
      <span style="font-weight: 400;"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
      >
    </p>
    <p>
      <strong>8.6.1</strong><span style="font-weight: 400;">. </span
      ><em
        ><span style="font-weight: 400;"
          >In terms of carrier; dispatch of goods other than those agreed to be
          shipped, the sender does not forward the goods to the carrier despite
          their agreement, change of carrier's travel time and plan, force
          majeure conditions.</span
        ></em
      >
    </p>
    <p>
      <span style="font-weight: 400;"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
      >
    </p>
    <p>
      <strong>8.6.2</strong><span style="font-weight: 400;">. </span
      ><em
        ><span style="font-weight: 400;"
          >For the consignor, the contract shall be terminated as soon as the
          carrier informs SWINGO and the other party of their termination will
          in case of change of travel time and plan.</span
        ></em
      >
    </p>
    <p>&nbsp;</p>
    <p><strong>8.7. Application Rules</strong></p>
    <p>&nbsp;</p>
    <p>
      <span style="font-weight: 400;"
        >SWINGO members are obliged to comply with all national and
        international laws. Members may not explicitly publish content that is
        defamatory, degrading, political, discriminatory, religious, racial,
        personal, sexual or offensive. It may not attack the personal rights of
        other persons and may not make any information or statements that
        violate privacy or confidentiality. In such a case, SWINGO undertakes to
        intervene immediately and remove the contents as soon as possible.
        SWINGO accepts no responsibility for such content. The member who acts
        in contradiction will be personally responsible.</span
      >
    </p>
    <p><span style="font-weight: 400;">&nbsp;</span></p>
    <p>
      <span style="font-weight: 400;"
        >If you use SWINGO, you are responsible for maintaining the
        confidentiality of your account and password and for restricting access
        to your computer and the devices you logged in, and you agree to accept
        responsibility for all activities that occur under your account or
        password. Amazon reserves the right to refuse service, terminate
        accounts, remove or edit content in its sole discretion.&nbsp;</span
      >
    </p>
    <p>&nbsp;</p>
  </el-row>
</template>

<script>
import SpacerItem from '../../../components/SpacerItem'
export default {
  auth: false,
  meta: {
    auth: { authority: 2 }
  },
  name: 'Privacy',
  components: { SpacerItem },
  methods: {
    go(route) {
      this.$router.push({ name: route })
    }
  }
}
</script>

<style scoped>
.index {
  font-size: 20px;
  padding: 10px;
  margin-bottom: 5px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
