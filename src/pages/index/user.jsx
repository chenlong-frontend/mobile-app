import "taro-ui/dist/style/components/flex.scss";
import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtAvatar,AtList, AtListItem  } from "taro-ui";
import { connect } from "@tarojs/redux";
import img from "../../assets/imgs/user.svg";
import './user.less';

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
      <View className='container'>
        <View className='top'>
          <View className='tool'>
            <View className='at-icon at-icon-edit'></View>
          </View>
          
          <View className="at-row content">
            <View className="at-col at-col-1 at-col--auto avatar">
              <View className='avatar-container'><AtAvatar size='large' circle image={img}></AtAvatar></View>
            </View>
            <View className="at-col">
              <View><Text className="info">姓名：{user.userName}</Text></View>
              <View><Text className="info">工种：{user.departMentName}</Text></View>
              <View><Text className="info">电话：{user.telPhoneNum}</Text></View>
            </View>
          </View>
        </View>
        <AtList>
          <AtListItem title='人员管理' arrow='right' />
          <AtListItem title='任务流程模板管理' arrow='right' />
        </AtList>
      </View>
    );
  }
}

export default User;
