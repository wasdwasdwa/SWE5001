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
        </el-form>
      </div>
      <div class="tool">
        <div class="button">
          <el-checkbox v-model="checked" @change="remember">Remember me</el-checkbox>
        </div>
        <div class="forgot">
          <span class="forgot" @click="forgetpas">Forgot your password?</span>
        </div>
      </div>
      <div class="butt">
        <el-button type="primary" @click="login" plain>Login</el-button>
      </div>
      <div class="forgot">
        <el-link href="/register" class="forgot" :underline="false">No account? Register</el-link>
      </div>
    </div>
  </div>
</template>

<script>
// import { login } from "@/api/login";
// import { setToken } from "@/request/auth";
import { mapMutations } from 'vuex';

export default {
  name: "Login",
  data() {
    return {
      form: {
        password: "",
        username: "",
      },
      checked: false,
      rules: {
        username: [
          { required: true, message: "Please enter username", trigger: "blur" },
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Please enter password", trigger: "blur" },
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    if(localStorage.getItem("news")){
      this.form=JSON.parse(localStorage.getItem("news"))
      this.checked=true
    }
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          login(this.form)
              .then((res) => {
                if (res.code === 200) {
                  setToken(res.data.token);
                  localStorage.setItem("USERNAME", res.data.username);
                  this.$message({
                    message: "login successfully",
                    type: "success",
                    showClose: true,
                  });
                  this.$router.replace("/");
                } else {
                  this.$message({
                    message: "Wrong username or password",
                    type: "error",
                    showClose: true,
                  });
                }
              })
              .catch((err) => {
                this.$message({
                  message: "账户名或密码错误",
                  type: "error",
                  showClose: true,
                });
              });
        } else {
          return false;
        }
      });
   },
    remenber(data){
      this.checked=data
      if(this.checked){
        localStorage.setItem("news",JSON.stringify(this.form))
      }else{
        localStorage.removeItem("news")
      }
    },
    forgetpas() {
      this.$message({
        type:"info",
        message:"功能尚未开发",
        showClose:true
      })
    },
    register() {},
  },
};
</script>

<style scoped>
.loginbody {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background-image: url("../assets/img/login.jpeg");
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
  color: white;
  /*text-shadow: 2px 2px 4px white;*/
}

.logindata {
  width: 330px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;
}

.tool {
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: white;
}

.butt {
  margin-top: 20px;
  text-align: center;
}

.forgot {
  cursor: pointer;
  text-align: center;
  padding-top: 7px;
  color: white;
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

