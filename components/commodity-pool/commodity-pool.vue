<template>
	<view>
		<view class="comm">
			<!-- <image class="bacs" src="../../static/index/background_2.png" mode=""></image> -->
			<image class="bacs" src="../../static/index/background_2.png" mode=""></image>
			

			<image class="baico" src="../../static/index/bei.png" mode=""></image>
			<!-- 商品集合 -->
			<view class="baico goodlist">
				<view class="mianlist">
					<!-- 会员信息 -->
					<view v-if="memberInfo!=null">
						<!-- <image class="coumiy" src="../../static/index/head_portrait_tow.png" mode=""></image> -->
						<image class="coumiy" :src="memberInfo.data.memberPictures" mode=""></image>
						<view class="huidata">
							<view>
								<text style="font-size: 29.166666upx; margin-right: 10.416666upx; color:#71593d;">{{memberInfo.data.memberName}}</text>
								<text style="padding: 5.208333upx 15.333333upx;  background:#71593d;border-radius: 14.166666upx; font-size: 20.833333upx; color: #F8F8F8;">{{memberInfo.data.levelNickname}}</text>
							</view>
							<view style="width: 361.458333upx; height: 41.666666upx; margin: 5.208333upx auto;">
								<text style="float: left;" class="dename">{{memberInfo.data.levelNickname}}</text>
								<view class="backad" style="float: left;">
									<view class="sheji" :style="{width:upgrade}"></view>

								</view>
								<text style="float: left;" class="dename">{{memberInfo.data.levelNextNickname}}</text>
							</view>
							<view class="tineif">
								本次消费可享受{{memberInfo.data.memberDiscount}}折，距升级还需有效消费{{memberInfo.data.levelIndex}}次或{{memberInfo.data.upTypeValue}}元
								<!-- {{memberInfo.data.levelChangeDuration}}天/{{memberInfo.data.levelStayConsume}}元，可升级到{{memberInfo.data.levelNextNickname}}；当前{{memberInfo.data.memberDiscount}}折，离升级还差{{memberInfo.data.upTypeValue}}元 -->
							</view>
							<!-- <view v-else>
								{{memberInfo.data.levelChangeDuration}}月/{{memberInfo.data.levelStayConsume}}元，可升级到{{memberInfo.data.levelNextNickname}}；当前{{memberInfo.data.memberDiscount}}折，离升级还差{{memberInfo.data.upTypeValue}}次
							</view> -->
						</view>
					</view>
					<view v-else style="width: 100%; height: 93.75upx;"></view>
					<!-- 商品集合 -->
					<view class="gooddata">
						<view v-if="retada!=null">
							<view style="width: 95%;height: 83.333333upx;  margin: 0 auto 26.041666upx;text-align: left;" v-for="(val, index) in retada.data.list"
							 :key="index">
								<image style="width:83.333333upx;height: 83.333333upx; border-radius: 100%; float: left;" :src="val.homepage_picture"
								 mode=""></image>
								<text style="width: 257.291666upx; height: 100%;font-size:25upx;color:#333333; float: left;margin-left: 10.416666upx">{{val.goods_name}}</text>
								<text style="width: 104.166666upx; height: 100%;font-size:25upx;color:#333333; line-height: 83.333333upx; float: left;margin-left: 10.416666upx">{{val.goods_price}}/{{val.goods_unit_name}}</text>
								<text style="width: 62.5upx; height: 100%;font-size:25upx;color:#333333; line-height: 83.333333upx; float: left;margin-left: 10.416666upx">{{(val.goods_price*val.goods_num)}}</text>
								<image @click="deleteGood(val)" style="width: 38.125upx; height: 38.125upx; float: right;margin-top: 30.833333upx;"
								 src="../../static/index/delete.1.png" mode=""></image>
							</view>
						</view>
					</view>
					<view v-if="retada!=null" style="line-height: 52.083333upx;">
						<text style="float: right;font-size:29.166666upx;color:#be0000; margin-left: 60.416666upx; margin-right: 40.833333upx;">合计：<text
							 style="font-size: 50upx;">¥{{retada.data.all_moeny}}</text></text>
						<text style="float: right;font-size:29.166666upx;color:#333333; margin-top: 10.833333upx;">已优惠：¥{{retada.data.discount_money}}</text>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			//商品数据集合
			retada() {
				//	console.log('商品数据集合:' + JSON.stringify(this.$store.state.mian.intodata));
				return this.$store.state.mian.intodata;
			},
			//合计优惠信息
			total() {
				// console.log("结算初始化222："+JSON.stringify(this.$store.state.mian.settlementInitialization))
				return this.$store.state.mian.settlementInitialization


			},


			//会员信息
			memberInfo() {
				// console.log("会员信息："+JSON.stringify(this.$store.state.mian.member));
				return this.$store.state.mian.member;
			},
			//会员升级到下一个等级
			upgrade() {
				let bai=0;
				if(this.$store.state.mian.member!=null){
// 					let da = Number(this.$store.state.mian.member.data.levelStayConsume) - Number(this.$store.state.mian.member.data.upTypeValue)
// 					 bai = (da / Number(this.$store.state.mian.member.data.levelStayConsume)) * 100;
					 let da = Number(this.$store.state.mian.member.data.levelStayConsume) + Number(this.$store.state.mian.member.data.upTypeValue)
					  bai = (Number(this.$store.state.mian.member.data.levelStayConsume)/ da) * 100;
				}
				
				return bai + '%';
			}
		},
		methods: {
			//删除商品
			deleteGood(val) {
				this.$http.post('pc/posRestingOrder/updateGoodsNum', {
					"goodsNum": 1,
					"restingOrderId": val.id,
					"operateType": "SC"
				}).then((res) => {
					uni.showToast({
						title: "删除成功",
						icon: "success",
						duration: 1000
					});
					this.initi();
				})

			},
			//初始化商品列表
			initi() {
				this.$http.get('pc/posRestingOrder/initAutoPosRestingOrder', {
					"state": 10,
					"posTicketType": 10,
					"payTypeId": ""
				}).then((res) => {
					this.$store.commit('mian/intodata', res.data);
					console.log('长度：' + res.data.data.list.length)
					if (res.data.data.list.length == 0) {
						this.$store.state.mian.intodata = null;
						this.$store.state.mian.member = null; //清空会员信息				
					}
					//this.settlementInitialization();
					//	console.log('初始化商品之后取出商品信息：' + JSON.stringify(this.$store.state.mian.intodata));
				})
			},
			//结算区域初始化
			settlementInitialization() {
				let posTicketCode = "";
				if (this.$store.state.mian.goodlist != null) {
					posTicketCode = this.$store.state.mian.goodlist.data.posTicketCode
				}
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



		},
		mounted() {

		}
	}
