<template>
	<view>
		<view class="cashMian">
			<view class="title">
				<text style="margin-left: 52.083333upx;">结算</text>
				<text style="float: right;margin-right: 20.833333upx;" @click="close">取消</text>
			</view>
			<view class="cashboby">
				<view class="matop" style="font-size:29.166666upx;color:#333333" v-if="total!=null">
					待收金额：{{total.init_money}}
				</view>
				<view class="matop">
					<input type="number" v-model="amountChange" style="width: 100%; height: 81.25upx;border:1px solid #999999;border-radius:4.166666upx; " />
				</view>
				<view class="matop" style="font-size:29.166666upx;color:#333333">
					<text v-if="theAmount>0">找零</text><text v-else>未支付</text>：
					<text style="color: #f96c1d;" v-if="theAmount>0">¥{{theAmount}}</text>
					<text style="color: #f96c1d;" v-else="">¥{{-theAmount}}</text>
				</view>
				<view class="matop">
					<button @click="cashpay" style="color:#ffffff; font-size: 29.166666upx; border: none; width: 100%; height: 81.25upx;background-image:linear-gradient(-180deg, #fdab3e 0%, #fd803e 97%);border-radius:4.166666upx;">完成</button>
				</view>
			</view>

		</view>
		<view class="cashChe" @click="close">
		</view>


		<xyDialog title="状态" content="支付成功!欢迎下次光临~" :show="showDialog_1" :isShowCancel="false" @confirmButton="clickConfirm(1)"></xyDialog>
	</view>
</template>

<script>
	// import xyDialog from '@/components/xy-dialog/xy-dialog.vue';
	import xyDialog from '../xy-dialog/xy-dialog.vue';//支付完成之后弹框
	export default {
		components: {
			xyDialog
		},
		data() {
			return {
				shumoyr: '', //输入金额
				theAmount: 0,

				showDialog_1: false,//支付状态弹框提示
				

			}
		},
		computed: {
			//输入金额绑定
			amountChange: {
				get() {
					return this.shumoyr;
				},
				set(val) {
					this.theAmount = (Number(val) - Number(this.$store.state.mian.settlementInitialization.init_money)).toFixed(1);
					this.shumoyr = val;
				}

			},



			total() {
				//  console.log("结算初始化222："+JSON.stringify(this.$store.state.mian.settlementInitialization))
				return this.$store.state.mian.settlementInitialization

			},
		},
		methods: {
			//关闭窗口
			close() {
				console.log("关闭时获取支付方式："+JSON.stringify(this.$store.state.mian.paytype));
				this.qiesettlementInitialization(this.$store.state.mian.paytype[0].id);
				this.$store.commit('mian/cashshow', false);
			},
			//切换支付方式重新计算结算信息
			qiesettlementInitialization(id) {
				let posTicketCode = "";
				if (this.$store.state.mian.intodata != null) {
					posTicketCode = this.$store.state.mian.intodata.data.list[0].pos_ticket_code
				}
				
				
				
				this.$http.post('pc/posPayment/initPosPaymentAction', {
					"payTypeId":id ,
					"state": 10,
					"posTicketCode": posTicketCode,
					"posTicketType": 10,
					"restingOrderType": 10,
				}).then((res) => {
					this.$store.commit('mian/settlementInitialization', res.data.data);
			
				})
			},
			
			//现金支付
			cashpay() {

				//console.log("获取支付状态"+JSON.stringify(this.$store.state.mian.paytype));
                    let _this=this;
					
				let payTypeCode = this.$store.state.mian.paytype[3].payTypeCode;
				let payTypeId = this.$store.state.mian.paytype[3].id;
				this.$http.post('pc/posPayment/posPaymentAction', {
					"payTypeCode": payTypeCode,
					"payTypeId": payTypeId,
					"posTicketCode": this.$store.state.mian.intodata.data.list[0].pos_ticket_code,
					"state": 10,
					"payMoney": this.shumoyr,
					"posTicketType": 10,
					"restingOrderType": 10,
					"sysParamId": "",
					"authCode": "",
					"memberPwd": "", //会员密码
					"manualDiscount": 0, //口令优惠金额
					"manualDiscountPassword": "", //口令密码
					"isInputMember": "", //是否手动输入会员号
					"isNoMemberToPay": 3 //是否未登录会员可以支付
				}).then((res) => {
					console.log('现金结算完成之后1：' + JSON.stringify(res.data))
					if (res.data.status == 0 && (res.data.data > 0 || res.data.data == 0)) { //支付完成
						//支付成功，弹框提示
						
						if(res.data.moreInfo==null&&res.data.extendData==null){
							  this.showDialog_1 = true;//显示支付成功弹框
						}else if(res.data.moreInfo==null&&res.data.extendData.length==0){
							 this.showDialog_1 = true;//显示支付成功弹框
						} else{
							this.$store.commit('mian/cashshow', false);//关闭现金支付框
						}

                      console.log('现金结算完成之后2：' + (res.data.moreInfo==null&&res.data.extendData==null));
						//this.$store.commit('mian/cashshow', false);
						
						this.favorableUpgrade(res.data); //会员升级、赠送优惠券
						
						this.$store.state.mian.member = null; //清空会员信息
						this.$http.get('pc/posRestingOrder/initAutoPosRestingOrder', {
							"state": 10,
							"posTicketType": 10,
							"payTypeId": ""
						}).then((res) => {
							this.$store.commit('mian/intodata', res.data);
							this.$store.commit('mian/intodata', null);
							this.$store.commit('mian/goodlist', null);





						})
					} else if (res.data.status == 0 && res.data.data < 0) { //支付了一部分
						uni.showToast({
							title: "支付成功",
							icon: "success",
							duration: 2000
						});
						this.shumoyr = "";
						this.qiesettlementInitialization(payTypeId)

					} else {
						uni.showToast({
							title: "支付失败",
							icon: "none",
							duration: 2000
						});
					}
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
					
					if(res.data!=null){
						this.$store.commit('mian/settlementInitialization', res.data.data);
					}
					

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
						.length!= 0) {
						this.$store.commit('mian/couponingshow', true); //显示赠送的优惠券弹框
					}
				}
			},
			//点击支付状态确认触发事件
			clickConfirm(type) {
				this.showDialog_1 = false;
				this.$store.commit('mian/cashshow', false);
				uni.redirectTo({
					url: '../index/index'
				});
			}
		}
	}
</script>

<style scoped>
	.cashMian {
		background: #ffffff;
		border-radius: 8.333333upx;
		width: 604.166666upx;
		height: 572.916666upx;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -302.083333upx;
		margin-top: -281.25upx;
		text-align: center;
		z-index: 7;

	}

	.cashChe {
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

	.title {
		background: #282828;
		border-radius: 8.333333upx 8.333333upx 0 0;
		width: 100%;
		height: 70.833333upx;
		line-height: 70.833333upx;
		;
		font-size: 29.166666upx;
		color: #ffffff;
	}

	.cashboby {
		width: 500upx;
		height: 468.75upx;

		margin: 0 auto;
	}

	.matop {
		margin-top: 52.083333upx;
		text-align: left;
	}
</style>
