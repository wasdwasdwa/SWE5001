<template>
  <div class="body">
    <div class="order">
      <div class="detail">
        <div class="text">
          <h2>Order (id) has been successfully created!</h2>
        </div>
        <div class="orderdetail">
          <p>Activity name:</p>
        </div>
        <div class="orderdetail2">
          <p>Purchaser name:</p>
        </div>
        <div class="orderdetail2">
          <p>Purchaser email:</p>
        </div>
        <div class="orderdetail2">
          <p>Purchaser address:</p>
        </div>
        <div class="orderdetail2">
          <p>Ticket number:</p>
        </div>
        <div class="orderdetail2">
          <p>Ticket type:</p>
        </div>
        <div class="orderdetail2">
          <p>Total price:</p>
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
  name: "Ordercreated",

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
        providerId: ""
      }
    }
  },
  mounted() {
    if (!this.loaded) {
      this.getItems();
    }
  },
  methods: {

    confirm () {
      this.$router.push('/paysuccess')
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
  display:flex;
}
.detail{
  margin-top: 20px;
  position: absolute;
  width:60%;
  height:360px;
  background: white;
  text-align: left;
}
.payment{
  position: absolute;
  vertical-align: middle;
  margin-top: 400px;
  width:60%;
  height:150px;
  background: white;
}
.butt {
  position: absolute;
  vertical-align: middle;
  margin-top: 570px;
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