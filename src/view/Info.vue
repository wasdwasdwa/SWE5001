<template>
  <div class="body">
    <div class="eventlist">
      <div class="etitle">
        <h2>{{ Items.title }}</h2>
      </div>
      <div class="event">
        <div class="poster">
        </div>
        <div class="ede">
          <h3>Event Details</h3>
        </div>
        <div class="edes1">
          <p>{{ Items.tag }}</p>
          <p>{{ Items.summary }}</p>
          <p>{{ Items.venue }} , {{ Items.nation }}</p>

        </div>
      </div>


      <div class="edetail">
        <div class="etime">
          <h3>Schedule</h3>
        </div>
        <div class="edes2">
          <p>From {{ Items.eventStartTime }} to {{ Items.eventEndTime }}</p>
        </div>
        <div class="dheader1">
        </div>

        <div class="tprice">
          <h3>Ticket Type & Price</h3>
        </div>
        <div class="edes3">
          <p>{{ Items.ticketTitle }} : {{ Items.ticketPrice }}</p>
        </div>
        <div class="dheader2">
        </div>

        <div class="contact">
          <h3>Contact</h3>
        </div>
        <div class="edes4">
          <p>Description</p>
        </div>
      </div>

      <div class="ticket">
        <div class="theader">
          <div class="ttitle">
            <h2>Tickets</h2>
          </div>
        </div>
        <div class="remain">
          <h3>Tickets Available:</h3>
        </div>
        <div class="butt">
          <el-button type="primary" @click="more" plain>Buy Tickets</el-button>
        </div>
      </div>

    </div>
  </div>

  <div class="empty">
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Purchasehistory",

  data () {
    return {
      Items:{
        id: "",
        title: "",
        summary: "",
        imageUrl: "",
        htmlContent: "",
        eventStartTime: "",
        eventEndTime: "",
        venue: "",
        nation: "",
        tag: "",
        status: "",
        createTime: "",
        providerId: "",
        ticketTitle:"",
        amount:""
      }
    }
  },
  mounted() {
    if (!this.loaded) {
      this.getItems();
    }
  },
  methods:{
    getItems() {
      axios.get('52.45.86.178:6001/ticket/api/events/' + "1244940138650423298").then((resp) => {
        this.Items.title = resp.data.data.title;
        this.Items.summary = resp.data.data.summary;
        this.Items.htmlContent = resp.data.data.htmlContent;
        this.Items.eventStartTime = resp.data.data.eventStartTime;
        this.Items.eventEndTime = resp.data.data.eventEndTime;
        this.Items.venue = resp.data.data.venue;
        this.Items.nation = resp.data.data.nation;
        this.Items.tag = resp.data.data.tag;
        this.Items.status = resp.data.data.status;
        this.Items.tag = resp.data.data.tag;
        // this.Items.ticketTitle = resp.data.ticketList.title;
        // this.Items.amount = resp.data.ticketList.amount;
        this.loaded = true;
      }).catch((err) => {
        console.log(err);
      })
    },
  }

}
</script>

<style scoped>
.body{
  text-align: center;
  width: 100%;
  height: 100%;
  /*padding-top: 30px;*/
  display:flex;
  justify-content:center;
}
.eventlist{
  width:100%;
  height:1100px;
  vertical-align: middle;
  background-color: #E9E9E9;
  text-align: center;
  /*justify-content:center;*/
  /*display:flex;*/
}
.event{
  margin-left: 150px;
  position: absolute;
  margin-top: 90px;
  width:630px;
  height:780px;
  background: white;
}
.edetail{
  margin-left: 800px;
  position: absolute;
  margin-top: 90px;
  width:650px;
  height:780px;
  background: white;
}
.ticket{
  margin-left: 150px;
  position: absolute;
  margin-top: 892px;
  width:1300px;
  height:180px;
  background: white;
}
.butt {
  /*position: absolute;*/
  vertical-align: middle;
  margin-left: 1150px;
  margin-top: 130px;
  text-align: center;
}
.el-button {
  background-color: #AF473C;
  color: white;
  width:100px;
}
.theader{
  position: absolute;
  width:1300px;
  height:48px;
  background: #565656;
}
.dheader1{
  position: absolute;
  margin-top: 330px;
  width:650px;
  height:5px;
  background: #565656;
}
.dheader2{
  position: absolute;
  margin-top: 580px;
  width:650px;
  height:5px;
  background: #565656;
}
.remain{
  position: absolute;
  margin-left: 45px;
  margin-top: 100px;
}
.ttitle{
  position:absolute;
  margin-left: 25px;
  margin-top: 8px;
  font-size: 15px;
  color: white;
}
.poster{
  position: absolute;
  width: 630px;
  height:330px;
  background-color: #CDCDCD;
}
.etitle{
  position: absolute;
  margin-left: 150px;
  margin-top: 10px;
  font-size: 40px;
}
.ede{
  position: absolute;
  margin-left: 25px;
  margin-top: 350px;
}
.etime{
  position: absolute;
  margin-left: 25px;
  margin-top: 20px;
}
.tprice{
  position: absolute;
  margin-left: 25px;
  margin-top: 350px;
}
.contact{
  position: absolute;
  margin-left: 25px;
  margin-top: 600px;
}
.edes1{
  position: absolute;
  margin-left: 45px;
  margin-top: 400px;
}
.edes2{
  position: absolute;
  margin-left: 45px;
  margin-top: 70px;
}
.edes3{
  position: absolute;
  margin-left: 45px;
  margin-top: 400px;
}
.edes4{
  position: absolute;
  margin-left: 45px;
  margin-top: 650px;
}

.empty{
  padding-top: 50px;
}
</style>