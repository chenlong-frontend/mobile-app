import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Auth from "../component/auth";

class Start extends Component {

  config = {
    navigationBarTitleText: '',
  };

  render() {
    return (
      <View>
        <Auth />
      </View>
    );
  }
}

export default Start;