import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem, AtTabs, AtTabsPane } from "taro-ui";
import { connect } from "@tarojs/redux";
import {
  getJobByStartMeAction,
  getJobByWaitMeAction
} from "../../actions/taskAction";
import Auth from "../../component/auth";

@connect(
  ({ task: { startList, waitList } }) => ({
    startList,
    waitList
  }),
  dispatch => ({
    onTaskStart() {
      dispatch(getJobByStartMeAction());
    },
    onTaskWait() {
      dispatch(getJobByWaitMeAction());
    }
  })
)
class List extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [{ title: "我发起的" }, { title: "我待办的" }]
    };
    this.config = {
      navigationBarTitleText: "工单列表"
    };
  }

  componentDidMount() {}

  onTabChange(value) {
    this.setState({
      current: value
    });
  }

  turnPage = code => () => {
    Taro.navigateTo({
      url: `/pages/task/myDeal?code=${code}`
    });
  };

  onAuthed = () => {
    this.props.onTaskStart();
    this.props.onTaskWait();
  };

  onAuthFail = () => {
    Taro.navigateTo({
      url: "/pages/login/index"
    });
  };

  render() {
    const { tabList } = this.state;
    const { startList, waitList } = this.props;
    return (
      <View>
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.onTabChange.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <AtList>
              {startList.map(v => (
                <AtListItem
                  key={v.jobCode}
                  title={v.jobName}
                  extraText={v.deadLine}
                  note={v.jobDes}
                />
              ))}
            </AtList>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <AtList>
              {waitList.map(v => (
                <AtListItem
                  onClick={this.turnPage(v.taskInsCode)}
                  key={v.jobCode}
                  title={v.jobName}
                  extraText={v.deadLine}
                  note={v.jobDes}
                />
              ))}
            </AtList>
          </AtTabsPane>
        </AtTabs>
        <Auth onAuthed={this.onAuthed} onAuthFail={this.onAuthFail}></Auth>
      </View>
    );
  }
}

export default List;
