<template>
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h2>LiveCat</h2>
      </div>
      <div class="formdata" style="text-align: center">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username" clearable placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" clearable placeholder="Password" show-password></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.repPassword" clearable placeholder="Repeat password" show-password></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.nickName" clearable placeholder="Nickname"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.mobile" clearable placeholder="Phone number"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="form.email" clearable placeholder="Email"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="butt">
        <el-button type="primary" @click="login" plain>Register</el-button>
      </div>
      <div class="forgot">
        <el-link href="/login" class="forgot" :underline="false">Already registered? Login</el-link>
      </div>
      <div class="forgot">
        <el-link href="/" class="forgot" :underline="false">Back to home</el-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password: "",
        repPassword: "",
        nickName: "",
        mobile:"",
        email: "",
      },
      checked: false,
      rules: {
        username: [
          {required: true, message: "Please enter username", trigger: "blur"},
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        password: [
          {required: true, message: "Please enter password", trigger: "blur"},
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        repPassword: [
          {required: true, message: "Please repeat password", trigger: "blur"},
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        nickName: [
          {required: true, message: "Please enter nickname", trigger: "blur"},
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        mobile: [
          {required: true, message: "Please enter phone number", trigger: "blur"},
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        email: [
          {required: true, message: "Please enter email", trigger: "blur"},
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login () {
      if (this.form.username === '' || this.form.password === '' || this.form.repassword === '') {
        alert('Username and password should not be empty');
      } else {
        axios({
          method: 'post',
          // http://52.45.86.178:6001/system/api/user/register
          url: '/prod-api/system/api/user/register',
          auth: {
            username: 'livecat-admin',
            password: 'leopanda',
          },
          data: this.form
        }).then(res => {
          console.log(res.data);
          if (res.data.code === 20000) {
            this.$router.push('/login');
            alert('Register successfully, please login');
          }
          else{
            alert('Error');
          }

        }).catch(error => {
          alert('Error');
          console.log(error);
        });
      }
    },
  },

};
</script>

<style scoped>
.loginbody {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background-image: url("../assets/img/register.jpeg");
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  background-repeat: no-repeat;
  position: fixed;
  line-height: 100%;
  padding-top: 150px;
}

.logintext {
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: #3C3C3C;
  /*text-shadow: 2px 2px 4px white;*/
}

.logindata {
  width: 330px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;
}

.butt {
  margin-top: 20px;
  text-align: center;
}

.forgot {
  cursor: pointer;
  text-align: center;
  padding-top: 7px;
  color: #3C3C3C;
}

.shou {
  cursor: pointer;
  color: white;
}

.el-button {
  background-color: #3C3C3C;
  color: white;
  width:330px;
}
</style>
