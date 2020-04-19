import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtAvatar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import img from '../../assets/imgs/car.svg'

@connect(({ user:{user} }) => ({
  user
}), () => ({}))
class User extends Component {
  render() {
    const {user} = this.props
    console.log(user)
    return (
      <View>
        <AtAvatar text={user.userName} image={img}></AtAvatar>
        <View>姓名：{user.userName}</View>
        <View>性别：{user.sex}</View>
      </View>
    )
  }
}

export default User;