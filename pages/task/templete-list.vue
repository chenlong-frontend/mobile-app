<template>
	<view>
		<page-head title="任务流程模板管理"></page-head>
		<u-cell-group>
			<u-cell-item v-for="(item, index) in listData" :icon-style="{color: '#00CC33'}" :key="item.taskCode" icon="setting-fill" :title="item.taskName"></u-cell-item>
		</u-cell-group>
		
		<uni-fab
			horizontal="right"
			:popMenu="false"
			:pattern="{buttonColor: '#007AFF'}"
			@fabClick="toPage('/pages/task/templete-create')"
		></uni-fab>
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
