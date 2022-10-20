<template>
  <div class="body">
    <div class="eventlist">

      <div v-for="item in orderList" :key="item">
      <div class="event">
        <div class="poster">
        </div>
        <div class="etitle">
          <h2>{{ item.eventId}}</h2>
        </div>
        <div class="edes">
          <p>Ticket count: {{item.ticketCount}}</p>
          <p><br>Payment expire time: {{item.payExpireTime.substring(0,16)}}</p>
          <p>Pay time: {{item.payTime.substring(0,10)}}</p>
        </div>
        <div class="eprice">
          <p>Total price: {{item.totalPrice}}</p>
        </div>

        <div class="butt">
          <el-button type="primary" @click="more(item.id)" plain>More</el-button>
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
  data() {
    return{
      orderList:[]
    }
  },
  mounted(){
    let token = localStorage.getItem("access_token")
    axios.get("http://52.45.86.178:6001/order/orders", {
      headers: {
        Authorization: token,
      },
    }).then(res => {
      console.log(res.data);
      this.orderList = res.data.data;
    });
  },
  methods:{
    more(id){
      this.$router.push({
        name: 'Purchasedetail',
        params: {
          orderid: id
        }
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
  height:700px;
  vertical-align: middle;
  background-color: #E9E9E9;
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.event{
  margin-top: 10px;
  width:1000px;
  height:200px;
  background: white;
}
.butt {
  position:absolute;
  vertical-align: middle;
  margin-left: 880px;
  margin-top: 160px;
  text-align: center;
}
.el-button {
  background-color: #AF473C;
  color: white;
  width:100px;
}
.poster{
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
  width: 180px;
  height:180px;
  background-color: #CDCDCD;
}
.etitle{
  position: absolute;
  margin-left: 220px;
  margin-top: 10px;
}
.edes{
  position: absolute;
  margin-left: 220px;
  margin-top: 50px;
  text-align: left;
}
.eprice{
  position: absolute;
  margin-left: 220px;
  margin-top: 160px;
  font-weight: bold;
}
.empty{
  padding-top: 50px;
}
</style>