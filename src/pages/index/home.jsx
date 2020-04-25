import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import { connect } from "@tarojs/redux";
import img from "../../assets/imgs/car.svg";
import { requestUserInfoAction } from "../../actions/userAction";

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
      data: [
        {
          image: img,
          value: "任务列表",
          url: "/pages/task/list"
        },
        {
          image: img,
          value: "任务创建",
          url: "/pages/task/create"
        },
        {
          image: img,
          value: "新建工单",
          url: "/pages/workTemplete/create"
        },
        {
          image: img,
          value: "工单列表",
          url: "/pages/workTemplete/list"
        }
      ]
    };
  }

  componentDidMount() {
    this.props.onUserInfo();
    Taro.navigateTo({
      url: "/pages/task/myDeal?code=25facaa7-341c-4d93-94d8-6ab34ecf87d1"
    });
  }

  onTurn = item => {
    console.log(item);
    Taro.navigateTo({
      url: item.url
    });
  };

  render() {
    const { data } = this.state;
    return (
      <View className="index">
        <AtGrid data={data} onClick={this.onTurn} />
      </View>
    );
  }
}

export default Home;
