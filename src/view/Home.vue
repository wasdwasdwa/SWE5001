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
        </div>
        <div class="etitle">
          <h2>{{ item.title }}</h2>
        </div>
        <div class="edes">
          <p>Type: {{ item.tag }}</p>
          <p>{{ item.summary }}</p>
          <p>Venue: {{ item.venue }}</p>
        </div>
        <div class="eprice">
          <p>Start from: {{ item.eventStartTime.substring(0,10)}}</p>
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
      axios.get('http://localhost:8080/ticket/api/events').then(res => {
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
  width:40%;
  height:200px;
  background: white;
}
.butt {
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
  text-align: left;
}
.eprice{
  position: absolute;
  margin-left: 220px;
  margin-top: 160px;
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