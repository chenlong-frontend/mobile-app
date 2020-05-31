import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Auth from "../../component/auth";

class Home extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <View>
        <Auth></Auth>
      </View>
    )
  }
}

export default Home;
