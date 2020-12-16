<template>
	<view>
		<page-head title="子任务编辑"></page-head>
		
		<view class="form">
			<u-form>
				<u-form-item v-for="item of metas" :required="item.isRequired === '1'" :key="item.metaName" label-width="150" :label="item.metaName">
					<u-input v-if="item.metaType === 'date'" v-model="form[item.metaName]" @click="onTimeShow(item.metaName)" :disabled="true" placeholder="请选择启动时间" />
					<u-input v-else v-model="form[item.metaName]" />
				</u-form-item>
			</u-form>
		</view>
		
		<u-picker v-model="timeShow" @confirm="onTimeSelect" mode="time"></u-picker>
		
		<view class="bottom">
			<u-button @click="submit" type="success">提交</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: null,
				timeShow: false,
				form: {},
				metas: [],
				metaName: null
			}
		},
		onLoad(param) {
			this.code = param.code
			this.getData()
		},
		methods: {
			submit () {
				for (let key in this.form) {
					for (let it of this.metas) {
						if (it.metaName === key && it.isRequired === '1' && this.form[key] === null) {
							uni.showToast({
								icon: 'none',
								title: it.metaName + '必填',
								duration: 2000
							});
							return
						}
					}
				}
				this.$u.api.editTaskData({data: this.form,taskInsDataCode:this.code}).then(() => {
					uni.navigateBack();
				})
			},
			onTimeSelect (e) {
				if (typeof this.form[this.metaName] === 'undefined') return
				this.form[this.metaName] = `${e.year}-${e.month}-${e.day}`
			},
			getData () {
				this.$u.api.getMetaById(this.code).then(data => {
					if (!data) return
					const metas = data.taskTemplateTypeMetaVo.taskTemplateTypeMetaDetails
					for (let it of metas) {
						this.form[it.metaName] = null
						
					}
					this.metas = metas
				})
			},
			onTimeShow (metaName) {
				this.metaName = metaName
				this.timeShow = true
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
	.bottom {
		position: fixed;
		width: 100%;
		bottom: 0;
		padding: 20rpx;
		z-index: 9999;
	}
	.form {
		padding-bottom: 50rpx;
		margin: 20px 0;
		background: #FFFFFF;
		padding:0 20rpx 0 40rpx;
	}
</style>

