<template>
	<view class="content" id="index">
		<!-- 公共头部导航 -->
		<new-head></new-head>



		<view v-if="gonngda==null">
			<!-- <image class="bacs" src="../../static/index/background_3.png" mode=""></image> -->
			<image class="bacs" src="../../static/login/background.png" mode=""></image>
			<image class="tishi" src="../../static/index/price_tag.png" mode=""></image>
			<text class="saom">请扫描商品条码</text>
			<image class="goodimg" src="../../static/index/scanning_h.png" mode=""></image>
		</view>
		<view v-else>

			<commodity-pool></commodity-pool>

		</view>

		<view v-if="gonngda==null" class="botmm" @click="settlementJump">
			<image class="img" src="../../static/index/brush_4.png" mode=""></image>
			<image class="styled fa1" src="../../static/index/pay_treasure_gray_2.png" mode=""></image>
			<image class="styled fa2" src="../../static/index/wechat_gray_2.png" mode=""></image>
			<image class="styled fa3" src="../../static/index/card_h.png" mode=""></image>
			<image class="styled fa4" src="../../static/index/cash_h.png" mode=""></image>
			
			<text class="stytext tex1">支付宝</text>
			<text class="stytext tex2">微信</text>
			<text class="stytext tex3">会员</text>
			<text class="stytext tex4">现金</text>
			<image class="fe1" src="../../static/index/fen.png" mode=""></image>
			<image class="fe2" src="../../static/index/fen.png" mode=""></image>
			<image class="fe3" src="../../static/index/fen.png" mode=""></image>

		</view>
		<view class="botmm" v-else>
			<image class="img" src="../../static/index/brush_4.png" mode="">

			</image>
			<button class="btn" @click="activeHint">去结算</button>

		</view>


		<!-- <view>
			<text class="title">{{title}}</text>
			<button @click="xud">选择图片</button>
			<button type="primary" @click="sao">扫码</button>
			<button type="primary" @click="tiao">跳转</button>
		</view> -->


		<!-- 错误提示 -->
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages" @clickMessage="clickMessage"></HMmessages>
		<!-- 抢券弹框 -->
		<robStamps></robStamps>
        <!-- 购物车满足条件活动商品弹框提示 -->
		<view v-show="meetRequirement">
		<conditionsSatisfaction></conditionsSatisfaction>
		</view>
	</view>
</template>

<script>
	import HMmessages from "@/components/HM-messages/HM-messages.vue";
	import newHead from '@/components/new-head/new-head.vue';
	import commodityPool from '@/components/commodity-pool/commodity-pool.vue';
	import robStamps from '../../components/rob-stamps/rob-stamps.vue';
	import conditionsSatisfaction from '../../components/conditions-satisfaction/conditions-satisfaction.vue';

	export default {
		components: {
			HMmessages,
			newHead,
			commodityPool,
			robStamps,
			conditionsSatisfaction
		},
		data() {
			return {
				
			}
		},
		computed: {
			//判断购物车里商品有满足活动
			meetRequirement(){
				//console.log('判断是否有活动商品：'+this.$store.state.mian.meetRequirement)
				return this.$store.state.mian.meetRequirement;
			},
			
			
			//登录的会员信息（兼容app版本）
			memberlist() {
				let data = this.$store.state.login.logindata;

				return data;
			},
			gonngda() {

				console.log("首页初始化是否有数据：" + JSON.stringify(this.$store.state.mian.intodata));
				return this.$store.state.mian.intodata;
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

		onLoad() {

		},
		methods: {

			//选择相册方法
			xud() {
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));

					}
				});
			},
			//扫商品条码获取商品数据
			sao() {


				console.log("读取本地内容：" + JSON.stringify(uni.getStorageSync('uerbane')));


				let _this = this;
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function(res) {


						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						_this.ObtainCommodity(res.result);

					},
					fail: function(err) {
						console.log("扫描二维码失败：" + err);
					}
				});
			},
			//初始化商品列表
			initi() {
				this.$http.get('pc/posRestingOrder/initAutoPosRestingOrder', {
					"state": 10,
					"posTicketType": 10,
					"payTypeId": ""
				}).then((res) => {

					console.log('初始化挂单数据：' + JSON.stringify(res.data));
					this.$store.commit('mian/intodata', res.data);
				})
			},


			tiao() {
				console.log("测试跳转")
				uni.navigateTo({
					url: '../login/login'
				});
			},
			// 扫描之后获取商品数据函数
			ObtainCommodity(barCode) {


				let _this = this;
				console.log('扫描之前各参数：Authorization：' + _this.$store.state.login.logindata.accessToken + ",barCode:" + barCode)
				this.$http.post('pc/posRestingOrder/addGoodsToRestingOrderByBarCode', {
					"barCode": barCode,
					"posTicketCode": '',
					"state": 10,
					"posTicketType": 10,
					"restingOrderType": 10,
					"memberCode": ''
				}).then((res) => {
					this.$store.commit('mian/goodlist', res.data);
					if (res.data.status == 0) {
						_this.initi();
					}

				})
			},
			//登录函数
			login(list) {
				let _this = this;
				uni.request({
					url: _this.$store.state.requestUrl + '/user/login',
					data: {
						username: list.username, //用户名
						password: list.password, //密码
						departmentId: list.departmentId //机构
					},
					method: "POST",
					success: (res) => {
						console.log('首页登录成功之后数据：' + JSON.stringify(res.data));
						if (res.data.status == 0) {
							_this.$store.commit('login/logindata', res.data.data);


						} else {
							this.HMmessages.show("登录失败," + res.data.message, {
								"icon": "error",
								closeButton: true
							});
						}

					}
				});

			},
			//结算方法
			settlementJump() {

				//console.log('测试按钮点击不生效'+JSON.stringify(this.$store.state.mian.intodata))

				if (this.$store.state.mian.intodata != null) {

					uni.navigateTo({
						url: '../shoppingcart/shoppingcart',
						// animationType:'none'
						animationDuration: 500
					});
				} else {
					this.HMmessages.show("请扫描商品条码", {
						"icon": "error",
						closeButton: true
					});
				}


			},
			//活动商品提示
			activeHint() {
				if (this.$store.state.mian.intodata != null) {

					this.$http.post('pc/goodsActivity/getGoodsActivity', {
						"posTicketCode": this.$store.state.mian.intodata.data.list[0].pos_ticket_code,
						"state": 10,
						"posTicketType": 10,
						"restingOrderType": 10,
					}).then((res) => {
						
						if (res.data.status == 0) {
							if (res.data.data == null) {
								this.settlementJump();
							} else {
								if (res.data.data.activity_msg_yes_list.length == 0 && res.data.data.activity_msg_no_list.length == 0) {
									this.settlementJump();
								} else {
									this.$store.commit('mian/meetRequirement',true);
									
								
                                    this.$store.commit('mian/meetlist',res.data.data);
								
								}
							}

						} else {

						}

					})

				} else {
					this.HMmessages.show("请扫描商品条码", {
						"icon": "error",
						closeButton: true
					});
				}

			},



			//获取支付方式
			Payment() {
				this.$http.get('pc/payType/getPayTypeList').then((res) => {
					console.log("获取支付方式：" + JSON.stringify(res.data))
					//this.paytype = res.data.data;
					this.$store.commit('mian/paytype', res.data.data);
				})
			},




		},

		mounted() {


			try {
				const value = uni.getStorageSync('storage_key');
				if (value) {

					//console.log("进入首页判断用户是否有登录信息：" + JSON.stringify(value));

					//console.log("初始化首页商品数据："+this.$store.state.mian.goodlist);
					this.login(value);
				} else {
					uni.navigateTo({
						url: '../login/login'
					});
				}
			} catch (e) {
				//TODO handle the exception
			}
			this.Payment();




		}
	}
