<template>
  <div class="body">
    <div class="order">
      <div class="detail">
        <div class="text">
          <h2>Order (id) has been successfully payed!</h2>
        </div>
        <div class="orderdetail">
          <p>Payment ID:</p>
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
export default {
  name: "Paysuccess",
  data () {
    return {}
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
  margin-top: 20px;
  position: absolute;
  width:40%;
  height:200px;
  background: white;
}
.butt {
  position: absolute;
  vertical-align: middle;
  margin-top: 250px;
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