<template>
	<view>
		<view class="top">
			<u-icon color="rgba(145, 145, 145, 1)" size="30" name="info-circle-fill"></u-icon>
			<text class="top-text">请登记您的基本信息，信息请保持与您工作中使用的一致</text>
		</view>
		
		<view class="form">
			<u-form :model="form" :rules="rules" ref="form">
				<u-form-item label="真实姓名" label-width="150" required prop="userName">
					<u-input v-model="form.userName" />
				</u-form-item>
				<u-form-item label="联系电话" label-width="150" required prop="telPhoneNum">
					<u-input v-model="form.telPhoneNum" />
				</u-form-item>
				<u-form-item label="工种" label-width="150" required prop="departMentName">
					<u-input v-model="form.departMentName" />
				</u-form-item>
			</u-form>
		</view>
		
		<view class="bottom">
			<u-button @click="submit" type="success">提交信息</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					userName: '',
					telPhoneNum: '',
					departMentName: ''
				},
				rules: {
					userName: [
						{ 
							required: true, 
							message: '请输入真实姓名', 
							trigger: ['change','blur'],
						},
					],
					telPhoneNum: [
						{ 
							required: true, 
							message: '请输入联系电话', 
							trigger: ['change','blur'],
						},
					],
					departMentName: [
						{ 
							required: true, 
							message: '请输入工种', 
							trigger: ['change','blur'],
						},
					],
				}
			}
		},
		onLoad() {
	
		},
		onReady() {
			this.$refs.form.setRules(this.rules);
		}, 
		methods: {
			submit (){
				this.$refs.form.validate(valid => {
					if (valid) {
						this.$u.api.register(this.form).then(() => {
							uni.switchTab({
								url: '/pages/home/index'
							});
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		padding: 50rpx 30rpx;
		text-align: center;
	}
	.top-text {
		font-size: 24rpx;
		margin-left: 10rpx;
		color: rgba(145, 145, 145, 1);
	}
	.form {
		border: 1px solid rgba(221,221,221,1);
		border-left: none;
		border-right: none;
		background: #FFFFFF;
		padding:0 20rpx 0 40rpx;
	}
	.bottom {
		position: absolute;
		width: 100%;
		bottom: 0;
		padding: 20rpx;
	}
</style>
