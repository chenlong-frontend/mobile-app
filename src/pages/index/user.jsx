import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtAvatar } from 'taro-ui'
import img from '../../assets/imgs/car.svg'

class User extends Component {
  render() {
    return (
      <View>
        <AtAvatar text='用户1' image={img}></AtAvatar>
      </View>
    )
  }
}

export default User;