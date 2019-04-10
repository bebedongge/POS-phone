import Vue from 'vue'
import Vuex from "vuex";

export default {
	//命名空间
	namespaced: true,
	//状态
	state: {
		mechanismData: "", //机构数据
		saveMechanism: "", //用户点击机构数据保存
		logindata: "", //成功登录之后保存数据
		uerInfo: {},  //登录
        hasLogin: false //是否登录

	},
	//过滤状态

	getters: {
		retada(state) {
			return state;
		}

	},
	//同步状态
	mutations: {
		//成功登录之后保存数据
		logindata(state, list) {
			state.logindata = list;
		},

		//机构数据
		mechanismData(state, list) {
			state.mechanismData = list;
		},
		//用户点击机构数据保存
		saveMechanism(state, list) {
			state.saveMechanism = list;
		},
		
		//改变登录状态 
		login(state, provider) {  
			state.hasLogin = true
			state.uerInfo = provider
			uni.setStorage({ //将用户信息保存在本地  
				key: 'uerInfo',
				data: provider
			})
		},
		//退出登录 
		logout(state) {  
			state.hasLogin = false
			state.uerInfo = {}
			uni.removeStorage({
				key: 'uerInfo'
			})
		}



	},
	//异步提交
	actions: {



	}

}
