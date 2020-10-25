<template>
	<view>
		<page-head title="用户列表"></page-head>
		<u-cell-group>
			<u-cell-item v-for="item in listData" :icon-style="{color: '#00CC33'}" :key="item.userCode" icon="man-add-fill" :title="`${item.userName}(${item.departMentName})`"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: []
			}
		},
		created() {
			this.$u.api.getUsers().then(data => {
				this.listData = data
			})
		},
		methods: {
			toPage(url) {
			  uni.navigateTo({
				url: url
			  });
			},
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
