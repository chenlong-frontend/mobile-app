import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import "taro-ui/dist/style/index.scss";

import Index from "./pages/index/index";

import store from "./store";

import "./app.less";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: [
      "pages/index/home",
      "pages/task/list",
      "pages/login/index",
      "pages/index/user",
      "pages/task/create",
      "pages/task/myDeal",
      "pages/task/mainTaskdetail",
      "pages/task/subTaskDetail",
      "pages/task/mydealList",
      "pages/workTemplete/list",
      "pages/workTemplete/create"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "工作流",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      custom: false,
      color: "#9b9b9b",
      selectedColor: "#34b0b0",
      backgroundColor: "white",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/index/home",
          iconPath: "./assets/tabbar/ico_tabar_home_normal.png",
          selectedIconPath: "./assets/tabbar/ico_tabar_home_pressed.png",
          text: "我的首页"
        },
        {
          pagePath: "pages/task/mydealList",
          iconPath: "./assets/tabbar/ico_tabar_task_normal.png",
          selectedIconPath: "./assets/tabbar/ico_tabar_task_pressed.png",
          text: "我的任务"
        },
        {
          pagePath: "pages/task/list",
          iconPath: "./assets/tabbar/ico_tabar_prefecture_normal.png",
          selectedIconPath: "./assets/tabbar/ico_tabar_prefecture_pressed.png",
          text: "所有任务"
        },
        {
          pagePath: "pages/index/user",
          iconPath: "./assets/tabbar/ico_tabar_mine_normal.png",
          selectedIconPath: "./assets/tabbar/ico_tabar_mine_pressed.png",
          text: "个人中心"
        }
      ]
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