</script>

<style scoped>
	.btn {
		position: fixed;
		left: 31.25upx;
		bottom: 16.041666upx;
		background: #f5ecd9;
		border-radius: 6.25upx;
		width: 687.5upx;
		height: 102.083333upx;

	}

	.content {
		text-align: center;
		height: 400upx;


	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	#index .bacs {
		position: fixed;
		top: 0px;
		left: 0px;
		bottom: 0upx;
		width: 100%;
		height: 100%;
	}

	#index .httle {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 168.666666upx;
		z-index: 1;
	}

	#index .log {
		position: absolute;
		left: 15.416666upx;
		top: 38.833333upx;
		z-index: 2;
		width: 216.666666upx;
		height: 83.333333upx;
	}

	#index .title {
		z-index: 3;
		position: absolute;
		left: 258.333333upx;
		top: 61.25upx;
		color: #FFFFFF;
		font-size: 29.166666upx;
		font-weight: bold;
	}

	#index .tishi {
		width: 418.75upx;
		height: 106.25upx;
		position: absolute;
		left: 176.666666upx;
		top: 407.291666upx;
		z-index: 2;
	}

	#index .saom {
		position: absolute;
		left: 246.666666upx;
		top: 432.291666upx;
		z-index: 3;
		font-size: 35.416666upx;
		font-weight: bold;

	}

	#index .goodimg {
		width: 373.958333upx;
		height: 312.5upx;
		position: absolute;
		left: 206.666666upx;
		top: 632.291666upx;
		z-index: 3;
	}

	#index .botmm {
		width: 100%;
		height: 159.583333upx;

		position: fixed;
		bottom: 0upx;
		left: 0upx;
		z-index: 6;
	}

	#index .img {
		position: fixed;
		bottom: 0upx;
		left: 0upx;
		width: 100%;
		height: 159.583333upx;
	}

	#index .styled {
		position: fixed;
		bottom: 50.416666upx;
		width: 62.5upx;
		height: 62.5upx;
	}

	#index .stytext {
		position: fixed;
		bottom: 10.416666upx;
		font-size: 25upx;
		color: #525c5c;
	}

	#index .fa1 {
		left: 42.5upx;
	}

	#index .fa2 {
		left: 244.791666upx;
	}

	#index .fa3 {
		left: 456.041666upx;
	}

	#index .fa4 {
		left: 646.041666upx;
	}


	#index .tex1 {
		left: 41.25upx;
	}

	#index .tex2 {
		left: 246.041666upx;
	}

	#index .tex3 {
		left: 462.708333upx;
	}

	#index .tex4 {
		left: 652.708333upx;
	}

	#index .fe1 {
		position: fixed;
		left: 170.708333upx;
		bottom: 5.208333upx;
		width: 2.083333upx;
		height: 120.208333upx;
	}

	#index .fe2 {
		position: fixed;
		left: 385upx;
		bottom: 5.208333upx;
		width: 2.083333upx;
		height: 120.208333upx;
	}

	#index .fe3 {
		position: fixed;
		left: 585upx;
		bottom: 5.208333upx;
		width: 2.083333upx;
		height: 120.208333upx;
	}

	#index .acctionf {
		margin-top: 102.083333upx;
		width: 100%;
		height: 616.666666upx;

	}
</style>
