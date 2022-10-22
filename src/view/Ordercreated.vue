<template>
  <div class="body">
    <div class="order">
      <div class="detail">
        <div class="text">
          <h2>Order {{ Item.id }} has been successfully created!</h2>
        </div>
        <div class="orderdetail">
          <p>Event id: {{Item.eventId}}</p>
        </div>
        <div class="orderdetail2">
          <p>Ticket id: {{Item.ticketId}}</p>
        </div>
        <div class="orderdetail2">
          <p>Ticket count: {{Item.ticketCount}}</p>
        </div>
        <div class="orderdetail2">
          <p>Total price: {{Item.totalPrice}}</p>
        </div>
        <div class="orderdetail2">
          <p>Purchaser email: {{Item.deliveryEmail}}</p>
        </div>
        <div class="orderdetail2">
          <p>Purchaser address: {{Item.deliveryAddress}}</p>
        </div>
        <div class="orderdetail2">
          <p>Payment Id: {{Item.paymentId}}</p>
        </div>
        <div class="orderdetail2">
          <p>Status: {{Item.status}}</p>
        </div>
        <div class="orderdetail2">
          <p>Create time: {{Item.createTime}}</p>
        </div>
        <div class="orderdetail2">
          <p>Pay expire time: {{Item.payExpireTime}}</p>
        </div>
        <div class="orderdetail2">
          <p>Pay time: {{Item.payTime}}</p>
        </div>
      </div>
    </div>
    <div class="payment">
    </div>
    <div class="butt">
      <el-button type="primary" @click="confirm" plain>Pay</el-button>
    </div>
  </div>
  <div class="empty">
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Ordercreated",

  data () {
    return {
      Item:{
        id: "",
        eventId:"",
        ticketId:"",
        ticketCount:"",
        totalPrice:"",
        deliveryEmail:'',
        deliveryAddress:'',
        paymentId:'',
        status:'',
        createTime:'',
        payExpireTime: '',
        payTime: '',
      }
    }
  },
  mounted() {
    if (localStorage.getItem("orderInfo") != null){
      const order = JSON.parse(localStorage.getItem('orderInfo'));
      this.Item.id = order.id;
      this.Item.eventId = order.eventId;
      this.Item.ticketId = order.ticketId;
      this.Item.ticketCount = order.ticketCount;
      this.Item.totalPrice = order.totalPrice;
      this.Item.deliveryEmail = order.deliveryEmail;
      this.Item.deliveryAddress = order.deliveryAddress;
      this.Item.paymentId = order.paymentId;
      this.Item.status = order.status;
      this.Item.createTime = order.createTime;
      this.Item.payExpireTime = order.payExpireTime;
      this.Item.payTime = order.payTime;
    }
  },
  methods: {
    confirm () {
      this.$router.push({
        name: 'Paysuccess',
        params: {
          paymentid: this.Item.paymentId
        }
      })
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
  height:750px;
  vertical-align: middle;
  background-color: #E9E9E9;
  text-align: center;
  justify-content:center;
  display:flex;
}
.detail{
  margin-top: 20px;
  position: absolute;
  width:60%;
  height:500px;
  background: white;
  text-align: left;
}
.payment{
  position: absolute;
  vertical-align: middle;
  margin-top: 530px;
  width:60%;
  height:150px;
  background: white;
}
.butt {
  position: absolute;
  vertical-align: middle;
  margin-top: 690px;
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
  margin-left: 200px;
  margin-top: 50px;
}
.orderdetail2{
  margin-left: 200px;
  margin-top: 10px;
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