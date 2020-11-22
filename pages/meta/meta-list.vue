<template>
	<view>
		<page-head title="元数据管理"></page-head>
		<u-collapse :head-style="{background: '#ffffff', paddingLeft: '24rpx'}">
				<u-collapse-item :title="item.taskTemplateType" v-for="item in listData" :key="item.taskTemplateType">
					<u-cell-group>
						<u-cell-item v-for="(subitem, index) in item.taskTemplateTypeMetaDetails" :icon-style="{color: '#00CC33'}" 
						:key="index" icon="setting-fill" :title="subitem.metaName"></u-cell-item>
					</u-cell-group>
				</u-collapse-item>
		</u-collapse>

		<uni-fab
			horizontal="right"
			:popMenu="false"
			:pattern="{buttonColor: '#007AFF'}"
			@fabClick="toPage('/pages/meta/create')"
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
			this.$u.api.getAllMetaInfo().then(data => {
				this.listData = data
			})
		},
		methods: {
			toPage(url) {
			  uni.navigateTo({
				url: url
			  });
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
