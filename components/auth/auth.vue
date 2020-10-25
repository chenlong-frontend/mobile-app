<template>
	<!-- #ifdef  MP-WEIXIN -->
	<u-popup v-model="show" mode="bottom">
		<view class="auth">
			<u-button @getuserinfo="onGetuserinfo" open-type="getUserInfo" type="primary">授权用户信息</u-button>
		</view>
	</u-popup>
	<!-- #endif -->
</template>

<script>
	export default {
		data () {
			return {
				show: false
			}
		},
		created() {
			// #ifdef  MP-WEIXIN
			uni.getSetting({
				scope: 'scope.userInfo',
				success:(res) => {
					this.getUserInfo(res)
				}
			})		
			// #endif
		},
		methods:{
			getUserInfo(res) {
			  if (!res.authSetting["scope.userInfo"]) {
			    this.show = true;
			    return;
			  }
			  this.checkToken()
			    .then(() => {
			      this.$emit('onAuthed');
			    })
			    .catch(e => {
			      this.$emit('onAuthFail');
			    });
			},
			onGetuserinfo () {
				this.show = false
				uni.getSetting({
					scope: 'scope.userInfo',
					success:(res) => {
						this.getUserInfo(res)
					}
				})	
			},
			async checkToken () {
				uni.login({
				  provider: 'weixin',
				  success: ({code}) => {
				    uni.getUserInfo({
				      lang: "zh_CN",
				      withCredentials: true,
					  success: ({ encryptedData, iv, signature, userInfo }) => {
						  const user = {
						    encryptedData,
						    iv,
						    signature,
						    userInfo,
						    code
						  }
						  this.login(user)
					  }
				    });
				  }
				});
			 },
			 async login (user) {
				const {openid} = await this.$u.api.wxlogin(user)
				this.$u.vuex('token', openid)
				const userInfo = await this.$u.api.getUserByToken()
				if (!userInfo) {
				  this.toPage('/pages/user/improve-information')
				  return
				}
				this.$u.vuex('user', userInfo)
			 },
			 toPage(url) {
			   uni.navigateTo({
			 	url: url
			   });
			 },
		}
	}
</script>

<style lang="scss" scoped>
	.auth {
		padding: 50rpx 20%;
	}
</style>
