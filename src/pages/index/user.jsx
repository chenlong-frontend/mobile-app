import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtAvatar } from 'taro-ui'

class User extends Component {
  render() {
    return (
      <View>
        <AtAvatar text='用户1' image='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1127089551,1776911506&fm=26&gp=0.jpg'></AtAvatar>
      </View>
    )
  }
}

export default User;