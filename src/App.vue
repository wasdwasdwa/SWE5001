<template>
  <div class="app">
    <Header :value="usname" v-if='this.$route.meta.isShowHeader'/>
    <router-view></router-view>
    <Footer v-if='this.$route.meta.isShowHeader'/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,

  },
  data() {
    return {
      usname: String
    }
  },
  mounted() {
    document.querySelector('body').setAttribute('style', 'background-color:#3C3C3C')
  },
  methods: {
    login() {
      let getFlag = localStorage.getItem("Flag");
      let getName = localStorage.getItem("Uname");
      if(getFlag === "isLogin"){
        this.usname = getName + " logout";
      }
      else {
        this.usname = "Log in"
      }
    }
  },
  watch: {
    '$route' () {
      this.login();
    }
  }
}
</script>
<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>