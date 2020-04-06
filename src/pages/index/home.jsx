import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtGrid } from "taro-ui";

class Home extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      data: [
        {
          image:
            "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
          value: "任务列表",
          url: ''
        },
        {
          image:
            "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
          value: "任务创建",
          url: '/pages/task/create'
        },
        {
          image:
            "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
          value: "新建工单",
          url: ''
        },
        {
          image:
            "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
          value: "工单列表",
          url: ''
        },
      ]
    }
  }

  onTurn = (item) => {
    console.log(item);
    Taro.navigateTo({
		  url: item.url
		})
  }

  render() {
    const { data } = this.state
    return (
      <View className='index'>
        <AtGrid
          data={data}
          onClick={this.onTurn}
        />
      </View>
    );
  }
}

export default Home;