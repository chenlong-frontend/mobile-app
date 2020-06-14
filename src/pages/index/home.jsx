import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import { connect } from "@tarojs/redux";
import { requestUserInfoAction } from "../../actions/userAction";
import taskCreateImg from "../../assets/imgs/task-create.svg";
import workCreateImg from "../../assets/imgs/work-create.svg";
import Auth from "../../component/auth";
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

  onAuthed = () => {
    this.props.onTaskStart();
    this.props.onTaskWait();
  };

  onAuthFail = () => {};

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
        <Auth onAuthed={this.onAuthed} onAuthFail={this.onAuthFail}></Auth>
      </View>
    );
  }
}

export default Home;
