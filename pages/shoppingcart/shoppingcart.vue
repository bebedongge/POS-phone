<template>
	<view>
		<!-- <new-head></new-head> -->
		<view id="newhead1">
			<view>
				<image class="httle" src="../../static/index/brush_3.png" mode=""></image>

				<image @click="toshow" class="log" src="../../static/login/logo.png" mode=""></image>
				<text class="title">POS手机版</text>


			</view>

			<lvv-popup position="left" ref="lvvpopref">
				<view style="background:#f5f3ef;width:458.333333upx;height: 100%;position: absolute;left:0;">
					<view class="acctionf">
						<view style="width: 100%; height: 155.416666upx; background: #0e2223; text-align: center;line-height:155.416666upx ;">
							<image style="width: 216.666666upx; height: 83.333333upx; margin-top: 52.083333upx" src="../../static/login/logo.png"
							 mode=""></image>
						</view>

						<view class="lvvtitle">门店： {{memberlist.departmentName}}</view>
						<view style="width:458.333333upx;height:1.041666upx;background: #eae6e2;"></view>

						<view class="lvvtitle">账号: {{memberlist.userCode}}</view>
						<view style="width:458.333333upx;height:1.041666upx; background: #eae6e2;"></view>
						<button type="primary" class="btn" style="" @click="qieh">切换用户</button>
						<view style="position: fixed; bottom: 5.25upx; text-align: center; width: 458.333333upx; font-size: 25upx;" class="lvvtitle">新仙C果版权所有</view>

					</view>
				</view>
			</lvv-popup>
		</view>


		<view class="shomian">
			<!-- <image class="bacimg" src="../../static/index/background_2.png" mode=""></image> -->
			<image class="bacimg" src="../../static/login/background.png" mode=""></image>

			<image class="tishi" src="../../static/index/price_tag.png" mode=""></image>
			<view class="tishi" style="line-height:132.291666upx ; font-size: 29.166666upx;color:#be0000; text-align: center; ">
				合计：<text style="font-size: 58.333333upx;" v-if="total!=null">{{total.init_money}}</text>
			</view>
			<!-- <view style="text-align: center; font-size: 37.5upx; position: fixed; top: 270px;width: 100%;">
				请展示付款码，用扫码枪扫码支付
			</view> -->
			<image class="goodimg" src="../../static/index/pay.png" mode=""></image>
		</view>


		<view class="botmm">
			<image class="img" src="../../static/index/brush_4.png" mode=""></image>
			<image @click="scanningControl('ZFB')" class="styled fa1" src="../../static/index/pay_treasure_blue_2.png" mode=""></image>
			<image @click="scanningControl('WEIXIN')" class="styled fa2" src="../../static/index/wechat_green_2.png" mode=""></image>
			<image @click="membershipPayment" class="styled fa3" src="../../static/index/card_yellow_2.png" mode=""></image>
			<image class="styled fa4" @click="cashpay" src="../../static/index/cash.png" mode=""></image>
			<text class="stytext tex1" @click="scanningControl('ZFB')">支付宝</text>
			<text class="stytext tex2" @click="scanningControl('WEIXIN')">微信</text>
			<text class="stytext tex3" @click="membershipPayment">会员</text>
			<text class="stytext tex4" @click="cashpay">现金</text>
			<image class="fe1" src="../../static/index/fen.png" mode=""></image>
			<image class="fe2" src="../../static/index/fen.png" mode=""></image>
			<image class="fe3" src="../../static/index/fen.png" mode=""></image>
		</view>
		<!-- 现金弹框 -->
		<view v-show="cashow">
			<cashChange></cashChange>
		</view>
		<!-- 会员升级弹框 -->
		<view v-show="upgradeshow">
			<upgradeBounced></upgradeBounced>
		</view>
		<!-- //结算完毕赠送的优惠券 -->
		<view v-show="couponingshow">

			<freeCoupons></freeCoupons>
		</view>
		<view>
			<xyDialog title="状态" content="支付成功!欢迎下次光临~" :show="showDialog_1" :isShowCancel="false" @confirmButton="clickConfirm(1)"></xyDialog>
		</view>

	</view>
</template>

