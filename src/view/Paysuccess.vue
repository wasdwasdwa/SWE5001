<template>
  <div class="body">
    <div class="order">
      <div class="detail">
        <div class="text">
          <h2>Order {{ Detail.id }} has been successfully payed!</h2>
        </div>
        <div class="orderdetail">
          <p>Status: {{Detail.status}}</p>
          <p>Payment ID: {{Detail.paymentId}}</p>
          <p><br>Event ID: {{Detail.eventId}}</p>
          <p>Ticket ID: {{Detail.ticketId}}</p>
          <p>Ticket count: {{Detail.ticketCount}}</p>
          <p>Total price: {{Detail.totalPrice}}</p>
          <p>Create time: {{Detail.createTime.substring(0,16)}}</p>
          <p>Pay time: {{Detail.payTime.substring(0,16)}}</p>
        </div>

      </div>
    </div>
    <div class="payment">
    </div>
    <div class="butt">
      <el-button type="primary" @click="jump" plain>Return</el-button>
    </div>
  </div>
  <div class="empty">
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Paysuccess",
  data () {
    return {
      Detail:{
        id:'',
        status:'',
        ticketId:'',
        ticketCount:'',
        eventId:'',
        totalPrice:'',
        createTime:'',
        payExpireTime:'',
        payTime:'',
        paymentLink:'',
        paymentId:'',
        deliveryEmail:'',
        deliveryAddress:'',
        phone:'',
      }
    }
  },
  mounted(){
    // http://52.45.86.178:6001
    // /prod-api/order/mock-payment/
    let token = localStorage.getItem("access_token")
    axios({
      method: 'post',
      url: '/prod-api/order/mock-payment/'+ this.$route.params.paymentid,
      headers: {
        Authorization: token,
      },
    }).then((resp) => {
      this.Detail.id = resp.data.data.id;
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
      this.Detail.status = resp.data.data.status;
      this.loaded = true;
    }).catch((err) => {
      console.log(err);
    })
  },
  methods: {
    jump () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.body{
  text-align: center;
  width: 100%;
  height: 100%;

  display:flex;
  justify-content:center;
}
.order{
  width:100%;
  height:630px;
  vertical-align: middle;
  background-color: #E9E9E9;
  text-align: center;
  justify-content:center;
  /*align-items: center;*/
  display:flex;
}
.detail{
  text-align: left;
  margin-top: 20px;
  position: absolute;
  width:60%;
  height:350px;
  background: white;
}
.butt {
  position: absolute;
  vertical-align: middle;
  margin-top: 400px;
  text-align: center;
}
.el-button {
  background-color: #AF473C;
  color: white;
  width:330px;
}
.text{
  margin-top: 10px;
  margin-left: 10px;
}
.orderdetail{
  margin-left: 100px;
  margin-top: 50px;
}

.payment{
  background-image: url("../assets/img/payment.png");
  background-repeat: no-repeat;
  /*background-size: cover;*/
}
.empty{
  padding-top: 20px;
}
</style>