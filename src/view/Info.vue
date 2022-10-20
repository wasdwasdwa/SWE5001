<template>

  <div class="body">
    <div class="eventlist">

      <div class="etitle">
        <h2>{{ Items.title }}</h2>
      </div>
      <div class="layout">
        <div class="leftpart">
      <div class="event">
        <div class="poster">
        </div>
        <div class="ede">
          <h3>Event Details</h3>
        </div>
        <div class="edes1">
          <p>Type: {{ Items.tag }}</p>
          <p>Event place: {{ Items.venue }} , {{ Items.nation }}</p>
          <p>From {{ Items.eventStartTime.substring(0,16) }} to {{ Items.eventEndTime.substring(0,16) }}</p>
          <p>Introduction: {{ Items.summary }}</p>
        </div>
      </div>
      </div>

      <div calss="rightpart">
      <div class="edetail">
        <div class="etime">
          <h3>HTML</h3>
        </div>

        <div class="dheader1">
        </div>

        <div class="dheader2">
        </div>

      </div>
      </div>
      </div>

      <div class="ticket">
        <div class="theader">
          <div class="ttitle">
            <h2>Tickets</h2>
          </div>
        </div>

        <div class="ticketgroup">
        <div v-for="t in ticket" :key="t.title" class="tickettype">
          <div class="remain">
            <h3>{{t.title}}</h3>
            <p><br>Stock count: {{t.stockCount}}</p>
            <p><br>Start selling date: {{t.startSellingDate.substring(0,16)}}</p>
            <p>End selling date: {{t.endSellingDate.substring(0,16)}}</p>
          </div>
          <div class="tprice">
            <h3>Price: {{t.price}}</h3>
          </div>
          <div class="butt">
            <el-button type="primary" @click="buy(t.title,t.id,t.price)" plain>Buy Tickets</el-button>
          </div>
          <div class="bar">
          </div>
        </div>
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
  // eslint-disable-next-line vue/multi-word-component-names
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
      },
      ticket: []
    }
  },
  mounted() {
    if (!this.loaded) {
      this.getItems();
    }
  },
  methods:{
    getItems() {
      axios.get('http://52.45.86.178:6001/ticket/api/events/' + this.$route.params.eventid).then((resp) => {
        this.Items.title = resp.data.data.event.title;
        this.Items.summary = resp.data.data.event.summary;
        this.Items.htmlContent = resp.data.data.event.htmlContent;
        this.Items.eventStartTime = resp.data.data.event.eventStartTime;
        this.Items.eventEndTime = resp.data.data.event.eventEndTime;
        this.Items.venue = resp.data.data.event.venue;
        this.Items.nation = resp.data.data.event.nation;
        this.Items.tag = resp.data.data.event.tag;
        this.Items.status = resp.data.data.event.status;
        this.Items.tag = resp.data.data.event.tag;
        this.ticket = resp.data.data.ticketList;
        this.loaded = true;
      }).catch((err) => {
        console.log(err);
      })
    },
    buy(name, id, price){
      this.$router.push({
        name: 'Fillorder',
        params: {
          ticketname:name,
          ticketid: id,
          ticketprice:price
        }
      })
    },
  }

}
</script>

<style scoped>
.body{
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:center;
}
.eventlist{
  width:100%;
  height:100%;
  vertical-align: middle;
  background-color: #E9E9E9;
}
.layout{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.event{
  margin-left: 150px;
  width:630px;
  height:780px;
  background: white;
}
.edetail{
  margin-left: 20px;
  width:650px;
  height:780px;
  background: white;
}
.ticket{
  margin-left: 150px;
  margin-top: 20px;
  width:1300px;
  height:100%;
  background: white;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.tickettype{
  margin-top: 20px;
}
.ticketgroup{
  margin-top: 50px;
  background: white;
}
.butt {
  vertical-align: middle;
  margin-left: 1100px;
  margin-top: 50px;
  text-align: center;
}
.el-button {
  background-color: #AF473C;
  color: white;
  width:100px;
}
.tprice{
  position: absolute;
  margin-left: 1000px;
  margin-top: 53px;
}
.bar{
  margin-top: 20px;
  width:1300px;
  height:5px;
  background: #565656;
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
  margin-left: 20px;
  margin-top: 10px;
  text-align: left;
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
  margin-left: 150px;
  margin-top: 40px;
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

.edes1{
  position: absolute;
  margin-left: 45px;
  margin-top: 400px;
  text-align: left;
}

.empty{
  padding-top: 50px;
}
</style>