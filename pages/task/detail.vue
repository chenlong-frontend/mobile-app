<template>
	<view>
		<page-head title="任务详情"></page-head>
		
		<u-cell-group>
			<u-cell-item title="任务名称" :arrow="false" :value="workTemplateVo.jobName"></u-cell-item>
			<u-cell-item title="任务描述" :arrow="false" :value="workTemplateVo.jobDesc"></u-cell-item>
			<u-cell-item title="新建时间" :arrow="false" :value="workTemplateVo.createTime"></u-cell-item>
			<u-cell-item title="开始时间" :arrow="false" :value="workTemplateVo.startDate"></u-cell-item>
			<u-cell-item title="更新时间" :arrow="false" :value="workTemplateVo.updateTime"></u-cell-item>
		</u-cell-group>
		
		<view style="padding: 30rpx;">子任务(流程任务)</view>
		
		<view style="padding-bottom: 50rpx;" v-for="insInfo in taskDetailDatas" :key="insInfo.taskDetailCode">
			<u-cell-group>
				<u-cell-item title="任务流程" :arrow="false" :value="insInfo.taskFlow"></u-cell-item>
				<u-cell-item title="提交时间" :arrow="false" :value="insInfo.submitTime"></u-cell-item>
				<u-cell-item title="更新时间" :arrow="false" :value="insInfo.updateTime"></u-cell-item>
				<u-cell-item title="负责人" :arrow="false" :value="insInfo.taskManager"></u-cell-item>
				<u-cell-item title="所属主任务" :arrow="false" :value="insInfo.belongs"></u-cell-item>
			</u-cell-group>
			<u-row gutter="4">
				<u-col span="7">
					<u-button type="primary" @click="this.toPage('/pages/task/sub-detail?code=' + insInfo.taskDetailCode+ '&id=' + workTemplateVo.id)">查看详情/审核</u-button>
				</u-col>
				<u-col span="5">
					<u-button type="warning" @click="this.toPage('/pages/task/sub-task-edit?code=' + insInfo.taskDetailCode)">编辑</u-button>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: null,
				workTemplateVo: {},
				taskDetailDatas: []
			}
		},
		mounted() {
	
		},
		onLoad(param) {
			this.code = param.code
			this.getData()
		},
		methods: {
			getData () {
				this.$u.api.getWorkDetailByWorkId({workTemplateId: this.code}).then(({workTemplateVo, taskDetailDatas}) => {
					this.workTemplateVo = workTemplateVo
					this.taskDetailDatas = taskDetailDatas.sort((a, b) => {
					  return a.orderNum - b.orderNum;
					});
				})
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

</style>
