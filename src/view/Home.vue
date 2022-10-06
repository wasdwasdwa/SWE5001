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
      <div class="event">
        <div class="poster">
        </div>
        <div class="etitle">
          <h2>Title</h2>
        </div>
        <div class="edes">
          <p>Description</p>
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
// import {ListAllFilm, ListAllPoster, ListHots} from "@/api/film";

export default {
    data() {
      return {
        search: "", //当前输入框的值
        isFocus: false, //是否聚焦
        hotSearchList: ["暂无热门搜索"], //热门搜索数据
        historySearchList: [], //历史搜索数据
        searchList: ["暂无数据"], //搜索返回数据,
        history: false,
        types: ["", "success", "info", "warning", "danger"] //搜索历史tag式样
      };
    },
    methods: {
      focus() {
        this.isFocus = true;
        this.historySearchList =
            Store.loadHistory() == null ? [] : Store.loadHistory();
        this.history = this.historySearchList.length == 0 ? false : true;
      },
      blur() {
        var self = this;
        this.searchBoxTimeout = setTimeout(function () {
          self.isFocus = false;
        }, 300);
      },
    },
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
  border-radius: 20px;
  text-align: center;
}
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