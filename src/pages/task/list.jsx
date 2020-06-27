import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem, AtTabs, AtTabsPane } from "taro-ui";
import { connect } from "@tarojs/redux";
import { getAllTask } from "../../actions/taskAction";

@connect(
  ({ task: { allList } }) => ({
    allList
  }),
  dispatch => ({
    onAllTask() {
      dispatch(getAllTask());
    }
  })
)
class List extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [{ title: "全部" }, { title: "进行中" }, { title: "已结束" }]
    };
    this.config = {
      navigationBarTitleText: "所有任务"
    };
  }

  componentDidMount() {
    this.props.onAllTask();
  }

  onTabChange(value) {
    this.setState({
      current: value
    });
  }

  render() {
    const { tabList } = this.state;
    const { allList } = this.props;
    const activeList = allList.filter(v => v.jobStatus === "active");
    const completeList = allList.filter(v => v.jobStatus !== "active");
    return (
      <View>
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.onTabChange.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <AtList>
              {allList.map(v => (
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
              {activeList.map(v => (
                <AtListItem
                  key={v.jobCode}
                  title={v.jobName}
                  extraText={v.deadLine}
                  note={v.jobDes}
                />
              ))}
            </AtList>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <AtList>
              {completeList.map(v => (
                <AtListItem
                  key={v.jobCode}
                  title={v.jobName}
                  extraText={v.deadLine}
                  note={v.jobDes}
                />
              ))}
            </AtList>
          </AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}

export default List;
