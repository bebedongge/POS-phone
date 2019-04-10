import Vue from 'vue'
import Vuex from "vuex";

export default {
	//命名空间
	namespaced: true,
	//状态
	state: {
		//扫描之后商品数据
		goodlist: null,
		//初始化商品数据接口
		intodata:null,
		//会员信息
		member:null,
		//抢券信息
		robStamps:null,
		//抢券弹框是否显示
		robshow:false,
		//结算区域初始化
		settlementInitialization:null,
		paytype:null,//支付方式
		cashshow:false,//现金支付弹框
		zfbstime:null,//支付宝支付状态监听
		 upgrade:null,//升级优惠信息
		 couponing:null,//结算完毕赠送优惠券
		 upgradeshow:false,//会员升级弹框是否显示
		 couponingshow:false,//赠送优惠券是否显示
		 meetRequirement:false,//购物车满足条件活动商品弹框提示
		 meetlist:null,//购物车满足活动商品集合
		

	},
	//过滤状态

	getters: {
		retada(state) {
			return state;
		}

	},
	//同步状态
	mutations: {
		//满足活动商品集合
		meetlist(state,list){
			state.meetlist=list;
		},
		//购物车满足条件活动商品弹框提示
		 meetRequirement(state,list){
			 state.meetRequirement=list;
		 },
		//升级优惠信息
		 upgrade(state,list){
			 state.upgrade=list;
		 },
		 //结算完毕赠送优惠券
		couponing(state,list){
			state.couponing=list;
		},
		//会员升级弹框是否显示
		 upgradeshow(state,list){
			 state.upgradeshow=list;
		 },
		 //赠送优惠券是否显示
		couponingshow(state,list){
			state.couponingshow=list;
		},
		//现金支付弹框
		cashshow(state,list){
			state.cashshow=list;
		},
		paytype(state,list){
			state.paytype=list;
		},//支付方式
		//结算区域初始化
		settlementInitialization(state,list){
			state.settlementInitialization=list;
		},
		//抢券信息
		robStamps(state,list){
			state.robStamps=list;
		},
		//扫描之后商品数据
		goodlist(state, list) {
			state.goodlist = list;
		},
		//初始化商品数据接口
		intodata(state,list){
			state.intodata=list;
		},
		//会员信息
		member(state,list){
			state.member=list;
		},
	},
	//异步提交
	actions: {



	}



}
