import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import { connect } from "@tarojs/redux";
import { loginAction } from "../../actions/loginAction";

@connect(
  ({ user }) => ({
    user
  }),
  dispatch => ({
    onLogin(data) {
      dispatch(loginAction(data)).then(() => {
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
        name: undefined,
        phone: undefined,
        profession: undefined
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
    this.props.onLogin(form);
  };
  render() {
    const { name, phone, profession } = this.state;
    return (
      <View>
        <view>请登记您的基本信息，信息请保持与您工作中使用的一致</view>
        <AtForm onSubmit={this.onSubmit}>
          <AtInput
            name="name"
            title="真实姓名"
            type="text"
            placeholder="请填写真实姓名"
            value={name}
            onChange={this.onValue("name")}
          />
          <AtInput
            name="phone"
            title="联系电话"
            type="phone"
            placeholder="请填写工作中使用的电话号码"
            value={phone}
            onChange={this.onValue("phone")}
          />
          <AtInput
            name="profession"
            title="工种"
            type="text"
            placeholder="点击选择工种"
            value={profession}
            onChange={this.onValue("profession")}
          />
          <AtButton formType="submit">提交信息</AtButton>
        </AtForm>
      </View>
    );
  }
}

export default Login;