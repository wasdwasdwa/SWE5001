import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import axios from 'axios'
import App from './App.vue';

createApp(App).use(router).use(ElementPlus).mount('#app')

App.config.globalProperties = axios

router.beforeEach((to, from, next) => {
    let getFlag = localStorage.getItem("Flag");
    if(getFlag === "isLogin"){
        store.state.isLogin = true
        store.state.usname = localStorage.getItem("Uname")

        if (to.path == '/login') {
            localStorage.removeItem("Flag")
            localStorage.removeItem("Uname")
            alert("Log out!")
            next({
                path: '/'
            })
        }

        next()
    }else{
        if(to.meta.isLogin){
            next({
                path: '/login',
            })
            alert('Please login')
        }else{
            next()
        }
    }
});