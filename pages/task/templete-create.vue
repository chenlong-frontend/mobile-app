<template>
	<view class="content">
		<page-head title="元数据创建"></page-head>
		<view class="form">
			<u-form>
				<u-form-item label-width="150" label="模板名称">
					<u-input v-model="form.taskName" />
				</u-form-item>
				<u-form-item label-width="150" label="元数据">
					<u-input @click="metaShow = true" :disabled="true" :value="form.taskTemplateTypeMeta" />
				</u-form-item>
			</u-form>
		</view>
		<u-select v-model="metaShow" @confirm="onMetaSelect" :list="metaList"></u-select>
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
					taskName: '',
					taskTemplateTypeMeta: ''
				},
				metaList: [],
				metaShow: false,
			}
		},
		created() {
			this.$u.api.getAllMetaInfo().then(data => {
				this.metaList = data.map(v => ({value:v.taskTemplateType, label: v.taskTemplateType}))
			})
		},
		methods: {
			submit () {
				this.$u.api.createTaskTemplate(this.form).then(() => {
					this.toPage('/pages/task/templete-list')
				})
			},
			onMetaSelect(e) {
				this.form.taskTemplateTypeMeta = e[0].value
			},
			toPage(url) {
			  uni.navigateTo({
				url: url
			  });
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
