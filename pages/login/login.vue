<template>
	<view id="login">
		<image style="position: fixed;left: 0upx; top: 0upx; bottom: 0upx;" src="../../static/login/background.png" mode=""></image>
		
		
		<view>
			<image class="httle" src="../../static/index/brush_3.png" mode=""></image>
			<image  class="log" src="../../static/login/logo.png" mode=""></image>
			<text class="title">POS手机版</text>
		
		
		</view>
		<!-- <view class="logo">
			<view class="image">
				<image src="../../static/login/logo.png" mode=""></image>
			</view>
		</view> -->
		<view class="input">
			<view class="redi">
				<input type="text" v-model="jobNumber" class="inputtext" cursor=120 value="" placeholder="请输入工号" />
				<image class="ima" src="../../static/login/number.png" mode=""></image>
			</view>
			<view class="redi">
				<input v-model="choice.department_name" v-if="choice!=''" type="text" class="inputtext" disabled="true" @click="popup"
				 placeholder="请选择机构" />
				<input v-else type="text" class="inputtext" disabled="true" @click="popup" placeholder="请选择机构" />
				<image class="ima" src="../../static/login/institutions.png" mode=""></image>
			</view>
			<view class="redi">
				<input type="text" adjust-position="true" password="true" class="inputtext" v-model="password" placeholder="请输入密码" />
				<image class="ima" src="../../static/login/password.png" mode=""></image>
			</view>
		</view>

		<button class="btn" type="primary" @click="login">登录</button>

		<!-- 机构选择菜单 -->
		<xyz-bottom-category ref="xyzBottomCategory" v-on:childByValue="childByValue"></xyz-bottom-category>
		<!-- 错误提示 -->
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages" @clickMessage="clickMessage"></HMmessages>

	</view>
</template>

<script>
	import Vue from "vue";
	import xyzBottomCategory from "../../components/xyz-category/xyz-bottom-category.vue"; //机构选择器
	import HMmessages from "@/components/HM-messages/HM-messages.vue"

	import {
		login
	} from 'vuex';

	export default {
		components: {
			xyzBottomCategory,
			HMmessages
		},
		data() {
			return {
				jobNumber: "", //工号
				chaod: "",
				password: "",
			}
		},
		//监听手机物理返回键
		onBackPress() {
				uni.showModal({
					title: '提示',
					content: '是否退出POS手机版？',
					success: function(res) {
						if (res.confirm) {
							// 退出当前应用，改方法只在App中生效
							plus.runtime.quit();
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				return true;
			
		},
		
		computed: {
			//用户选择机构
			choice() {
				this.chaod = this.$store.getters['login/retada'].saveMechanism
				return this.chaod;
			}

		},

		methods: {

			//选择机构弹出菜单
			popup() {
				if (this.jobNumber == "") {
					//	console.log("请输入工号")
					this.HMmessages.show('请输入工号', {
						"icon": "error",
						"closeButton": true,
						// "background":'#2f54eb'
					});
				} else {
					this.accessInstitutions();


				}

			},
			// 获取登录机构
			accessInstitutions() {
				let _this = this;
				uni.request({
					url: _this.$store.state.requestUrl + '/depart/getDepart/' + this.jobNumber, //仅为示例，并非真实接口地址。
					success: (res) => {
						console.log('机构数据：' + JSON.stringify(res.data));
						if (res.data.status == 0 && res.data.data.length != 0) {
							_this.$store.commit("login/mechanismData", res.data);
							_this.$refs.xyzBottomCategory.show(); //底部弹出xyz-bottom-category
						} else {
							this.HMmessages.show("工号输入有误，请正确输入", {
								"icon": "error",
								closeButton: true
							});
						}
					}
				});

			},
			//提示信息
			clickMessage() {
				this.HMmessages.close()
			},
			//登录函数
			login() {
				let _this = this;
				uni.request({
					url: _this.$store.state.requestUrl + '/user/login', //仅为示例，并非真实接口地址。
					data: {
						username: this.jobNumber, //用户名
						password: this.password, //密码
						departmentId: this.chaod.department_id //机构
					},
					method: "POST",
					success: (res) => {
						console.log('登录成功之后数据：' + JSON.stringify(res.data));
						if (res.data.status == 0) {
							_this.$store.commit('login/logindata', res.data.data);

							//将登录用户名密码信息保存，下次进来用户无需再登录
							let uer = {
								username: _this.jobNumber,
								password: _this.password,
								departmentId: _this.chaod.department_id
							}

							console.log("导入数据：" + JSON.stringify(uer))
							//_this.$store.commit('login/loginlacat',uer);
							uni.setStorageSync('storage_key', uer);
                            setTimeout(function(){
								uni.navigateTo({
									url: '../index/index'
								});
							},500)
							
						} else {
							this.HMmessages.show("登录失败," + res.data.message, {
								"icon": "error",
								closeButton: true
							});
						}

					}
				});

			}
		},

	
	}
</script>

<style >
	#login .title {
		z-index: 3;
		position: absolute;
		left: 258.333333upx;
		top: 71.25upx;
		color: #FFFFFF;
		font-size: 29.166666upx;
		font-weight: bold;
	}

	#login .httle {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 178.666666upx;
		z-index: 1;
	}
	#login .log {
		position: absolute;
		left: 15.416666upx;
		top: 45.833333upx;
		z-index: 2;
		width: 216.666666upx;
		height: 83.333333upx;
	}
	#login {
		width: 100%;
		height: 100%;
		background: #ffffff;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	#login .image {
		width: 310.416666upx;
		height: 123.958333upx;
		margin: 187.5upx auto 121.875upx;
	}

	#login image {
		width: 100%;
		height: 100%;
	}

	#login .input {
		width: 583.333333upx;
		height: 395.833333upx;
		margin: 404.166666upx auto 0upx;
		color:#666666;


	}

	#login .redi {
		position: relative;
		width: 100%;
		height: 91.666666upx;
		border-radius: 45.833333upx;
		background: #f4f4f4;
		margin-bottom: 52.083333upx;
	}

	#login .ima {
		position: absolute;
		top: 19.416666upx;
		left: 16.416666upx;
		width: 52.083333upx;
		height: 52.083333upx;
	}

	#login .inputtext {
		width: 90%;
		height: 100%;
		background: #f4f4f4;
		border-bottom-right-radius: 45.833333upx;
		border-top-right-radius: 45.833333upx;
		left: 15%;
		position: absolute;
	}

	#login .btn {
		background: #f96c1d;
		box-shadow: 10.416666upx 16.666666upx 31.25upx 0 rgba(249, 108, 29, 0.60);
		border-radius: 100px;
		width: 583.333333upx;
		height: 91.666666upx;
		margin-top: 104.166666upx;
	}
</style>
