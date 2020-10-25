<template>
     <view class="container">
		<page-head :is-back="false" title="个人中心"></page-head>
        <view class="top">
          <view class="tool">
		    <u-icon name="edit-pen" color="#fff" size="48"></u-icon>
          </view>
	    
          <u-row>
            <u-col span="3" text-align="right">
              <view class="avatar-container">
		 		<u-avatar src=""></u-avatar>
              </view>
            </u-col>
            <u-col span="9">
              <view>
                <text class="info">姓名：{{user.userName}}</text>
              </view>
              <view>
                <text class="info">工种：{{user.departMentName}}</text>
              </view>
              <view>
                <text class="info">电话：{{user.telPhoneNum}}</text>
              </view>
            </u-col>
          </u-row>
        </view>
	   <view class="list">
		   <u-cell-item
		     icon="account-fill"
		     @click="toPage('/pages/user/user-list')"
		     :icon-style="{color:'#009933'}"
		     title="人员管理"
		   ></u-cell-item>
		   <u-cell-item
		     icon="grid-fill"
		     @click="toPage('/pages/task/meta-list')"
		     :icon-style="{color:'#00CC99'}"
		     title="元数据管理"
		   ></u-cell-item>
		   <u-cell-item
		     icon="order"
		     @click="toPage('/pages/task/templete-list')"
		     :icon-style="{color:'#009900'}"
		     title="任务流程模板管理"
		   ></u-cell-item>
	   </view>
     </view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			toPage(url) {
			  uni.navigateTo({
				url: url
			  });
			},
		}
	}
</script>

<style lang="scss" scoped>
.top {
  height: 340rpx;
  background-color: rgb(83, 168, 55);
  .tool {
    padding:30rpx;
    text-align: right;
  }
  .content {
    padding-left: 30px;
    .avatar-container {
      padding: 20rpx 40rpx;
    }
  }
  .info {
    color: #ffffff;
    font-size: 28rpx;
    line-height: 50rpx;
  }
}
.list {
	background-color: #FFF
}
</style>
