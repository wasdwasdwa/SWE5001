import {createRouter, createWebHistory} from 'vue-router'
import Home from '../view/Home'
import Login from '../view/Login'
import Register from "@/view/Register";
import Info from "@/view/Info";
import Ordercreated from "@/view/Ordercreated";
import Paysuccess from "@/view/Paysuccess";
import Orderfail from "@/view/Orderfail";
import Purchasehistory from "@/view/Purchasehistory";
import Purchasedetail from "@/view/Purchasedetail";
import Fillorder from "@/view/Fillorder";

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            isLogin: false,
            isShowHeader: true
        }
    },

    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            isLogin: false,
            isShowHeader: false,
            isShowFooter: false
        }
    },

    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            isLogin: false,
            isShowHeader: false,
            isShowFooter: false
        }
    },
    {
        path: '/info/:eventid',
        name: 'Info',
        component: Info,
        meta: {
            isLogin: false,
            isShowHeader: true,
            isShowFooter: true
        }
    },

    {
        path: '/ordercreated',
        name: 'Ordercreated',
        component: Ordercreated,
        meta: {
            isLogin: true,
            isShowHeader: true,
            isShowFooter: true
        }
    },
    {
        path: '/paysuccess',
        name: 'Paysuccess',
        component: Paysuccess,
        meta: {
            isLogin: true,
            isShowHeader: true,
            isShowFooter: true
        }
    },
    {
        path: '/orderfail',
        name: 'Orderfail',
        component: Orderfail,
        meta: {
            isLogin: true,
            isShowHeader: true,
            isShowFooter: true
        }
    },
    {
        path: '/purchasehistory',
        name: 'Purchasehistory',
        component: Purchasehistory,
        meta: {
            isLogin: true,
            isShowHeader: true,
            isShowFooter: true
        }
    },
    {
        path: '/purchasedetail/:orderid',
        name: 'Purchasedetail',
        component: Purchasedetail,
        meta: {
            isLogin: true,
            isShowHeader: true,
            isShowFooter: true
        }
    },
    {
        path: '/fillorder/:ticketname/:ticketid/:ticketprice',
        name: 'Fillorder',
        component: Fillorder,
        meta: {
            isLogin: true,
            isShowHeader: true,
            isShowFooter: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router
