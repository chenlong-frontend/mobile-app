<template>
	<view>
		<page-head title="子任务详情"></page-head>
		
		<view style="padding-bottom: 50rpx;">
			<u-cell-group>
				<u-cell-item title="任务流程" :arrow="false" :value="insInfo.taskFlow"></u-cell-item>
				<u-cell-item title="开始时间" :arrow="false" :value="insInfo.submitTime"></u-cell-item>
				<u-cell-item title="结束时间" :arrow="false" :value="insInfo.updateTime"></u-cell-item>
				<u-cell-item title="负责人" :arrow="false" :value="insInfo.taskManager"></u-cell-item>
				<u-cell-item title="所属主任务" :arrow="false" :value="insInfo.belongs"></u-cell-item>
				<u-cell-item title="任务状态" :arrow="false" :value='insInfo.taskStatus === "active" ? "进行中" : "完成"'></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="bottom">
			<u-button @click="submit" type="success">{{isActive ? "通过" : "驳回"}}</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: null,
				id: null,
				insInfo: {}
			}
		},
		computed:{
			isActive () {
				return this.insInfo.taskStatus === "active"
			}
		},
		mounted() {
	
		},
		onLoad(param) {
			this.code = param.code
			this.id = param.id
			this.getData()
		},
		methods: {
			getData () {
				this.$u.api.getTaskInsInfoDetailById({taskDetailCode: this.code}).then(insInfo => {
					this.insInfo = insInfo
				})
			},
			toPage(url) {
			  uni.navigateTo({
				url: url
			  });
			},
			submit () {
				const {
				  insInfo,
				  id
				} = this;
				if (insInfo.taskStatus === "active") {
					this.$u.api.bossSubmitWork({workDetailCode: this.code}).then(() => {
						this.toPage('/pages/task/detail?code=' + id)
					})
				}
				if (insInfo.taskStatus === "finish") {
					this.$u.api.rejectWork({workDetailCode: this.code}).then(() => {
					 this.toPage('/pages/task/detail?code=' + id)
					})
				}
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
