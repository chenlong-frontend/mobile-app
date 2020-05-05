import Taro, { Component } from "@tarojs/taro";
import { Navigator, Button } from "@tarojs/components";
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui";
import { connect } from "@tarojs/redux";

import { getTokenAction, setUserAction } from "../actions/loginAction";

@connect(
  ({ login }) => ({
    login
  }),
  dispatch => ({
    onGetToken() {
      dispatch(getTokenAction());
    },
    onUserSet(data) {
      dispatch(setUserAction(data));
    }
  })
)
class Auth extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false
    };
  }

  async componentDidMount() {
    const res = await Taro.getSetting();
    if (!res.authSetting["scope.userInfo"]) {
      this.setState({ isOpened: true });
      return;
    }

    this.checkToken();
  }

  checkToken = async () => {
    const { code } = await Taro.login();
    const { encryptedData, iv, signature, userInfo } = await Taro.getUserInfo({
      lang: "zh_CN",
      withCredentials: true
    });
    const user = {
      encryptedData,
      iv,
      signature,
      userInfo,
      code
    };
    this.props.onUserSet(user);
    if (this.props.login.token) {
      return;
    } else {
      await this.props.onGetToken();
    }
  };

  onConfirm = () => {
    this.setState({ isOpened: false });
    this.checkToken();
  };

  render() {
    const { isOpened } = this.state;
    return (
      <AtModal isOpened={isOpened}>
        <AtModalHeader>授权提醒</AtModalHeader>
        <AtModalContent>本应用需要户信息和消息授权方可使用</AtModalContent>
        <AtModalAction>
          <Button>
            <Navigator openType="exit" target="miniProgram">
              退出
            </Navigator>
          </Button>
          <Button onGetUserInfo={this.onConfirm} openType="getUserInfo">
            授权
          </Button>
        </AtModalAction>
      </AtModal>
    );
  }
}

export default Auth;
