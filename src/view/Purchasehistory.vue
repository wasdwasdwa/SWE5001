<template>
  <div class="body">
    <div class="eventlist">
      <div class="event">
        <div class="poster">
        </div>
        <div class="etitle">
          <h2>Title</h2>
        </div>
        <div class="edes">
          <p>Time</p>
        </div>
        <div class="edes1">
          <p>Number</p>
        </div>
        <div class="eprice">
          <p>Price</p>
        </div>

        <div class="butt">
          <el-button type="primary" @click="more" plain>More</el-button>
        </div>
      </div>
    </div>
  </div>

  <div class="empty">
  </div>
</template>

<script>
export default {
  name: "Purchasehistory"
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
  justify-content:center;
  display:flex;
}
.event{
  position: absolute;
  margin-top: 10px;
  width:40%;
  height:200px;
  background: white;
}
.butt {
  /*position: absolute;*/
  vertical-align: middle;
  margin-left: 500px;
  margin-top: 155px;
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
}
.edes1{
  position: absolute;
  margin-left: 220px;
  margin-top: 80px;
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