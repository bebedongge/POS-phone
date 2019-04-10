<template>
	<view class="robstamap" v-show="retadashow">
		<view style="width: 100%;height: 311.458333upx">
			<image src="../../static/index/tan.png" style="width: 100%; height: 100%;"></image>
		</view>
		<view style="width: 100%; height: 312.5upx; background: #f64c5e; margin-top: -1.041666upx;">
			<view style="font-size:37.5upx;color:#fffaf5;font-family:PingFangSC-Medium;">恭喜您获得1张优惠券</view>
			<view style="width: 625upx; height: 187.5upx; background:#fffaf5;border-radius:4.166666upx; margin: 41.666666upx auto 0upx;">
				<view style="width: 100%; height: 0.041666upx;"></view>
				<view style="width: 583.333333upx; height: 125upx; background:#ffffff; margin: 31.25upx auto 0upx; position: relative;">
					<image v-if="retada!=null"  :src="retada.url" style="width: 100%; height: 100%;"></image>
					<view v-if="retada!=null" style="position: absolute;width: 263.541666upx; height: 36.458333upx;left: 168.541666upx; bottom: 20.833333upx;">
						<text style="font-family:PingFangSC-Regular;font-size:29.166666upx;color:#f96c1d;">{{retada.denomination}}</text>
						<text style="font-family:PingFangSC-Regular;font-size:18.75upx;color:#666666; margin-left: 10.416666upx;">{{retada.startTime}}--{{retada.endTime}}</text>
					</view>
				</view>
				
			</view>
			
		</view>
		
		<view style="width: 59.375upx; height: 59.375upx; margin: 31.25upx auto 0upx; ">
			<image @click="close" src="../../static/index/close.png" style="width: 100%; height: 100%;"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return{
				show:false
			}
		},
		computed:{
			retada(){
				return this.$store.state.mian.robStamps;
			},
			retadashow(){
			  return this.$store.state.mian.robshow;
			}
			
			
		},
		methods:{
			close(){
				 this.$store.state.mian.robshow=false;//显示抢券弹框
			}
		},
		mounted(){
			
		},
		
	}
	
	
	
</script>

<style scoped>
	@import url("./rob-stamps.css");
</style>
