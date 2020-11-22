<template>
	<view class="content">
		<page-head title="元数据创建"></page-head>
		<view class="form">
			<u-form>
				<u-form-item label-width="150" label="模板类型"><u-input v-model="form.taskTemplateType" /></u-form-item>
			</u-form>
		</view>
		
		<view class="form" v-for="(formItem, index) in form.taskTemplateTypeMetaDetails" :key="index">
			<u-form-item label-width="150" label="是否必填">
				<u-radio-group v-model="formItem.isRequired">
					<u-radio name="1">必须</u-radio>
					<u-radio name="0">非必须</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label-width="150" label="数据key">
				<u-input placeholder="请输入数据key" v-model="formItem.metaName" />
			</u-form-item>
			<u-form-item label-width="150" label="数据类型">
				<u-radio-group v-model="formItem.metaType">
					<u-radio name="file">文件</u-radio>
					<u-radio name="img">图片</u-radio>
					<u-radio name="number">数字 </u-radio>
					<u-radio name="date">时间</u-radio>
					<u-radio name="string">字符串</u-radio>
				</u-radio-group>
			</u-form-item>
		</view>
		
		<view style="display: flex;font-size: 24rpx;padding: 10rpx 20rpx;">
			<view>
				<text style="font-size: 26rpx;">模板详情</text>
			</view>
			<view style="padding-left: 30rpx;">
				<u-icon color="rgba(145, 145, 145, 1)" size="28" name="info-circle-fill"></u-icon>
				<text style="color: rgb(145, 145, 145);padding-left: 20rpx;">点击下方+按钮，可增加多个</text>
			</view>
		</view>
		
		<view style="margin-top: 40rpx;">
			<u-row gutter="40">
				<u-col span="8">
					<u-button type="success" @click="addData" plain shape="square">新增</u-button>
				</u-col>
				<u-col span="4">
					<u-button type="success" @click="removeData" plain shape="square">撤销</u-button>
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
					taskTemplateType: '',
					taskTemplateTypeMetaDetails: []
				}
			}
		},
		created() {

		},
		methods: {
			submit () {
				this.$u.api.createTaskTemplateTypeMeta(this.form).then(() => {
					this.toPage('/pages/meta/meta-list')
				})
			},
			toPage(url) {
			  uni.navigateTo({
				url: url
			  });
			},
			addData () {
				this.form.taskTemplateTypeMetaDetails.push({
				  isRequired: undefined,
				  metaName: undefined,
				  metaType: undefined,
				});
			},
			removeData() {
				this.form.taskTemplateTypeMetaDetails.length > 0 && this.form.taskTemplateTypeMetaDetails.pop();
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