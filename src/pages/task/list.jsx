import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import AllList from './list/list'
import MyDealList from './list/mydealList'

@connect(
  ({ user: { user } }) => ({
    user
  })
)
class List extends Component {
  constructor() {
    super(...arguments);
    this.config = {
      navigationBarTitleText: "任务列表"
    };
  }

  render() {
    console.log(this.props.user)
    const {role} = this.props.user
    return (
      <View className='container'>
        {role === 'root' && <AllList></AllList>}
        {role !== 'root' && <MyDealList></MyDealList>}
      </View>
    );
  }
}

export default List;
