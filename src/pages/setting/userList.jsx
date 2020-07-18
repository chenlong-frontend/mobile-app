import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import { connect } from "@tarojs/redux";
import { requestGetUsersAction } from "../../actions/userAction";

@connect(
  ({ user }) => ({
    user
  }),
  dispatch => ({
    onGetUsers() {
      dispatch(requestGetUsersAction());
    }
  })
)
class UserList extends Component {
  constructor() {
    super(...arguments);
    this.config = {
      navigationBarTitleText: "人员管理"
    };
  }
  componentDidMount() {
    this.props.onGetUsers();
  }
  render() {
    let {
      user: { list }
    } = this.props;
    return (
      <View className="container">
        <AtList>
          {list.map(item => (
            <AtListItem
              key={item.userCode}
              title={item.userName}
              note={item.departMentName}
              extraText={item.telPhoneNum}
              iconInfo={{ size: 25, color: "#FF4949", value: "bookmark" }}
            />
          ))}
        </AtList>
      </View>
    );
  }
}

export default UserList;