</script>

<style scoped="">
	.comm {
		margin-top: 168.666666upx;
		position: relative;
	}

	.bacs {
		position: fixed;
		top: 0px;
		left: 0px;
		bottom: 0upx;
		width: 100%;
		height: 100%;
	}

	.baico {
		position: fixed;
		width: 95%;
		height: 79%;
		top: 168.666666upx;
		left: 2.5%;
		bottom: 199.583333upx;

	}

	.goodlist {

		z-index: 6;
	}

	.mianlist {
		width: 100%;
		height: 100%;

	}

	.gooddata {
		width: 90%;
		height: 65%;


		margin: 41.666666upx auto 2.083333upx;
		overflow: auto;

	}

	.coumiy {
		width: 104.583333upx;
		height: 104.583333upx;
		position: fixed;
		left: 318.75upx;
		top: 126.25upx;
		z-index: 10;
		border-radius: 100%;
	}

	.huidata {
		width: 100%;
		height: 135upx;
		margin-top: 68.25upx;
	}

	.backad {
		background: #b6a185;
		box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.50);
		border-radius: 104.166666upx;
		width: 229.166666upx;
		height: 12.5upx;
		margin: 10.833333upx 5.208333upx 0upx 5.208333upx;

	}

	.dename {
		font-size: 25upx;
		color: #71593d;
	}

	.sheji {
		background-image: radial-gradient(50% 122%, #d88702 53%, #864001 100%);
		box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.50);
		border-radius: 104.166666upx;

		height: 100%;
	}

	.tineif {
		font-family: STSongti-SC-Black;
		font-size: 20.833333upx;
		color: #71593d;
		letter-spacing: 0;
		text-align: center;

	}
</style>
