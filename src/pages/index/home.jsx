import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtGrid, AtButton, AtToast } from "taro-ui";

class Home extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      data: [
        {
          image:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1127089551,1776911506&fm=26&gp=0.jpg",
          value: "任务列表",
          url: "/pages/task/list"
        },
        {
          image:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1127089551,1776911506&fm=26&gp=0.jpg",
          value: "任务创建",
          url: "/pages/task/create"
        },
        {
          image:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1127089551,1776911506&fm=26&gp=0.jpg",
          value: "新建工单",
          url: "/pages/workTemplete/create"
        },
        {
          image:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1127089551,1776911506&fm=26&gp=0.jpg",
          value: "工单列表",
          url: "/pages/workTemplete/list"
        }
      ],
      text: "",
      isOpened: ""
    };
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
        <AtToast
          isOpened={this.state.isOpened}
          text={this.state.text}
        ></AtToast>
        <AtButton
          onClick={() => {
            Taro.login({
              success: res => {
                if (res.code) {
                  //发起网络请求
                  Taro.request({
                    url: "https://weixin.frontjs.top/weixin/userInfo",
                    data: {
                      code: res.code
                    }
                  })
                    .then(r => {
                      this.setState({
                        isOpened: true,
                        text: JSON.stringify(r)
                      });
                    })
                    .catch(e => {
                      this.setState({
                        isOpened: true,
                        text: JSON.stringify(e)
                      });
                    });
                } else {
                  this.setState({
                    isOpened: true,
                    text: res.errMsg
                  });
                  console.log("登录失败！" + res.errMsg);
                }
              }
            });
          }}
        >
          点击登录
        </AtButton>
      </View>
    );
  }
}

export default Home;
