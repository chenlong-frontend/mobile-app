import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtFab, AtIcon } from "taro-ui";
import { connect } from "@tarojs/redux";
import ListItem from '../../../component/list/listItem'
import { getAllTask } from "../../../actions/taskAction";
import './list.less'

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
  turnPage = code => () => {
    Taro.navigateTo({
      url: `/pages/task/mainTaskdetail?code=${code}`
    });
  };
  turnAddPage = () => {
    Taro.navigateTo({
      url: '/pages/task/create'
    });
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
            {allList.map(v => (
                <ListItem data={v} onClick={this.turnPage(v.id)} key={v.jobCode}></ListItem>
            ))}
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
              {activeList.map(v => (
                <ListItem data={v} onClick={this.turnPage(v.id)} key={v.jobCode}></ListItem>
              ))}
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
              {completeList.map(v => (
                <ListItem data={v} onClick={this.turnPage(v.id)} key={v.jobCode}></ListItem>
              ))}
          </AtTabsPane>
        </AtTabs>
        <View className="list-fab">
          <AtFab onClick={this.turnAddPage}>
            <AtIcon value='add' size='25' color='#FFF'></AtIcon>
          </AtFab>
        </View>
      </View>
    );
  }
}

export default List;
