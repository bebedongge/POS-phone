import Vue from "vue";
import Vuex from "vuex";
import mo1 from './modules/new_file';
import login from './modules/login';
import mian from './modules/mian';
Vue.use(Vuex);
export default new Vuex.Store({
   
modules:{
	mo1,login,mian
},
    //状态
    state: {
       inde:"测试" ,
	  // requestUrl:"http://192.168.0.244:8085",
	    requestUrl:"http://47.96.112.195:8085",


    },
    getters: {
        indext(state){
            return state;
        }
    },
    //状态变化
    mutations: {
        


    },
    //操作
    actions: {
       
       
    }

})