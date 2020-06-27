import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtIcon } from "taro-ui";
import { connect } from "@tarojs/redux";
import { registerAction } from "../../actions/loginAction";
import "./index.less";

@connect(
  ({ user }) => ({
    user
  }),
  dispatch => ({
    onReg(data) {
      dispatch(registerAction(data)).then(() => {
        Taro.switchTab({
          url: "/pages/task/list"
        });
      });
    }
  })
)
class Login extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      form: {
        userName: undefined,
        telPhoneNum: undefined,
        departMentName: undefined
      }
    };
    this.config = {
      navigationBarTitleText: "信息登记"
    };
  }
  onValue = key => value => {
    var form = this.state.form;
    form[key] = value;
    this.setState({
      form
    });
  };
  onSubmit = () => {
    const { form } = this.state;
    this.props.onReg(form);
  };
  render() {
    const { userName, telPhoneNum, departMentName } = this.state;
    return (
      <View className="login">
        <View className="tip-container">
          <AtIcon
            value="alert-circle"
            color="rgba(145, 145, 145, 1)"
            size="12"
          ></AtIcon>
          <Text className="tips">
            请登记您的基本信息，信息请保持与您工作中使用的一致
          </Text>
        </View>
        <AtForm>
          <AtInput
            name="userName"
            title="真实姓名"
            type="text"
            placeholder="请填写真实姓名"
            value={userName}
            onChange={this.onValue("userName")}
          />
          <AtInput
            name="telPhoneNum"
            title="联系电话"
            type="phone"
            placeholder="请填写工作中使用的电话号码"
            value={telPhoneNum}
            onChange={this.onValue("telPhoneNum")}
          />
          <AtInput
            name="departMentName"
            title="工种"
            type="text"
            placeholder="点击选择工种"
            value={departMentName}
            onChange={this.onValue("departMentName")}
          />
        </AtForm>
        <View className="footer">
          <AtButton onClick={this.onSubmit} type="primary" formType="submit">
            提交信息
          </AtButton>
        </View>
      </View>
    );
  }
}

export default Login;
