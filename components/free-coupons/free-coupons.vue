<template>
	<view class="robstamap">
		<view style="width: 100%;height: 311.458333upx">
			<image src="../../static/index/tan.png" style="width: 100%; height: 100%;"></image>
		</view>
		<view style="width: 100%; min-height: 312.5upx; max-height: 412.5upx; background: #f64c5e; margin-top: -1.041666upx;">
			<view v-if="freedata!= null && freedata != ''&& freedata.length!= 0" style="font-size:37.5upx;color:#fffaf5;font-family:PingFangSC-Medium; text-align: center;">恭喜您获得{{freedata.length}}张优惠券</view>
			<view v-if="freedata!= null && freedata != ''&& freedata.length!= 0" style="width: 625upx; min-height: 157.5upx; max-height: 300upx; overflow: auto; background:#fffaf5;border-radius:4.166666upx; margin: 41.666666upx auto 0upx;">
				<view v-for="(val, index) in freedata" :key="index">
					<view style="width: 100%; height: 0.041666upx;"></view>
					<view style="width: 583.333333upx; height: 125upx; background:#ffffff; margin: 15upx auto 5upx; position: relative; background: #080808;">
						<image  :src="val.url" style="width: 100%; height: 100%;"></image>
						<view  style="position: absolute;width: 263.541666upx; height: 36.458333upx;left: 168.541666upx; bottom: 20.833333upx;">
							<text style="font-family:PingFangSC-Regular;font-size:29.166666upx;color:#f96c1d;">{{val.denomination}}</text>
							<text style="font-family:PingFangSC-Regular;font-size:18.75upx;color:#666666; margin-left: 10.416666upx;">{{val.startTime}}--{{val.endTime}}</text>
						</view>
					</view>
				</view>
			</view>
			<view style="width: 100%; height: 10.416666upx;"></view>
		</view>

		<view style="width: 59.375upx; height: 59.375upx; margin: 31.25upx auto 0upx; ">
			<image @click="close" src="../../static/index/close.png" style="width: 100%; height: 100%;"></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		computed: {

			//赠送优惠券数据
			freedata() {
				return this.$store.state.mian.couponing;
			}



		},
		methods: {
			close() {
				this.$store.commit('mian/couponingshow', false); //关闭赠送的优惠券弹框
				uni.redirectTo({
					url: '../index/index'
				});
			}
		},
		mounted() {

		},

	}
</script>

<style scoped>
	.robstamap {
		width: 666.666666upx;
		height: 697.916666upx;
		position: fixed;
		top: 186.458333upx;
		left: 41.666666upx;
		z-index: 7;
	}
</style>
