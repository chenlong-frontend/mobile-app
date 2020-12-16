<template>
	<view class="container">
			<view class="img-title">
				<text>登录</text>
			</view>
			<view class="login-form">
				<u-form :model="form">
					<u-form-item :label-position="labelPosition" label-width="150" required label="手机号 :" prop="telPhoneNum">
						<u-input v-model="form.telPhoneNum" placeholder="请输入手机号" />
					</u-form-item>
					<u-form-item :label-position="labelPosition" label-width="150" required label="密码 :" prop="passWord">
						<u-input v-model="form.passWord" placeholder="请输入密码" type="password" /> 
					</u-form-item>
				</u-form>
			</view>
			<view class="submit">
				<u-button type="primary" @click="onSubmit">登录</u-button>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					telPhoneNum: '',
					passWord: '',
				},
				labelPosition: 'left'
			}
		},
		methods: {
			onSubmit () {
				this.$u.api.login({...this.form}).then(v => {
					this.$u.vuex('token', v.token)
					uni.switchTab({
						url: '/pages/home/index'
					});
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		height: 100vh;
		background: #FFFFFF;
		overflow: hidden;
		.img-title {
			text-align: center;
			font-size: 40rpx;
			padding-top: 200rpx;
			padding-bottom: 130rpx;
		}
		.login-form {
			padding:0 20rpx 0 40rpx;
		}
		.submit {
			margin-top: 80rpx;
			padding: 0 20rpx;
		}
		.register {
			text-align: center;
			padding: 20rpx 0;
			color: #007aff;
		}
	}
</style>
