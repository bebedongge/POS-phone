import Vue from 'vue'
import Vuex from "vuex";

export default {
    //命名空间
    namespaced:true,
    //状态
    state:{
        name:"张三11111",
        
    },
    //过滤状态

    getters: {
       retada(state){
		   return state;
	   }

    },
   //同步状态
    mutations:{

    },
    //异步提交
    actions:{
      


    }



}