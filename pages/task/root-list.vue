<template>
	<view class="content">
		<u-tabs :list="tab" :is-scroll="false" :current="current" @change="change"></u-tabs>
		
		<view v-if="current === 0">
			<u-card v-for="data in list" @click="taskClick(data.id)" :title="data.jobName" :key="data.id" :sub-title-color='data.jobStatus === "active" ? "rgb(83, 168, 55)" : "rgb(180, 181, 180)"' :sub-title='data.jobStatus === "active" ? "进行中" : "完成"'>
				<view slot="body">
					<u-row gutter="16">
						<u-col span="6" style="color: rgb(180, 181, 180);">
							<view>
								<text>最新进展</text>
							</view>
						</u-col>
						<u-col span="6">
							<view style="color: rgb(180, 181, 180);">
								提交: {{data.startDate}}
							</view>
						</u-col>
						<u-col span="6">
							<view style="font-size: 30rpx;">
								最新进展
							</view>
						</u-col>
						<u-col span="6">
							<view style="color: rgb(180, 181, 180);">
								更新: {{data.updateTime}}
							</view>
						</u-col>
					</u-row>
				</view>
			</u-card>
		</view>
		
		<view  v-if="current === 1">
			<u-card v-for="data in activeList" :title="data.jobName" @click="taskClick(data.id)" :key="data.id" :sub-title-color='data.jobStatus === "active" ? "rgb(83, 168, 55)" : "rgb(180, 181, 180)"' :sub-title='data.jobStatus === "active" ? "进行中" : "完成"'>
				<view slot="body">
					<u-row gutter="16">
						<u-col span="6" style="color: rgb(180, 181, 180);">
							<view>
								最新进展
							</view>
						</u-col>
						<u-col span="6">
							<view style="color: rgb(180, 181, 180);">
								提交: {{data.startDate}}
							</view>
						</u-col>
						<u-col span="6">
							<view style="font-size: 30rpx;">
								最新进展
							</view>
						</u-col>
						<u-col span="6">
							<view style="color: rgb(180, 181, 180);">
								更新: {{data.updateTime}}
							</view>
						</u-col>
					</u-row>
				</view>
			</u-card>
		</view>
		
		<view v-if="current === 2">
			<u-card v-for="data in completeList" @click="taskClick(data.id)" :title="data.jobName" :key="data.id" :sub-title-color='data.jobStatus === "active" ? "rgb(83, 168, 55)" : "rgb(180, 181, 180)"' :sub-title='data.jobStatus === "active" ? "进行中" : "完成"'>
				<view slot="body">
					<u-row gutter="16">
						<u-col span="6" style="color: rgb(180, 181, 180);">
							<view>
								最新进展
							</view>
						</u-col>
						<u-col span="6">
							<view style="color: rgb(180, 181, 180);">
								提交: {{data.startDate}}
							</view>
						</u-col>
						<u-col span="6">
							<view style="font-size: 30rpx;">
								最新进展
							</view>
						</u-col>
						<u-col span="6">
							<view style="color: rgb(180, 181, 180);">
								更新: {{data.updateTime}}
							</view>
						</u-col>
					</u-row>
				</view>
			</u-card>
		</view>
		
		<uni-fab
			horizontal="right"
			:popMenu="false"
			:pattern="{buttonColor: '#007AFF'}"
			@fabClick="toPage('/pages/task/create')"
		></uni-fab>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				tab: [
					{name: '全部'}, {name: '进行中'}, {name: '已结束'}
				],
				list: [],
				current: 0
			}
		},
		computed: {
			activeList () {
				return this.list.filter(v => v.jobStatus === "active")
			},
			completeList () {
				return this.list.filter(v => v.jobStatus !== "active");
			}
		},
		created() {
			this.getData()
		},
		methods: {
			change(index) {
				this.current = index;
			},
			async getData () {
			   const list = await this.$u.api.getJobList()
			   this.list = list
			},
			toPage(url) {
			  uni.navigateTo({
				url: url
			  });
			},
			taskClick (id) {
				this.toPage('/pages/task/detail?code=' + id)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
