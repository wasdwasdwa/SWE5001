<template>
  <div class="body">
    <div class="order">
      <div class="detail">
        <div class="text">
          <h2>Error occurred when processing with the order.</h2>
        </div>
        <div class="orderdetail">
          <p>Purchase failed, tickets sold out</p>
        </div>

      </div>
    </div>
    <div class="payment">
    </div>
    <div class="butt">
      <el-button type="primary" @click="retry" plain>Retry</el-button>
    </div>
  </div>
  <div class="empty">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Orderfail",
  method:{
    retry(){
      this.$router.push('/info/' + this.$route.params.eventid)
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
.empty{
  padding-top: 20px;
}
</style>