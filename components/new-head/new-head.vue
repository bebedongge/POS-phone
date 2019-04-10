<template>

	<view id="newhead">
		<view>
			<image class="httle" src="../../static/index/brush_3.png" mode=""></image>
			<image @click="toshow" class="log" src="../../static/login/logo.png" mode=""></image>
			<text class="title">POS手机版</text>
              <!--  <button  class="sasao"  @click="sao" type="primary">扫一扫</button> -->
			<button v-if="pattype==null" class="sasao"  @click="sao" type="primary">扫一扫</button>
			<button v-else class="sasao"  @click="sao" style="right: 190.416666upx;" type="primary">扫一扫</button>
			
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

</template>

<script>
	import lvvPopup from '../lvv-popup/lvv-popup.vue';
	export default {
		components: {
			lvvPopup

		},
		data() {
			return {
				titles: "dddddddddddd",
				pattype:null,
				
			}
		},
		onLoad: function(option) {
			let that = this;
 
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					console.log('获取用户信息：'+JSON.stringify(loginRes) );
					that.pattype="WEIXIN"
					// 获取用户信息
// 					uni.getUserInfo({
// 						provider: 'weixin',
// 						success: function(infoRes) {
// 							console.log('获取微信信息：'+infoRes);
// 							that._data.nickNames = infoRes.userInfo.nickName;
// 							that._data.avatarUrl = infoRes.userInfo.avatarUrl;
// 						}
// 					});
				}
			});
 
		},

		computed: {
            //判断平台
			paytyped(){
				console.log('获取平台数据：'+this.pattype)
				
				
				return this.pattype;
			},

			//登录的门店信息(兼容h5版本)
			memberlist() {
				//this.title=this.$store.state.login.logindata;
				//console.log("会员信息1：" + JSON.stringify(this.$store.state.login.logindata))
				return this.$store.state.login.logindata;
			},
			//判断在什么客户端运行
			runningtype() {
				let type='';
				switch (uni.getSystemInfoSync().platform) {
					case 'android':
						console.log('运行Android上') ;
						type='android';
						break;
					case 'ios':
						console.log('运行iOS上')
						 type='iOS';
						 break;
					default:
						console.log('运行在开发者工具上');
						 type='CX';
						 break;
				}
				return type;


			},

		},


		methods: {
			// 显示modal弹出框
			toshow() {

				this.$refs.lvvpopref.show();
			},
			// 关闭modal弹出框
			toclose() {
				this.$refs.lvvpopref.close();
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


			sao() {


				//console.log("读取本地内容：" + JSON.stringify(uni.getStorageSync('uerbane')));


				let _this = this;
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						let e = res.result;

						if (e.substring(0, 2) == "HY" && e.length == 16) { //会员条码
							_this.memberLogin(res.result);
						} else if (e.substring(0, 2) == "HD") { //活动抢券

							_this.stealStamps(res.result);

						} else { //商品条码

							_this.ObtainCommodity(res.result);
						}





					},
					fail: function(err) {
						console.log("扫描二维码失败：" + err);
					}
				});
			},
			// 扫描之后获取商品数据函数
			ObtainCommodity(barCode) {


				let _this = this;
				console.log('扫描之前各参数：Authorization：' + _this.$store.state.login.logindata.accessToken + ",barCode:" + barCode)


				//	console.log("传参之前："+JSON.stringify(this.$store.state.mian.goodlist))
				let posTicketCode = "";
				// 				if (this.$store.state.mian.goodlist != null) {
				// 					posTicketCode = this.$store.state.mian.goodlist.data.posTicketCode
				// 					
				// 				}
				if (this.$store.state.mian.intodata != null) {
					if (this.$store.state.mian.intodata.data.list.length != 0) {
						posTicketCode = this.$store.state.mian.intodata.data.list[0].pos_ticket_code
					}
				}

				let memberCode = "";
				if (this.$store.state.mian.member != null) {
					memberCode = this.$store.state.mian.member.data.memberCode;
				}

				this.$http.post('pc/posRestingOrder/addGoodsToRestingOrderByBarCode', {
					"barCode": barCode,
					"posTicketCode": posTicketCode,
					"state": 10,
					"posTicketType": 10,
					"restingOrderType": 10,
					"memberCode": memberCode
				}).then((res) => {


					if (res.data.status == 0) {
						this.$store.commit('mian/goodlist', res.data);
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
					//this.settlementInitialization(res.data.data.list[0].pos_ticket_code);

				})
			},
			//结算区域初始化
			settlementInitialization(posTicketCode) {
				// 				let posTicketCode = "";
				// 				if (this.$store.state.mian.goodlist != null) {
				// 					posTicketCode = this.$store.state.mian.goodlist.data.posTicketCode
				// 				}
				this.$http.post('pc/posPayment/initPosPaymentAction', {
					"payTypeId": this.$store.state.mian.paytype[0].id,
					"state": 10,
					"posTicketCode": posTicketCode,
					"posTicketType": 10,
					"restingOrderType": 10,
				}).then((res) => {
					this.$store.commit('mian/settlementInitialization', res.data.data);

				})
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

					if (res.data.status == 0) {

						uni.showToast({
							title: "会员登录成功",
							icon: "success",
							duration: 2000
						});

						this.$store.commit('mian/member', res.data);
						this.initi();
						
					}

				})
			},
			//活动抢券
			stealStamps(barCode) {

				//console.log("会员信息1："+JSON.stringty(this.$store.state.mian.member));


				let posTicketCode = "";
				if (this.$store.state.mian.intodata != null) {

					if (this.$store.state.mian.intodata.data.list.length == 0) {
						posTicketCode = "";
					} else {
						posTicketCode = this.$store.state.mian.intodata.data.list[0].pos_ticket_code
					}
				}


				let memberCode = "";
				let memberSearch = "";
				let memberId = "";
				if (this.$store.state.mian.member != null) {
					memberCode = this.$store.state.mian.member.data.memberCode;
					memberSearch = this.$store.state.mian.member.data.memberSearch;
					memberId = this.$store.state.mian.member.data.memberId;
				}


				this.$http.post('pc/pos/ticketSearch', {
					"search": barCode,
					"posTicketCode": posTicketCode,
					"posTicketType": 10,
					"memberCode": memberCode,
					"level2TypeId": "",
					"pageSize": 10,
					"pageIndex": 1,
					"state": 10,
					"memberSearch": memberSearch,
					"memberId": memberId

				}).then((res) => {

					console.log('抢券接口数据：' + res.status + "|||||" + JSON.stringify(res));

					if (res.data.status == 0) {
						this.$store.commit('mian/robStamps', res.data.data);
						this.$store.state.mian.robshow = true; //显示抢券弹框

						console.log('抢券数据：' + JSON.stringify(this.$store.state.mian.robStamps));

					}
				})
			},




		},
		mounted() {

		}
	}
</script>

<style scoped>
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

	#newhead .httle {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 198.666666upx;
		z-index: 1;
	}

	#newhead .log {
		position: absolute;
		left: 15.416666upx;
		top: 55.833333upx;
		z-index: 2;
		width: 216.666666upx;
		height: 83.333333upx;
	}

	#newhead .title {
		z-index: 3;
		position: absolute;
		left: 258.333333upx;
		top: 81.25upx;
		color: #FFFFFF;
		font-size: 29.166666upx;
		font-weight: bold;
	}

	.acctionf {
		/* margin-top: 104.166666upx; */
	}

	.sasao {
		position: fixed;
		top: 60.833333upx;
		right: 10.416666upx;
		color: #333333;
		z-index: 4;
		width: 144.166666upx;
		height: 71.666666upx;
		font-size: 27.083333upx;
		background: #F5ECD9;
	}
</style>
