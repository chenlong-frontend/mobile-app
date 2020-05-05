import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabBar } from "taro-ui";
import Home from "./home.jsx";
import Star from "./star";
import User from "./user";
import Auth from "../../component/auth";

import "./index.less";

class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      title: ["首页", "星标任务", "个人中心"],
      tabList: [
        { title: "首页", iconType: "bullet-list" },
        { title: "星标", iconType: "star" },
        { title: "我的", iconType: "user" }
      ]
    };
    this.config = {
      navigationBarTitleText: "首页"
    };
  }

  handleClick(value) {
    this.setState({
      current: value
    });
    Taro.setNavigationBarTitle({ title: this.state.title[value] });
  }

  render() {
    const { current, tabList } = this.state;
    return (
      <View className="index">
        {current === 0 && <Home></Home>}
        {current === 1 && <Star></Star>}
        {current === 2 && <User></User>}
        <AtTabBar
          tabList={tabList}
          fixed
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
        <Auth></Auth>
      </View>
    );
  }
}

export default Index;
