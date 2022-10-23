<template>
  <div class="title">
      <div class="search">
        <el-autocomplete
            style="width: 500px"
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="Please enter activity name"
            @select="handleSelect"/>
    </div>
  </div>
  <div class="body">
    <div class="eventlist">
      <div v-for="item in itemList" :key="item" class="event">
        <div class="poster">
          <img :src="item.imageUrl" class="pic" >
        </div>
        <div class="etitle">
          <h2>{{ item.title }}</h2>
        </div>
        <div class="edes">
          <p>Type: {{ item.tag }}</p>
          <p>Venue: {{ item.venue }}</p>
        </div>
        <div class="eprice">
          <p>Start from: {{ item.eventStartTime}}</p>
        </div>

        <div class="butt">
          <el-button type="primary" @click="more(item.id)" plain>More</el-button>
        </div>
      </div>
    </div>
  </div>

  <div class="interval">
  </div>
  <div class="empty">
  </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return{
      itemList:[]
    }
   },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // /prod-api/ticket/api/events
      // http://52.45.86.178:6001/ticket/api/events
      axios.get('/prod-api/ticket/api/events').then(res => {
        console.log(res.data);
        this.itemList = res.data.data;
      });
    },
    more(id){
      this.$router.push({
        name: 'Info',
        params: {
          eventid: id
        }
      })
    }
  }
  };
</script>

<style scoped>
@import "../assets/css/home.css";
.title{
  width: 100%;
  height: 100px;
  padding-top: 70px;
  background-image: url("../assets/img/mainSearch.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
}

.search {
  width: 1500px;
  text-align: center;
}
.body{
  text-align: center;
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:center;
}
.eventlist{
  width:100%;
  height:100%;
  background-color: #E9E9E9;
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.event{
  margin-top: 10px;
  width:60%;
  height:200px;
  background: white;
}
.butt {
  vertical-align: middle;
  margin-left: 800px;
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
  overflow: hidden;
  text-align: center;
}
.pic{
  max-height:100%;
  object-fit: contain;
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
  margin-top: 170px;
  font-weight: bold;
}
.interval{
  background-color: #E9E9E9;
  height:10px;
}
.empty{
  padding-top: 50px;
}
</style>