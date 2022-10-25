<template>
  <div class="header">
    <div style="height: 70px;width: 100%">
      <div class="header-logo">
        <div class="header-logo-text">LiveCat</div>
      </div>
      <div class="header-links">
        <el-link href="/" class="header-link" :underline="false">Home</el-link>
        <el-link href="/" class="header-link" :underline="false">Events</el-link>
      </div>

      <el-link v-if="!isLogin" @click="customerLog" style="float: right;padding-top: 23px;padding-right: 50px"
               class="header-link" :underline="false">
        Login/Register
      </el-link>
      <el-dropdown v-if="isLogin" style="float: right;padding-right: 80px">
        <el-button type="text">
          <div class="header-name">Welcome!
            <i class="el-icon-caret-bottom"></i>
          </div>
<!--          <img alt="" style="width: 45px;height: 45px;border-radius: 50%" :src="user.avatar">-->
        </el-button>
        <template v-slot:dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-link @click="showOrderList" :underline="false" style="padding-right: 7px">
              <i style="font-size: 15px; padding-right: 3px" class="el-icon-s-order"></i>My orders
            </el-link>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-button type="text" @click="handleLogout" :underline="false">
              <i style="font-size: 15px; padding-right: 3px" class="el-icon-switch-button"></i>Logout
            </el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
        </template>
      </el-dropdown>

    </div>
  </div>
</template>

<script>

import router from "@/router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      isLogin: false,
      searchList: [],
      state: '',
      timeout: null,
      user: {},
    }
  },
  mounted() {
    if (localStorage.getItem("access_token") !== null) {
      this.isLogin = true;
    }
    else{
      this.isLogin = false;
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("access_token")
      localStorage.removeItem("username")
      localStorage.removeItem("userName")
      localStorage.removeItem("orderInfo")
      this.$router.push('/login')
    },
    showOrderList(){
      this.$router.push('/purchasehistory')
    },
    customerLog(){
      this.$router.push('/login')
    }
  },

}
</script>

<style scoped>
.header {
  height: 70px;
  background: #AF473C;
  box-shadow: 0 2px 12px 0 rgb(0 0 0/10%);
  border: 1px solid #AF473C;
}

.header-logo {
  padding-top: 10px;
  padding-left: 5%;
  float: left;
  letter-spacing: 2px;
}

.header-logo-text {
  font-size: 30px;
  padding-top: 3px;
  font-weight: bolder;
  padding-left: 15px;
  color: #FFFFFF;
  float: left;
}

.header-links {
  float: left;
  padding-left: 50px;
  padding-top: 23px;
  color: #FFFFFF;
}

.header-link {
  letter-spacing: 2px;
  font-size: 17px;
  padding-right: 40px;
  color: #FFFFFF;
}

.header-name {
  color: white;
  float: right;
  padding-top: 40px;
  font-weight: bolder;
  font-size: 25px;
  letter-spacing: 2px;
}
.header-search {
  float: left;
  width: 300px;
  border-radius: 20px;
  padding-top: 16px;
}

>>> .el-input__inner {
  border-radius: 20px;
  height: 40px;
}
</style>
