import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import { AtTabBar } from "taro-ui";
import Home from './home.jsx'

// import { add, minus, asyncAdd } from '../../actions/counter'

import "./index.less";

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
    this.config = {
      navigationBarTitleText: "首页",
    };
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <View className='index'>
        <Home></Home>
        <AtTabBar
          tabList={[
            { title: "首页", iconType: 'bullet-list' },
            { title: "星标", iconType: 'star' },
            { title: "我的", iconType: 'user' },
          ]}
          fixed
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Index;
