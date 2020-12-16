<template>
	<view class="content">

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			this.login()
		},
		methods: {
			async login () {
				const userInfo = await this.$u.api.getUserByToken()
				if (!userInfo) {
				  return
				}
				this.$u.vuex('user', userInfo)
			 },
		}
	}
</script>

<style lang="scss" scoped>

</style>
