<template>
  <div className="body">
    <div className="eventlist">
      <div className="etitle">
        <h2>Title</h2>
      </div>
      <div className="event">
        <div className="poster">
        </div>
        <div className="ede">
          <h3>Event Details</h3>
        </div>
        <div className="edes1">
          <p>Description</p>
        </div>
      </div>


      <div className="edetail">
        <div className="etime">
          <h3>Purchase Detail</h3>
        </div>
        <div className="edes1">
          <p>Quantity:</p>
        </div>
        <div className="edes2">
          <p>Email:</p>
        </div>
        <div className="edes3">
          <p>Address:</p>
        </div>
        <div className="edes4">
          <p>Phone:</p>
        </div>
        <div class="formdata">
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="quantity">
              <el-input v-model="form.quantity" clearable placeholder="Please enter quantity"></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="form.email" clearable placeholder="Please enter email"></el-input>
            </el-form-item>
            <el-form-item prop="address">
              <el-input v-model="form.address" clearable placeholder="Please enter delivery address" show-password></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="form.phone" clearable placeholder="Please enter phone number" show-password></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div className="totalp">
          <h3>Total Price:</h3>
        </div>

        <div class="butt">
          <el-button type="primary" @click="more" plain>Proceed</el-button>
        </div>

      </div>

    </div>
  </div>

  <div className="empty">
  </div>
</template>

<script>
export default {
  name: "Fillorder",
  data() {
    return {
      form: {
        quantity: "",
        email: "",
        address: "",
        phone: "",
      },
      checked: false,
      rules: {
        email: [
          { required: true, message: "Please enter email", trigger: "blur" },
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        address: [
          { required: true, message: "Please enter delivery address", trigger: "blur" },
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    send(form) {
      this.$refs[form].validate((valid) => {

      });
    },
  },
};
</script>

<style scoped>
.body {
  text-align: center;
  width: 100%;
  height: 100%;
  /*padding-top: 30px;*/
  display: flex;
  justify-content: center;
}

.eventlist {
  width: 100%;
  height: 670px;
  vertical-align: middle;
  background-color: #E9E9E9;
  text-align: center;
  /*justify-content:center;*/
  /*display:flex;*/
}

.event {
  margin-left: 150px;
  position: absolute;
  margin-top: 90px;
  width: 630px;
  height: 550px;
  background: white;
}

.edetail {
  margin-left: 800px;
  position: absolute;
  margin-top: 90px;
  width: 650px;
  height: 550px;
  background: white;
}

.dheader1 {
  position: absolute;
  margin-top: 330px;
  width: 650px;
  height: 5px;
  background: #565656;
}

.poster {
  position: absolute;
  width: 630px;
  height: 330px;
  background-color: #CDCDCD;
}

.etitle {
  position: absolute;
  margin-left: 150px;
  margin-top: 10px;
  font-size: 40px;
}

.ede {
  position: absolute;
  margin-left: 25px;
  margin-top: 350px;
}

.etime {
  position: absolute;
  margin-left: 25px;
  margin-top: 20px;
}

.tprice {
  position: absolute;
  margin-left: 25px;
  margin-top: 350px;
}

.edes1 {
  position: absolute;
  margin-left: 45px;
  margin-top: 75px;
}

.edes2 {
  position: absolute;
  text-align: left;
  margin-left: 45px;
  margin-top: 125px;
}
.edes3 {
  position: absolute;
  text-align: left;
  margin-left: 45px;
  margin-top: 175px;
}
.edes4 {
  position: absolute;
  text-align: left;
  margin-left: 45px;
  margin-top: 225px;
}
.formdata{
  position:absolute;
  width: 420px;
  margin-left: 170px;
  margin-top: 70px;
}
.totalp{
  position: absolute;
  text-align: left;
  margin-left: 25px;
  margin-top: 350px;
}
.butt {
  position: absolute;
  margin-left: 530px;
  margin-top: 500px;
  text-align: center;
}
.el-button {
  background-color: #AF473C;
  color: white;
  width:100px;
}
.empty {
  padding-top: 50px;
}
</style>