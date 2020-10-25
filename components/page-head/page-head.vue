<template name="page-head">
	<view>
		<u-navbar :is-back="isBack" :custom-back="customBack" :border-bottom="false" :title="title" :background="background"></u-navbar>
	</view>
	
</template>
<script>
export default {
	name: 'page-head',
	props: {
		title: {
			type: String,
			default: ''
		},
		customBack: {
			type:Function,
			default:null
		},
		isBack: {
			type:Boolean,
			default: true
		}
	},
	data(){
	return {
			background: {
				backgroundColor: '#fff'
			},
	}
	}
};
</script>
