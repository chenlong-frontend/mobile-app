import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem, AtTabs, AtTabsPane } from "taro-ui";
import { connect } from "@tarojs/redux";
import {
  getJobByStartMeAction,
  getJobByWaitMeAction
} from "../../actions/taskAction";

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
      tabList: [{ title: "我待办的" }, { title: "我发起的" }]
    };
    this.config = {
      navigationBarTitleText: "工单列表"
    };
  }

  componentDidMount() {
    this.props.onTaskStart();
    this.props.onTaskWait();
  }

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

  render() {
    const { tabList } = this.state;
    const { startList, waitList } = this.props;
    return (
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
    );
  }
}

export default List;
