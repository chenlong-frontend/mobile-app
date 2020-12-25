<template>
	<view>
		<page-head title="子任务编辑"></page-head>
		
		<view class="form">
			<u-form>
				<u-form-item v-for="item of metas" :required="item.isRequired === '1'" :key="item.metaName" label-width="150" :label="item.metaName">
					<u-input v-if="item.metaType === 'date'" v-model="form[item.metaName]" @click="onTimeShow(item.metaName)" :disabled="true" placeholder="请选择启动时间" />
					<u-upload v-if="item.metaType === 'img'" :file-list="img[item.metaName]" :index="item.metaName" @on-success="imgupload" :auto-upload="true" :max-size="2 * 1024 * 1024" :header="header" max-count="1" :action="action" ></u-upload>
					<u-input v-if="item.metaType !== 'img' && item.metaType !== 'date'" v-model="form[item.metaName]" />
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
				id: null,
				timeShow: false,
				form: {},
				metas: [],
				metaName: null,
				img: {}
			}
		},
		computed:{
			action() {
				return this.$u.baseUrl + '/img/saveImage'
			},
			header() {
				return {
					token: this.$store.state.token
				}
			}
		},
		onLoad(param) {
			this.id = param.id
			this.getData()
		},
		methods: {
			imgupload (data, index, lists, name) {
				this.form[name] = data.data
			},
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
				this.$u.api.editTaskData({data: this.form,taskInsDataCode:this.id}).then(() => {
					uni.navigateBack();
				})
			},
			onTimeSelect (e) {
				this.form[this.metaName] = `${e.year}-${e.month}-${e.day}`
			},
			getData () {
				this.$u.api.getMetaById(this.id).then(data => {
					if (!data) return
					const metas = data.taskTemplateTypeMetaDetails
					const value = data.data ? JSON.parse(data.data) : {}
					for (let it of metas) {
						this.form[it.metaName] = value[it.metaName]
						if (it.metaType === 'img') {
							this.img[it.metaName] = [{url: this.$u.assetsUrl + value[it.metaName]}]
						}
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

