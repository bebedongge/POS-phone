import Vue from 'vue'
import App from './App'
import store from './store'
Vue.prototype.$store = store
Vue.config.productionTip = false;




//import http from '@/common/js/http/';
import http from '@/common/js/http/'
Vue.prototype.$http = http;
//设置baseUrl
//http.config.baseUrl = "http://192.168.0.244:8085/";//本地地址
http.config.baseUrl = "http://47.96.112.195:8085/";//线上地址
//设置请求前拦截器
http.interceptor.request = (config) => {
	
	uni.showLoading({
		'title':'',
		'mask':true,
	})
	
	
	//添加通用参数
	config.header = {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', //自定义请求头信息
		'Authorization': 'Bearer ' + store.state.login.logindata.accessToken
	}
}
//设置请求结束后拦截器
http.interceptor.response = (response) => {

   uni.hideLoading()
	//console.log("请求结束后：" + JSON.stringify(response));
	if (response.statusCode == 200) {
		if (response.data.status == 0) {
			return response;
		} else {
			console.log("拦截器信息：" + JSON.stringify(response.data.message));


			uni.showToast({
				title: response.data.message,
				icon: "none",
				duration: 2000
			});
			
          return {"data":null}
		}

	} else if (response.statusCode == 400) {
		uni.showToast({
			title: "请求错误(400)",
			icon: "none",
			duration: 2000
		});

	} else if (response.statusCode == 401) {
		uni.showToast({
			title: "未授权，请重新登录(401)",
			icon: "none",
			duration: 2000
		});
		uni.navigateTo({
			url: '../login/login'
		});

	} else if (response.statusCode == 403) {
		uni.showToast({
			title: "拒绝访问(403)",
			icon: "none",
			duration: 2000
		});

	} else if (response.statusCode == 404) {
		uni.showToast({
			title: "请求出错(404)",
			icon: "none",
			duration: 2000
		});

	} else if (response.statusCode == 408) {
		uni.showToast({
			title: "请求超时(408)",
			icon: "none",
			duration: 2000
		});

	} else if (response.statusCode == 500) {
		uni.showToast({
			title: "服务器错误(500)",
			icon: "none",
			duration: 2000
		});

	} else if (response.statusCode == 501) {
		uni.showToast({
			title: "服务未实现(501)",
			icon: "none",
			duration: 2000
		});

	} else if (response.statusCode == 502) {
		uni.showToast({
			title: "网络错误(502)",
			icon: "none",
			duration: 2000
		});

	} else if (response.statusCode == 504) {
		uni.showToast({
			title: "网络超时(504)",
			icon: "none",
			duration: 2000
		});

	} else if (response.statusCode == 505) {
		uni.showToast({
			title: "HTTP版本不受支持(505)",
			icon: "none",
			duration: 2000
		});

	} else {
		uni.showToast({
			title: "连接出错",
			icon: "none",
			duration: 2000
		});

	}


}





App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
