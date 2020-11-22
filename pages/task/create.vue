<template>
	<view class="content">
		<page-head title="任务创建"></page-head>
		<view class="form">
			<u-form>
				<u-form-item label-width="150" label="任务名称"><u-input v-model="form.jobName" /></u-form-item>
				<u-form-item label-width="150" label="任务描述"><u-input v-model="form.jobDesc" /></u-form-item>
			</u-form>
		</view>
		
		<view style="display: flex;font-size: 24rpx;padding: 10rpx 20rpx;">
			<view>
				<text style="font-size: 26rpx;">子任务</text>
				<text style="color: rgb(145, 145, 145);">(任务流程)</text>
			</view>
			<view style="padding-left: 30rpx;">
				<u-icon color="rgba(145, 145, 145, 1)" size="28" name="info-circle-fill"></u-icon>
				<text style="color: rgb(145, 145, 145);padding-left: 20rpx;">点击下方+按钮，可增加多个子任务</text>
			</view>
		</view>
		
		<view class="form" v-for="(formItem, index) in form.subTasks" :key="index">
			<u-form-item label-width="150" label="任务1">
				<u-input @click="onTask(index)" :disabled="true" placeholder="请选择子任务" :value="getTaskName(formItem.taskTemplateId)" />
			</u-form-item>
			<u-form-item label-width="150" label="负责人">
				<u-input @click="onUser(index)" :disabled="true" placeholder="请选择负责人" :value="getUserName(formItem.userId)" />
			</u-form-item>
			<u-form-item label-width="150" label="启动时间">
				<u-input @click="onStartTime(index)" :disabled="true" placeholder="请选择启动时间" :value="formItem.startDate" />
			</u-form-item>
			<u-form-item label-width="150" label="结束时间">
				<u-input @click="onEndTime(index)" :disabled="true" placeholder="请选择结束" :value="formItem.endDate" />
			</u-form-item>
		</view>
		
		<u-select v-model="taskShow" @confirm="onTaskSelect" :list="taskList"></u-select>
		<u-select v-model="userShow" @confirm="onUserSelect" :list="userList"></u-select>
		<u-picker v-model="startShow" @confirm="onStartSelect" mode="time"></u-picker>
		<u-picker v-model="endShow" @confirm="onEndSelect" mode="time"></u-picker>
		<view style="margin-top: 40rpx;">
			<u-row gutter="40">
				<u-col span="8">
					<u-button type="success" @click="addSubTask" plain shape="square">新增</u-button>
				</u-col>
				<u-col span="4">
					<u-button type="success" @click="removeSubTask" plain shape="square">撤销</u-button>
				</u-col>
			</u-row>
		</view>
		
		<view class="bottom">
			<u-button @click="submit" type="success">提交</u-button>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				form: {
				  jobName: undefined,
				  jobDesc: undefined,
				  subTasks: []
				},
				taskList: [],
				userList: [],
				taskShow: false,
				userShow: false,
				startShow: false,
				endShow: false,
				taskSelectIndex: 0
			}
		},
		created() {
			this.$u.api.taskTplListByType({taskType: 'node'}).then(data => {
				this.taskList = data.map(v => ({value:v.taskCode, label: v.taskName}))
			})
			this.$u.api.getUsers().then(data => {
				this.userList = data.map(v => ({value:v.userCode, label: `${v.userName}(${v.departMentName})`}))
			})
			
		},
		methods: {
			submit () {
				this.$u.api.createJob(this.form).then(() => {
					uni.switchTab({
						url: '/pages/task/index'
					});
				})
			},
			getTaskName (value) {
				const item = this.taskList.find(v => v.value === value)
				if (!item) return
				return item.label
			},
			getUserName (value) {
				const item = this.userList.find(v => v.value === value)
				if (!item) return
				return item.label
			},
			addSubTask () {
				this.form.subTasks.push({
				  taskTemplateId: undefined,
				  userId: undefined,
				  startDate: undefined,
				  endDate: undefined
				});
			},
			removeSubTask () {
				this.form.subTasks.length > 0 && this.form.subTasks.pop();
			},
			onTask (index) {
				this.taskShow = true
				this.taskSelectIndex = index
			},
			onUser (index) {
				this.userShow = true
				this.taskSelectIndex = index
			},
			onStartTime (index) {
				this.startShow = true
				this.taskSelectIndex = index
			},
			onEndTime (index) {
				this.endShow = true
				this.taskSelectIndex = index
			},
			onUserSelect (e) {
				this.form.subTasks[this.taskSelectIndex].userId = e[0].value
			},
			onTaskSelect (e) {
				this.form.subTasks[this.taskSelectIndex].taskTemplateId = e[0].value
			},
			onStartSelect (e) {
				this.form.subTasks[this.taskSelectIndex].startDate = `${e.year}-${e.month}-${e.day}`
			},
			onEndSelect (e) {
				this.form.subTasks[this.taskSelectIndex].endDate = `${e.year}-${e.month}-${e.day}`
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding-bottom: 150rpx;
	}
	.form {
		margin: 20px 0;
		background: #FFFFFF;
		padding:0 20rpx 0 40rpx;
	}
	.bottom {
		position: fixed;
		width: 100%;
		bottom: 0;
		padding: 20rpx;
		z-index: 9999;
		background-color: #FFFFFF;
	}
</style>
