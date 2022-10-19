<template>
  <div class="body">
    <div class="eventlist">
      <div class="etitle">
        <h2>{{ Detail.title }}</h2>
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
          <p><br>Ticket count: {{ Detail.ticketCount }}<br>
            Total price: {{ Detail.totalPrice }}<br> Payment ID: {{ Detail.paymentId }}<br>
            Create time: {{Detail.createTime}}<br>Payment expire time: {{ Detail.payExpireTime}}<br>
            Pay time: {{Detail.payTime}}<br>Payment link: {{Detail.paymentLink}}
          </p>
        </div>
        <div class="dheader1">
        </div>

        <div class="tprice">
          <h3>Delivery Information</h3>
        </div>
        <div class="edes3">
          <p>Address: {{Detail.deliveryAddress}}<br>Phone Number: {{Detail.phone}}
            <br>Email: {{Detail.deliveryEmail}}
          </p>
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
        eventId: "", //need event title
        customerId: "",
        totalPrice: "",
        status: "",
        createTime: "",
        payExpireTime: "",
        payTime: "",
        paymentLink: "",
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
      axios.get('http://52.45.86.178:6001/order/orders/' + "1579015256632487937").then((resp) => {
        this.Detail.ticketId = resp.data.data.ticketId;
        this.Detail.ticketCount = resp.data.data.ticketCount;
        this.Detail.eventId = resp.data.data.eventId;
        this.Detail.totalPrice = resp.data.data.totalPrice;
        this.Detail.createTime = resp.data.data.createTime;
        this.Detail.payExpireTime = resp.data.data.payExpireTime;
        this.Detail.payTime = resp.data.data.payTime;
        this.Detail.paymentLink = resp.data.data.paymentLink;
        this.Detail.paymentId = resp.data.data.paymentId;
        this.Detail.deliveryEmail = resp.data.data.deliveryEmail;
        this.Detail.deliveryAddress = resp.data.data.deliveryAddress;
        this.Detail.phone = resp.data.data.phone;

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