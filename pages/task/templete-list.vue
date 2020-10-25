<template>
	<view>
		<page-head title="元数据列表"></page-head>
		<u-cell-group>
			<u-cell-item v-for="(item, index) in listData" :icon-style="{color: '#00CC33'}" :key="item.taskCode" icon="setting-fill" :title="item.taskName"></u-cell-item>
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
			this.$u.api.taskTplList().then(data => {
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
