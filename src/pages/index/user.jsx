import "taro-ui/dist/style/components/flex.scss";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtAvatar } from "taro-ui";
import { connect } from "@tarojs/redux";
import img from "../../assets/imgs/car.svg";

@connect(
  ({ user: { user } }) => ({
    user
  }),
  () => ({})
)
class User extends Component {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <View>
        <View className="at-row">
          <View className="at-col at-col-1 at-col--auto">
            <AtAvatar text={user.userName} image={img}></AtAvatar>
          </View>
          <View className="at-col">
            <View>姓名：{user.userName}</View>
            <View>性别：{user.sex}</View>
          </View>
        </View>
        <Button
          onClick={() => {
            Taro.requestSubscribeMessage({
              tmplIds: ["_QRm8hkaNCftgMisIrjV1xASMGiTSRKp6hy6k8UptQs"]
            });
          }}
        >
          消息授权
        </Button>
      </View>
    );
  }
}

export default User;
