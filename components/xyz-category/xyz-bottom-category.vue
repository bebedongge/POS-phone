<!-- 机构数据 -->
<template>
	<view>
		<view :class="{'mask':showPopup}" @click="maskClick" :style="{bottom:footer_height+'px'}"></view>
		<view class="bottom-category-content" :class="{'bottom-category-view-show':showPopup}" :style="{bottom: footer_height + 'px'}">
			<scroll-view v-if="subCategoryLists!=''" class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''" v-for="(item,index) in subCategoryLists">
					{{item.department_name}}
				</view>
			</scroll-view>			
		</view>
		
	</view>
</template>

<script>
	import Vue from "vue";
	export default {
		data() {
			return {
				showPopup: false, //是否显示控件
				categoryActive: 0, //当前活跃的选项(左侧tabbar)
				height: 'auto',
				
				subCategoryList: [], //categoryList中对应的subList
				scrollTop: 0
			};
		},
		props: {
			bottom: {
				type: Number,
				default: 0
			}
		},
		computed: {
			footer_height() {
				return uni.upx2px(this.bottom);
			},
			//机构数据
			subCategoryLists(){
				let data=this.$store.getters['login/retada'].mechanismData.data;
				return data;
			}
			
		},
		methods: {
			//bottom-popup
			show() {
				this.showPopup = true;
				
			},
			maskClick() { //背景层点击事件
				this.cancel();
			},
			cancel() { //隐藏
				this.showPopup = false
			},
			//scroll-view
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.subCategoryList = categroy.subList;
				this.scrollTop = -this.scrollHeight * index;
				
				console.log(this.$store.getters['login/retada'].saveMechanism);
				let list={
					"department_id":categroy.department_id,
					"department_name":categroy.department_name
				}
				this.$store.commit('login/saveMechanism',list);
				this.cancel();
				
				
				
				
				
			},
			chooseIcon(index) { //右侧点击事件
				console.log(this.categoryActive + '----' + index);
				//提交到父级
				this.$emit('exampleEvent',[this.categoryActive,index]);
			}
		}
	};
</script>

<style>
	@import url("./xyz-bottom-category.css");
</style>
