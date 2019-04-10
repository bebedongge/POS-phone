<template>
	<view>
		<view class="updiv"></view>
		<view class="upgradmianp">
			<view class="upgradmian">
				<image v-if="ipdataimg!=null&&ipdataimg!=''" :src="ipdataimg" style="width: 100%; height: 100%;" mode=""></image>
			</view>
			<view class="close">
				<image @click="close" style="width: 62.5upx; height: 62.5upx; margin: 0upx 219.895833upx;" src="../../static/index/close.png"
				 mode=""></image>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		computed: {
			//会员支付升级图片
			ipdataimg() {
				return this.$store.state.mian.upgrade;
			}
		},
		methods: {
			close() {
				this.$store.commit('mian/upgradeshow', false); //关闭会员升级弹框
				if (this.$store.state.mian.couponing != null && this.$store.state.mian.couponing != '' && this.$store.state.mian.couponing
					.length != 0) {
					this.$store.commit('mian/couponingshow', true); //显示赠送的优惠券弹框
				}else{
					uni.redirectTo({
						url: '../index/index'
					});
				}
			}
		}
	}
</script>

<style scoped>
	.updiv {
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

	.upgradmian {
		background: #ffffff;
		border-radius: 8.333333upx;
		width: 520.833333upx;
		height: 881.25upx;
		text-align: center;
		z-index: 8;
	}

	.close {
		position: absolute;
		top: 907.083333upx;
		left: 0upx;
		text-align: center;
	}

	.upgradmianp {

		border-radius: 8.333333upx;
		width: 520.833333upx;
		height: 1001.25upx;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -260.4upx;
		margin-top: -440.625upx;
		text-align: center;
		z-index: 7;
	}
</style>
