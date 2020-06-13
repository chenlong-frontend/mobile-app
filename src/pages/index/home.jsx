import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import { connect } from "@tarojs/redux";
import { requestUserInfoAction } from "../../actions/userAction";
import taskCreateImg from "../../assets/imgs/task-create.svg";
import taskListImg from "../../assets/imgs/task-list.svg";
import workCreateImg from "../../assets/imgs/work-create.svg";
import workListImg from "../../assets/imgs/work-list.svg";
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
          image: taskCreateImg,
          value: "任务创建",
          url: "/pages/task/create"
        },
        {
          image: workCreateImg,
          value: "新建工单",
          url: "/pages/workTemplete/create"
        },
        {
          image: taskListImg,
          value: "任务列表",
          url: "/pages/task/list"
        },
        {
          image: workListImg,
          value: "工单列表",
          url: "/pages/workTemplete/list"
        }
      ]
    };
  }

  componentDidMount() {
    // this.props.onUserInfo();
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
            <Image
              style="width: 100%;"
              src="https://weixin.frontjs.top/banner.jpg"
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              style="width: 100%;"
              src="https://weixin.frontjs.top/banner.jpg"
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              style="width: 100%;"
              src="https://weixin.frontjs.top/banner.jpg"
            />
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
