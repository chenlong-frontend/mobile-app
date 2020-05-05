import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import { connect } from "@tarojs/redux";
import img from "../../assets/imgs/car.svg";
import { requestUserInfoAction } from "../../actions/userAction";
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
    // Taro.navigateTo({
    //   url: "/pages/workTemplete/create"
    // });
  }

  onTurn = item => {
    Taro.navigateTo({
      url: item.url
    });
  };

  render() {
    const { data } = this.state;
    return (
      <View className="index">
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className="demo-text-1">1</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">2</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">3</View>
          </SwiperItem>
        </Swiper>
        <View className="title">工作台</View>
        <AtGrid
          data={data}
          columnNum={4}
          hasBorder={false}
          onClick={this.onTurn}
        />
      </View>
    );
  }
}

export default Home;
