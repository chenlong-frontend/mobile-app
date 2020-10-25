<template>
	<view class="content">
		<page-head :is-back="false" title="任务列表"></page-head>
		<view>
			<root-list v-if="user.role === 'root'"></root-list>
			<user-list v-else></user-list>
		</view>
	</view>
</template>

<script>
	import RootList from './root-list.vue'
	import UserList from './user-list.vue'
	export default {
		components:{
			RootList, UserList
		},
		data() {
			return {
				
			}
		},
		mounted() {
			console.log(this.user)
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>
