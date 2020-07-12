import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { requestUserInfoAction } from "../../actions/userAction";
import Auth from "../../component/auth";
import "./style/home.less";

@connect(
  ({}) => ({}),
  dispatch => ({
    onUserInfo(data) {
      dispatch(requestUserInfoAction(data));
    }
  })
)
class Home extends Component {
  constructor() {
    super(...arguments);
    this.state = {
    };
  }

  onTurn = item => {
    Taro.navigateTo({
      url: item.url
    });
  };

  onAuthed = () => {
  };

  onAuthFail = () => {};

  render() {
    return (
      <View className="container">
        <Auth onAuthed={this.onAuthed} onAuthFail={this.onAuthFail}></Auth>
      </View>
    );
  }
}

export default Home;
