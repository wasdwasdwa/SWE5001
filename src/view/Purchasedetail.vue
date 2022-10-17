<template>
  <div class="body">
    <div class="eventlist">
      <div class="etitle">
        <h2>Title</h2>
      </div>
      <div class="event">
        <div class="poster">
        </div>
        <div class="ede">
          <h3>Event Details</h3>
        </div>
        <div class="edes1">
          <p>Description</p>
        </div>
      </div>


      <div class="edetail">
        <div class="etime">
          <h3>Purchase Detail</h3>
        </div>
        <div class="edes2">
          <p>Order ID:<br>Order time:<br>Number of Tickets:<br>Payment ID:<br>Total Price:</p>
        </div>
        <div class="dheader1">
        </div>

        <div class="tprice">
          <h3>Delivery Information</h3>
        </div>
        <div class="edes3">
          <p>Address:<br>Phone Number:</p>
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
  data(){
    return{
      Detail:{
        id: "",
        ticketId: "",
        ticketCount: "",
        eventId: "",
        customerId: "",
        totalPrice: "",
        status: "",
        createTime: "",
        payExpireTime: "",
        payTime: "",
        // "paymentLink": "/order/mock-payment/8d744f630bc0495faab516410b5bc5a8",
        paymentId: "",
        deliveryEmail: "",
        deliveryAddress: "",
        phone: ""
      }
    }
  },
  mounted() {
    if (!this.loaded) {
      this.getDetail();
    }
  },
  methods:{
    getDetail() {
      axios.get('52.45.86.178:6001/order/orders/' + "1579015256632487937").then((resp) => {
        this.Detail.ticketId = resp.data.data.ticketId;
        this.Detail.ticketCount = resp.data.data.ticketCount;
        this.Detail.htmlContent = resp.data.data.htmlContent;
        this.Detail.eventStartTime = resp.data.data.eventStartTime;
        this.Detail.eventEndTime = resp.data.data.eventEndTime;
        this.Detail.venue = resp.data.data.venue;
        this.Detail.nation = resp.data.data.nation;
        this.Detail.tag = resp.data.data.tag;
        this.Detail.status = resp.data.data.status;
        this.Detail.tag = resp.data.data.tag;

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
  height:670px;
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
  height:550px;
  background: white;
}
.edetail{
  margin-left: 800px;
  position: absolute;
  margin-top: 90px;
  width:650px;
  height:550px;
  background: white;
}

.dheader1{
  position: absolute;
  margin-top: 330px;
  width:650px;
  height:5px;
  background: #565656;
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
.edes1{
  position: absolute;
  margin-left: 45px;
  margin-top: 400px;
}
.edes2{
  position: absolute;
  text-align: left;
  margin-left: 45px;
  margin-top: 70px;
}
.edes3{
  position: absolute;
  text-align: left;
  margin-left: 45px;
  margin-top: 400px;
}

.empty{
  padding-top: 50px;
}
</style>