<script>
	import newHead from '@/components/new-head/new-head.vue';
	import lvvPopup from '../../components/lvv-popup/lvv-popup.vue';
	import cashChange from '../../components/cash-change/cash-change.vue'; //现金收银弹框
	import upgradeBounced from '../../components/upgrade-bounced/upgrade-bounced.vue'; //会员升级弹框
	import freeCoupons from '../../components/free-coupons/free-coupons.vue'; //结算完毕赠送的优惠券
	import xyDialog from '../../components/xy-dialog/xy-dialog.vue'; //支付完成之后弹框
	export default {
		components: {
			newHead,
			lvvPopup,
			cashChange,
			upgradeBounced,
			freeCoupons,
			xyDialog
		},
		data() {
			return {
				paytype: null, //支付方式
				zfbstime: null, //轮训支付宝支付状态
				weixintime: null, //轮训微信支付状态
				membership: true, //判断会员支付后台数据没返回之前不能再点击 
				// cashChangeshow:true,//现金弹框
				showDialog_1: false, //支付状态弹框提示
				control: true, //控制支付频繁点击

			}
		},
		computed: {
			//现金金额弹框显示
			cashow() {
				return this.$store.state.mian.cashshow;
			},

			//登录的会员信息（兼容app版本）
			memberlist() {
				let data = this.$store.state.login.logindata;
				console.log("会员信息1：" + JSON.stringify(this.$store.state.login.logindata))
				return data;
			},
			//商品数据集合
			retada() {
				console.log('商品数据集合:' + JSON.stringify(this.$store.state.mian.intodata));
				return this.$store.state.mian.intodata;
			},
			//合计优惠信息
			total() {
				//  console.log("结算初始化222："+JSON.stringify(this.$store.state.mian.settlementInitialization))
				return this.$store.state.mian.settlementInitialization

			},
			//会员升级弹框
			upgradeshow() {
				return this.$store.state.mian.upgradeshow
			},
			//赠送优惠券弹框
			couponingshow() {
				return this.$store.state.mian.couponingshow;
			},


		},
		methods: {
			//现金支付
			cashpay() {

				let id = this.paytype[3].id
				this.qiesettlementInitialization(id);

				this.$store.commit('mian/cashshow', true);
			},


			// 显示modal弹出框
			toshow() {

				this.$refs.lvvpopref.show();
			},
			//切换账号
			qieh() {
				try {
					uni.removeStorageSync('storage_key');
					uni.navigateTo({
						url: '../login/login'
					});
				} catch (e) {
					// error
				}
			},
			//会员卡支付
			membershipPayment() {
				let id = this.paytype[0].id
				this.qiesettlementInitialization(id);
				console.log('会员卡之前判断：' + this.$store.state.mian.member);

				if (this.membership == true) {
					if (this.$store.state.mian.member != null) {
						let list = {
							'payTypeCode': this.paytype[0].payTypeCode,
							'payTypeId': this.paytype[0].id
						}
						this.paysuan("", list)
						this.membership = false
					} else {

						this.membershipPaymentpa();
					}

				} else {
					uni.showToast({
						title: "请不要频繁点击",
						icon: "none",
						duration: 2000
					});
					let _this = this;
					setTimeout(function() {
						_this.membership = true
					}, 1500)
				}

			},

			scanningControl(ste) {
				if (this.control == true) {
					this.payment(ste);
				} else {
					uni.showToast({
						title: "请不要频繁点击",
						icon: "none",
						duration: 2000
					});
				}
				let _this=this;
				setTimeout(function() {
					_this.control = true;
				}, 1500)


			},


			//扫描结算
			payment(ste) {
				let list = {

				}
				let id = "";
				if (ste == "MEMBER_CARD") {
					list = {
						'payTypeCode': this.paytype[0].payTypeCode,
						'payTypeId': this.paytype[0].id
					}
					id = this.paytype[0].id
					this.qiesettlementInitialization(id);
				} else if (ste == "ZFB") {
					list = {
						'payTypeCode': this.paytype[1].payTypeCode,
						'payTypeId': this.paytype[1].id
					}
					id = this.paytype[1].id
					this.qiesettlementInitialization(id);
				} else if (ste == "WEIXIN") {
					list = {
						'payTypeCode': this.paytype[2].payTypeCode,
						'payTypeId': this.paytype[2].id
					}
					id = this.paytype[2].id
					this.qiesettlementInitialization(id);
				}
				let _this = this;
				let cashow = true;
               _this.control=false;
				// 允许从相机和相册扫码

				uni.scanCode({
					success: function(res) {
						
						// 						console.log('条码类型：' + res.scanType);
						// 						console.log('条码内容：' + res.result);
						_this.paysuan(res.result, list);
					},
					fail: function(err) {
						console.log("扫描二维码失败：" + err);
					}
				});
				


			},
			//结算接口
			paysuan(val, list) {
				uni.showLoading({
					title: '支付中...'
				});
				//console.log('payMoney值：'+JSON.stringify(this.$store.state.mian.settlementInitialization))
				let payMoney = this.$store.state.mian.settlementInitialization.init_money

				this.$http.post('pc/posPayment/posPaymentAction', {
					"payTypeCode": list.payTypeCode,
					"payTypeId": list.payTypeId,
					"posTicketCode": this.$store.state.mian.intodata.data.list[0].pos_ticket_code,
					"state": 10,
					"payMoney": payMoney,
					"posTicketType": 10,
					"restingOrderType": 10,
					"sysParamId": "",
					"authCode": val,
					"memberPwd": "", //会员密码
					"manualDiscount": 0, //口令优惠金额
					"manualDiscountPassword": "", //口令密码
					"isInputMember": "", //是否手动输入会员号
					"isNoMemberToPay": 3 //是否未登录会员可以支付
				}).then((res) => {

					if (list.payTypeCode == "ZFB") { //支付宝
						this.ZHBpay(res.data.data.tradeNo);
					} else if (list.payTypeCode == "MEMBER_CARD") { //会员卡

						console.log('会员卡支付之后：' + JSON.stringify(res.data))
						uni.hideLoading();
						if (res.data.status == 0) {
							// 							uni.showToast({
							// 								title: "支付成功",
							// 								icon: "success",
							// 								duration: 2000
							// 							});

							if (res.data.moreInfo == null & res.data.extendData.length == 0) {
								this.showDialog_1 = true; //显示支付成功弹框
							}

							this.favorableUpgrade(res.data); //会员升级、赠送优惠券提示
							this.$store.state.mian.member = null; //清空会员信息
							//清空购物车商品
							this.$http.get('pc/posRestingOrder/initAutoPosRestingOrder', {
								"state": 10,
								"posTicketType": 10,
								"payTypeId": ""
							}).then((res) => {

								this.$store.commit('mian/intodata', res.data);
								this.$store.commit('mian/intodata', null);
								this.$store.commit('mian/goodlist', null);
								this.membership = true;
							})
						} else {
							uni.showToast({
								title: "支付失败",
								icon: "none",
								duration: 2000
							});
						}




					} else if (list.payTypeCode == "WEIXIN") { //微信
						if (res.data.data.resultCode == "SUCCESS" && res.data.data.isCallNotify != 0) {

							if (res.data.data.errCodeDes != null) {
								uni.showToast({
									title: res.data.data.errCodeDes,
									icon: "none",
									duration: 3000
								});
							} else {
								this.WEIXINpay(res.data.data.tradeNo);
							}


						} else if (res.data.data.resultCode == "SUCCESS" && res.data.data.isCallNotify == 0) {
							console.log('微信支付快捷通道' + JSON.stringify(res.data.data.data))

							// 							uni.showToast({
							// 								title: "支付成功",
							// 								icon: "success",
							// 								duration: 2000
							// 							});

							uni.hideLoading();

							this.favorableUpgrade(res.data); //会员升级、赠送优惠券提示
							this.$store.state.mian.member = null; //清空会员信息
							//清空购物车商品
							this.$http.get('pc/posRestingOrder/initAutoPosRestingOrder', {
								"state": 10,
								"posTicketType": 10,
								"payTypeId": ""
							}).then((res) => {
								this.$store.commit('mian/intodata', res.data);
								this.$store.commit('mian/intodata', null);
								this.$store.commit('mian/goodlist', null);
							})
							if (res.data.moreInfo == null & res.data.extendData == null) {
								this.showDialog_1 = true; //显示支付成功弹框
							}

						} else {
							uni.showToast({
								title: "支付异常",
								icon: "none",
								duration: 2000
							});
						}

					}



				})



			},


			//支付宝支付
			ZHBpay(tradeNo) {
				uni.showLoading({
					title: '支付中...'
				});
				let _this = this;
				let ZHBstyte = this.$store.state.mian.zfbstime
				ZHBstyte = setInterval(function() {
					_this.$http.get("pc/pay/zfb/orderQuery2/" + _this.$store.state.mian.intodata.data.list[0].pos_ticket_code +
						"?tradeNo=" + tradeNo).then((res) => {

						//console.log('支付宝支付状态监听' + JSON.stringify(res.data));

						if (res.data == null) {
							clearInterval(ZHBstyte)
						} else {



							if (res.data.status == 0) {


								console.log('支付支付状态：' + JSON.stringify(res.data));
								if (res.data.data.tradeStatus == "TRADE_SUCCESS") {

									// 									uni.showToast({
									// 										title: "支付成功",
									// 										icon: "success",
									// 										duration: 2000
									// 									});

									uni.hideLoading();
									if (res.data.moreInfo == null & res.data.extendData == null) {
										_this.showDialog_1 = true; //显示支付成功弹框
									}
									// 									this.$store.commit('mian/upgrade',res.data.data.memberInfo);//会员升级信息
									// 									this.$store.commit('mian/couponing',res.data.data.extendData);//结算完毕赠送的优惠券
									_this.favorableUpgrade(res.data); //会员升级、赠送优惠券提示

									_this.$store.state.mian.member = null; //清空会员信息
									//清空购物车商品

									_this.$http.get('pc/posRestingOrder/initAutoPosRestingOrder', {
										"state": 10,
										"posTicketType": 10,
										"payTypeId": ""
									}).then((res) => {
										_this.$store.commit('mian/intodata', res.data);
										_this.$store.commit('mian/intodata', null);
										_this.$store.commit('mian/goodlist', null);





									})

									clearInterval(ZHBstyte)
								} else if (res.data.data.tradeStatus == "WAIT_BUYER_PAY") { //等待支付


								} else if (res.data.data.tradeStatus == "TRADE_CLOSED") { //交易关闭

									clearInterval(ZHBstyte)
									uni.showToast({
										title: "交易关闭",
										icon: "none",
										duration: 2000
									});

								} else if (res.data.data.tradeStatus == "TRADE_FINISHED") { //交易结束
									clearInterval(ZHBstyte)
									uni.showToast({
										title: "支付异常",
										icon: "none",
										duration: 2000
									});
								} else {
									clearInterval(ZHBstyte)
								}
							} else {
								clearInterval(ZHBstyte)
							}
						}

					})
				}, 1000)
			},
			//微信支付
			WEIXINpay(tradeNo) {
				uni.showLoading({
					title: '支付中...'
				});
				let _this = this;
				this.weixintime = setInterval(function() {
					_this.$http.get("pc/pay/wx/wxPay/orderQuery2" + _this.$store.state.mian.intodata.data.list[0].pos_ticket_code +
						"?tradeNo=" + tradeNo).then((res) => {
						console.log('微信支付轮询通道' + JSON.stringify(res.data))

						if (res.data == null) {
							clearInterval(_this.weixintime)
						} else {




							//	console.log('支付支付状态：' + JSON.stringify(res.data));
							if (res.data.data.tradeState == "SUCCESS") {

								// 								uni.showToast({
								// 									title: "支付成功",
								// 									icon: "success",
								// 									duration: 2000
								// 								});

								uni.hideLoading();
								if (res.data.moreInfo == null & res.data.extendData == null) {
									_this.showDialog_1 = true; //显示支付成功弹框
								}


								_this.favorableUpgrade(res.data); //会员升级、赠送优惠券提示

								_this.$store.state.mian.member = null; //清空会员信息
								//清空购物车商品

								_this.$http.get('pc/posRestingOrder/initAutoPosRestingOrder', {
									"state": 10,
									"posTicketType": 10,
									"payTypeId": ""
								}).then((res) => {
									_this.$store.commit('mian/intodata', res.data);
									_this.$store.commit('mian/intodata', null);
									_this.$store.commit('mian/goodlist', null);

									if (_this.$store.state.mian.upgrade != null && _this.$store.state.mian.upgrade != '') { //会员升级
                                             
									} else {
										if (_this.$store.state.mian.couponing != null && _this.$store.state.mian.couponing != '' && _this.$store
											.state
											.mian.couponing.length != 0) {

										} else {
											setTimeout(function() {
												uni.redirectTo({
													url: '../index/index'
												});
											}, 1000)
										}
									}


								})

								clearInterval(_this.weixintime)
							} else if (res.data.data.tradeState == "REFUND") { //转入退款
								clearInterval(_this.weixintime)
								uni.showToast({
									title: "转入退款",
									icon: "none",
									duration: 2000
								});


							} else if (res.data.data.tradeState == "NOTPAY") { //未支付

								clearInterval(_this.weixintime)
								uni.showToast({
									title: "未支付",
									icon: "none",
									duration: 2000
								});

							} else if (res.data.data.tradeState == "CLOSED") { //已关闭
								clearInterval(_this.weixintime)
								uni.showToast({
									title: "已关闭",
									icon: "none",
									duration: 2000
								});
							} else if (res.data.data.tradeState == "REVOKED") { //已撤销
								clearInterval(_this.weixintime)
								uni.showToast({
									title: "已撤销",
									icon: "none",
									duration: 2000
								});
							} else if (res.data.data.tradeState == "USERPAYING") { //需要支付密码

							} else if (res.data.data.tradeState == "PAYERROR") { //支付失败
								clearInterval(_this.weixintime)
								uni.showToast({
									title: "支付失败",
									icon: "none",
									duration: 2000
								});
							} else {
								clearInterval(_this.weixintime)
								uni.showToast({
									title: res.data.data.errCodeDes,
									icon: "none",
									duration: 2000
								});
							}
						}

					})
				}, 1000)

			},


			//获取支付方式
			Payments() {
				this.$http.get('pc/payType/getPayTypeList').then((res) => {
					console.log("获取支付方式：" + JSON.stringify(res.data))
					this.paytype = res.data.data;
					this.$store.commit('mian/paytype', res.data.data);

					this.settlementInitialization();
				})
			},

			//会员卡支付(会员未登录，扫描登录之后再调支付接口)
			membershipPaymentpa() {
				// 允许从相机和相册扫码
				let _this = this;
				uni.scanCode({
					success: function(res) {
						console.log('条码内容：' + res.result);
						let e = res.result;
						if (e.substring(0, 2) == "HY" && e.length == 16) { //会员条码
							_this.memberLogin(e);
						} else {
							uni.showToast({
								title: "会员不存在",
								icon: "none",
								duration: 2000
							});
						}

					},
					fail: function(err) {
						console.log("扫描二维码失败：" + err);
					}
				});
			},
			//会员扫码登录
			memberLogin(barCode) {
				let posTicketCode = "";
				if (this.$store.state.mian.intodata != null) {


					if (this.$store.state.mian.intodata.data.list.length == 0) {
						posTicketCode = "";
					} else {
						posTicketCode = this.$store.state.mian.intodata.data.list[0].pos_ticket_code
					}
				}
				this.$http.post('pc/pos/ticketSearch', {
					"search": barCode,
					"posTicketCode": posTicketCode,
					"level2TypeId": "",
					"pageSize": 10,
					"pageIndex": 1
				}).then((res) => {
					let id = this.paytype[0].id
					this.qiesettlementInitialization(id);
					if (res.data.status == 0) {

						// 						uni.showToast({
						// 							title: "会员登录成功",
						// 							icon: "success",
						// 							duration: 2000
						// 						});

						this.$store.commit('mian/member', res.data);
						this.initi();





					}

				})
			},
			//初始化商品列表
			initi() {
				this.$http.get('pc/posRestingOrder/initAutoPosRestingOrder', {
					"state": 10,
					"posTicketType": 10,
					"posTicketCode": ""
				}).then((res) => {
					this.$store.commit('mian/intodata', res.data);
					let list = {
						'payTypeCode': this.paytype[0].payTypeCode,
						'payTypeId': this.paytype[0].id
					}
					this.paysuan("", list); //支付方法

				})
			},
			//结算区域初始化
			settlementInitialization() {

				//console.log("测试d："+ JSON.stringify(this.$store.state.mian.intodata));

				let posTicketCode = "";
				if (this.$store.state.mian.intodata != null) {
					posTicketCode = this.$store.state.mian.intodata.data.list[0].pos_ticket_code
				}
				this.$http.post('pc/posPayment/initPosPaymentAction', {
					"payTypeId": this.paytype[0].id,
					"state": 10,
					"posTicketCode": posTicketCode,
					"posTicketType": 10,
					"restingOrderType": 10,
				}).then((res) => {
					this.$store.commit('mian/settlementInitialization', res.data.data);

				})
			},
			//切换支付方式重新计算结算信息
			qiesettlementInitialization(id) {
				let posTicketCode = "";
				if (this.$store.state.mian.intodata != null) {
					posTicketCode = this.$store.state.mian.intodata.data.list[0].pos_ticket_code
				}
				this.$http.post('pc/posPayment/initPosPaymentAction', {
					"payTypeId": id,
					"state": 10,
					"posTicketCode": posTicketCode,
					"posTicketType": 10,
					"restingOrderType": 10,
				}).then((res) => {
					this.$store.commit('mian/settlementInitialization', res.data.data);

				})
			},
			//优惠券、会员升级函数
			favorableUpgrade(val) {
				this.$store.commit('mian/upgrade', val.memberInfo); //会员升级信息
				this.$store.commit('mian/couponing', val.extendData); //结算完毕赠送的优惠券

				if (this.$store.state.mian.upgrade != null && this.$store.state.mian.upgrade != '') { //会员升级
					this.$store.commit('mian/upgradeshow', true); //显示会员升级弹框
				} else {
					if (this.$store.state.mian.couponing != null && this.$store.state.mian.couponing != '' && this.$store.state.mian.couponing
						.length != 0) {
						this.$store.commit('mian/couponingshow', true); //显示赠送的优惠券弹框
					}
				}



			},
			//点击支付状态确认触发事件
			clickConfirm(type) {
				this.showDialog_1 = false;
				uni.redirectTo({
					url: '../index/index'
				});
			}




		},
		mounted() {
			this.Payments();
		}

	}
