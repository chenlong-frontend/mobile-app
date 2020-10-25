<template>
	<view>
		<page-head title="任务处理"></page-head>
		
		<view style="padding-bottom: 50rpx;">
			<u-cell-group>
				<u-cell-item title="任务流程" :arrow="false" :value="insInfo.taskFlow"></u-cell-item>
				<u-cell-item title="提交时间" :arrow="false" :value="insInfo.submitTime"></u-cell-item>
				<u-cell-item title="更新时间" :arrow="false" :value="insInfo.updateTime"></u-cell-item>
				<u-cell-item title="负责人" :arrow="false" :value="insInfo.taskManager"></u-cell-item>
				<u-cell-item title="所属主任务" :arrow="false" :value="insInfo.belongs"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="bottom">
			<u-button @click="submit" type="success">完成任务</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				insInfo: {},
				code: null
			}
		},
		mounted() {
	
		},
		onLoad(param) {
			this.code = param.code
			this.getData()
		},
		methods: {
			toPage(url) {
			  uni.navigateTo({
				url: url
			  });
			},
			getData () {
				this.$u.api.getTaskInsInfo({workTemplateId: this.code}).then(insInfo => {
					this.insInfo = insInfo
				})
			},
			submit() {
				this.$u.api.finshTaskIns({workTemplateId: this.code}).then(() => {
					uni.switchTab({
						url: '/pages/task/index'
					});
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottom {
		position: fixed;
		width: 100%;
		bottom: 0;
		padding: 20rpx;
		z-index: 9999;
	}
</style>
