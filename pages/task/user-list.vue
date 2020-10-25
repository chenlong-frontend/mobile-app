<template>
	<view class="content">
		<view>
				<u-card v-for="(data, index) in list" @click="taskClick(data.id)" :key="index" :title="data.jobName" :sub-title-color='data.jobStatus === "active" ? "rgb(83, 168, 55)" : "rgb(180, 181, 180)"' :sub-title='data.jobStatus === "active" ? "进行中" : "完成"'>
					<view slot="body">
						<u-row gutter="16">
							<u-col span="6">
								<view>
									任务流程：任务流程
								</view>
							</u-col>
							<u-col span="6">
								<view style="color: rgb(180, 181, 180);">
									{{data.updateTime}}
								</view>
							</u-col>
						</u-row>
					</view>
				</u-card>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				list:[]
			}
		},
		created() {
			this.getData()
		},
		methods: {
			async getData () {
			   const list = await this.$u.api.getMyJobList()
			   this.list = list
			},
			toPage(url) {
			  uni.navigateTo({
				url: url
			  });
			},
			taskClick (id) {
				this.toPage('/pages/task/deal-task?code=' + id)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
