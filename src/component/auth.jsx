import Taro, { Component } from "@tarojs/taro";
import { Navigator, Button } from "@tarojs/components";
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import { connect } from '@tarojs/redux'

import { getTokenAction, setUserAction } from '../actions/loginAction'

@connect(({ login }) => ({
  login
}), (dispatch) => ({
  onGetToken () {
    dispatch(getTokenAction())
  },
  onUserSet (data) {
    dispatch(setUserAction(data))
  }
}))
class Auth extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false
    };
  }

  async componentDidMount () {
    const res = await Taro.getSetting();
    if (!res.authSetting["scope.userInfo"]){
      this.setState({isOpened: true});
      return 
    } 

    this.checkToken();
  }

  checkToken = async () => {
    if (this.props.login.token) {
      this.nanavigateToIndex();
      return;
    } else {
      const { code } = await Taro.login();
      const {
        encryptedData,
        iv,
        signature,
        userInfo
      } = await Taro.getUserInfo({
        lang: "zh_CN",
        withCredentials: true
      });
      const user = {
        encryptedData,
        iv,
        signature,
        userInfo,
        code
      }
      this.props.onUserSet(user);
      await this.props.onGetToken();
      this.nanavigateToIndex();
    }
  }

  nanavigateToIndex = () => {
    Taro.navigateTo({
      url: '/pages/index/index'
    });
  }

  onConfirm = () => {
    this.setState({isOpened: false});
    this.checkToken();
  }

  render() {
    const {isOpened} = this.state;
    return (
      <AtModal isOpened={isOpened}>
        <AtModalHeader>授权提醒</AtModalHeader>
        <AtModalContent>
          本应用需要用户信息授权方可使用
        </AtModalContent>
        <AtModalAction><Button><Navigator openType="exit" target="miniProgram">退出</Navigator></Button><Button onGetUserInfo={this.onConfirm} openType="getUserInfo">授权</Button></AtModalAction>
      </AtModal>
    )
  }
};

export default Auth;