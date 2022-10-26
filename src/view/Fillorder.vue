<template>
  <div className="body">
    <div className="eventlist">
      <div className="etitle">
        <h2>{{ this.$route.params.ticketname }}</h2>
      </div>
      <div className="event">
        <div className="poster">
          <img :src="Img.imageUrl" class="pic" >
        </div>
        <div className="ede">
          <h3>Event Details</h3>
        </div>
        <div class="su">
          <p>{{ Img.summary }}</p>
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
            <el-form-item prop="deliveryEmail">
              <el-input v-model="form.deliveryEmail" clearable placeholder="Please enter email"></el-input>
            </el-form-item>
            <el-form-item prop="deliveryAddress">
              <el-input v-model="form.deliveryAddress" clearable placeholder="Please enter delivery address"></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="form.phone" clearable placeholder="Please enter phone number"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div className="totalp">
          <h3>Total Price: {{this.$route.params.ticketprice }} x {{this.form.quantity}}</h3>
        </div>

        <div class="butt">
          <el-button type="primary" @click="send" plain>Proceed</el-button>
        </div>

      </div>

    </div>
  </div>

  <div className="empty">
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Fillorder",
  data() {
    return {
      form: {
        ticketId:this.$route.params.ticketid,
        quantity: "",
        deliveryEmail: "",
        deliveryAddress: "",
        phone: "",
      },
      Img:{
        imageUrl:'',
        summary:'',
      },
      checked: false,
      rules: {
        quantity: [
          { required: true, message: "Please enter quantity", trigger: "blur" },
        ],
        deliveryEmail: [
          { required: true, message: "Please enter email", trigger: "blur" },
        ],
        deliveryAddress: [
          { required: true, message: "Please enter delivery address", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "Please enter mobile phone", trigger: "blur" },
          // { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
      },
    };
  },
  mounted(){
    if (localStorage.getItem("access_token") == null) {
      alert('Please login first')
      this.$router.push('/login')
    }
    // /prod-api
    // http://52.45.86.178:6001
    axios.get("/prod-api/ticket/api/events/" + this.$route.params.eventid).then((res) => {
      this.Img.imageUrl = res.data.data.event.imageUrl;
      this.Img.summary = res.data.data.event.summary;
    }).catch((err) => {
      console.log(err);
    })
  },
  methods: {
    send() {
      let token = localStorage.getItem("access_token")
      axios({
        method: 'post',
      // /prod-api/ticket/purchase
        // url: 'http://52.45.86.178:6001/ticket/purchase',
        url: '/prod-api/ticket/purchase',
        headers: {
          Authorization: token,
        },
        data: this.form
      }).then(res => {
        const payId = res.data.data.paymentId;
        const orderId = res.data.data.id;
        if (res.data.code === 20000) {
          const orderInfo = res.data.data;
          localStorage.setItem('orderInfo',JSON.stringify(orderInfo));
          console.log(res.data);
          this.$router.push({
            name: 'Ordercreated',
            params: {
              paymentid: payId,
            }
          })
        }
        if (res.data.code === 602){
          this.$router.push({
            name: 'Orderfail',
            params: {
              eventid: this.$route.params.eventid,
              orderid:orderId
            }
          })
        }

      }).catch(error => {
        alert('error');
        console.log(error);
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
.su{
  position: absolute;
  text-align: justify;
  margin-left: 45px;
  margin-top: 400px;
  width: 540px;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:5;
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
  overflow: hidden;
}
.pic{
  max-height:100%;
  object-fit: contain;
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