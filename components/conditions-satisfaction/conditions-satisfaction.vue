<template>
	<view class="condution">
		<view class="condution_view1"></view>
		<view class="view2_f">
			<view class="condution_view2">
				<view class="view2_mian">
					<view class="view2_mian_title">
						<text style="margin-left: 20.833333upx;">活动提示</text>
						<text style="float: right; font-size: 25upx; margin-right: 20.833333upx;" @click="close">关闭</text>
					</view>
					<view style="max-height: 860.833333upx; overflow: auto;" v-if="activeGoods!=null">
						<!-- 满足活动 -->
							<view v-if="activeGoods.activity_msg_yes_list.length!=0">
						<view v-for="(val,index) in activeGoods.activity_msg_yes_list" :key="index">
							<view class="view2_mian_meet">
								<view style="height: 60.416666upx; background:#eae8e2; margin-bottom: 21.875upx;">
									<view class="view2_mian_left">
										<image src="../../static/index/meet.png" mode=""></image>
										<text style="font-size:25upx;color:#f96c1d; margin: -35.208333upx 0upx 0px 10.416666upx;">已享受</text>
									</view>
									<view style="text-align: left;">
										<text style="font-size:25upx;color:#f96c1d; margin-left: 31.25upx; text-align: left; text-indent: 21.666666upx;">
											活动：{{val.activity_name}}
										</text>
									</view>
								</view>
								<view>
									<view class="view2_list" v-for="(vaule,inx) in val.goods_msg_list" :key="inx">
										<!-- 商品图片 -->
										<view style="width: 75upx; height: 75upx;  float: left; border-radius: 100%;">
											<image :src="vaule.homepage_picture" style="width: 75upx; height: 75upx;border-radius: 100%; "></image>
										</view>
										<view style="width: 316.666666upx; margin-left: 14.583333upx; float: left; ">
											{{vaule.goods_name}}
										</view>
										<view style="width: 73.333333upx; margin-left: 14.583333upx; float: left; ">{{vaule.goods_num}}{{vaule.goods_unit_name}}</view>
										<view style="width: 100.166666upx; color:#f96c1d; float: right; ">{{vaule.activity_price}}</view>

									</view>

								</view>
							</view>
						</view>
						</view>
						<!-- 未满足活动 -->
						<view v-if="activeGoods.activity_msg_no_list.length!=0">
						<view v-for="(val,index) in activeGoods.activity_msg_no_list" :key="index">
							<view class="view2_mian_meet">
								<view style="height: 60.416666upx; background:#eae8e2; margin-bottom: 21.875upx;">
									<view class="view2_mian_left">
										<image src="../../static/index/does_not_meet.png" mode=""></image>
										<text style="font-size:25upx;color:#968074; margin: -35.208333upx 0upx 0px 10.416666upx;">未满足</text>
									</view>
									<view style="text-align: left;">
										<text style="font-size:25upx;color:#968074;; margin-left: 31.25upx; text-align: left; text-indent: 21.666666upx;">
											活动：{{val.activity_name }}
										</text>
									</view>
								</view>
								<view>
									<view class="view2_list" v-for="(vaule,inx) in val.goods_msg_list"  :key="inx">
										<!-- 商品图片 -->
										<view style="width: 75upx; height: 75upx; background: #080808; float: left; border-radius: 100%;">
											<image :src="vaule.homepage_picture" style="width: 75upx; height: 75upx;border-radius: 100%; "></image>
										</view>
										<view style="width: 316.666666upx; margin-left: 14.583333upx; float: left; ">
											{{vaule.goods_name}}
										</view>
										<view style="width: 73.333333upx; margin-left: 14.583333upx; float: left; ">{{vaule.goods_num}}{{vaule.goods_unit_name}}</view>
										<view style="width: 100.166666upx; color:#f96c1d; float: right; ">{{vaule.activity_price}}</view>

									</view>

								</view>
							</view>

						</view>
						</view>
					</view>

					<view style="width: 604.166666upx; height: 81.25upx; margin: 0 auto;">
						<button class="btn" @click="settlementJump">继续支付</button>
					</view>
					<view style="width: 100%; height: 31.25upx;"></view>
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
			//满足活动商品集合
			activeGoods() {
				console.log('商品集合1：'+this.$store.state.mian.meetlist)
				return this.$store.state.mian.meetlist
			}
		},
		
		methods: {
			//关闭窗口
			close() {
				this.$store.commit('mian/meetRequirement', false);
			},
			//结算方法
			settlementJump() {
				if (this.$store.state.mian.intodata != null) {
                     this.$store.commit('mian/meetRequirement',false);
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


		}
		

	}
</script>

<style scoped>
	.condution {}

	.condution_view1 {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0upx;
		top: 0upx;
		bottom: 0upx;
		background: #080808;
		opacity: 0.5;
		z-index: 6;
	}

	.view2_f {
		display: table;
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0upx;
		top: 0upx;
		bottom: 0upx;
		z-index: 7;
	}

	.condution_view2 {
		display: table-cell;
		vertical-align: middle;
	}

	.view2_mian {
		margin-left: auto;
		margin-right: auto;
		width: 666.666666upx;
		min-height: 187.5upx;
		background: #f5f3ef;
		border-radius: 8.333333upx;
	}

	.view2_mian_title {
		background: #282828;
		border-radius: 8.333333upx 8.333333upx 0 0;
		width: 100%;
		height: 81.25upx;
		font-size: 29.166666upx;
		color: #ffffff;
		line-height: 81.25upx;
	}

	.view2_mian_meet {
		width: 604.166666upx;
		margin: 31.25upx auto 21.875upx;

		border-radius: 4px;
	}

	.view2_mian_left {
		float: left;
		width: 156.25upx;
		height: 100%;
		line-height: 60.416666upx;
		background: #e4d9cc;
		border-radius: 4.166666upx 0 0 4.166666upx;
	}

	.view2_mian_meet image {
		width: 29.166666upx;
		height: 29.166666upx;
	}

	.view2_list {
		width: 100%;
		height: 75upx;
		margin-bottom: 19.791666upx;
		font-size: 25upx;
		color: #333333;
		text-align: left;
		line-height: 75upx;

	}

	.btn {
		width: 100%;
		height: 100%;
		background-image: linear-gradient(-180deg, #fdab3e 0%, #fd803e 97%);
		border-radius: 4.166666upx;
		font-size: 29.166666upx;
		color: #ffffff;
		border: none;
	}
</style>