</script>

<style scoped>
	.shomian {
		position: fixed;
		top: 0px;
		left: 0px;
		bottom: 0upx;
		width: 100%;
		height: 100%;
		background: #080808;
	}

	.bacimg {
		position: fixed;
		top: 0px;
		left: 0px;
		bottom: 0upx;
		width: 100%;
		height: 100%;
	}

	.tishi {
		width: 418.75upx;
		height: 132.291666upx;
		position: absolute;
		left: 166.666666upx;
		top: 407.291666upx;
		z-index: 2;
	}

	.goodimg {
		width: 250upx;
		height: 364.583333upx;
		position: absolute;
		left: 296.666666upx;
		top: 632.291666upx;
		z-index: 3;
	}

	.botmm {
		width: 100%;
		height: 159.583333upx;

		position: fixed;
		bottom: 0upx;
		left: 0upx;
		z-index: 6;
	}

	.img {
		position: fixed;
		bottom: 0upx;
		left: 0upx;
		width: 100%;
		height: 159.583333upx;
	}

	.styled {
		position: fixed;
		bottom: 50.416666upx;
		width: 62.5upx;
		height: 62.5upx;
	}

	.stytext {
		position: fixed;
		bottom: 10.416666upx;
		font-size: 25upx;
		color: #525c5c;
	}

	.fa1 {
		left: 42.5upx;
	}

	.fa2 {
		left: 244.791666upx;
	}

	.fa3 {
		left: 456.041666upx;
	}

	.fa4 {
		left: 646.041666upx;
	}


	.tex1 {
		left: 41.25upx;
	}

	.tex2 {
		left: 246.041666upx;
	}

	.tex3 {
		left: 462.708333upx;
	}

	.tex4 {
		left: 652.708333upx;
	}

	.fe1 {
		position: fixed;
		left: 170.708333upx;
		bottom: 5.208333upx;
		width: 2.083333upx;
		height: 120.208333upx;
	}

	.fe2 {
		position: fixed;
		left: 385upx;
		bottom: 5.208333upx;
		width: 2.083333upx;
		height: 120.208333upx;
	}

	.fe3 {
		position: fixed;
		left: 585upx;
		bottom: 5.208333upx;
		width: 2.083333upx;
		height: 120.208333upx;
	}

	#newhead1 .httle {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 178.666666upx;
		z-index: 1;
	}

	#newhead1 .log {
		position: absolute;
		left: 15.416666upx;
		top: 45.833333upx;
		z-index: 2;
		width: 216.666666upx;
		height: 83.333333upx;
	}

	#newhead1 .title {
		z-index: 3;
		position: absolute;
		left: 258.333333upx;
		top: 71.25upx;
		color: #FFFFFF;
		font-size: 29.166666upx;
		font-weight: bold;
	}

	.acctionf {
		/* margin-top: 104.166666upx; */
	}

	.btn {
		background-image: linear-gradient(-180deg, #fdab3e 0%, #fd803e 97%);
		border-radius: 4.166666upx;
		width: 375upx;
		margin: 36.458333upx auto;
		font-size: 29.166666upx;
		color: #ffffff;
		border: none;
	}

	.lvvtitle {
		width: 375upx;
		margin: 36.458333upx auto;
		font-size: 29.166666upx;
		color: #71593d;
		text-align: left;
	}
</style>
