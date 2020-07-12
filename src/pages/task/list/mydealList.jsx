import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem } from "taro-ui";
import { connect } from "@tarojs/redux";
import MyListItem from '../../../component/list/myListItem'
import { getJobByWaitMeAction } from "../../../actions/taskAction";
import { View } from "@tarojs/components";

@connect(
  ({ task: { waitList } }) => ({
    waitList
  }),
  dispatch => ({
    onTaskTplList() {
      dispatch(getJobByWaitMeAction());
    }
  })
)
class List extends Component {
  constructor() {
    super(...arguments);
    this.config = {
      navigationBarTitleText: "我的任务"
    };
  }

  componentDidMount() {
    this.props.onTaskTplList();
  }
  turnPage = code => () => {
    Taro.navigateTo({
      url: `/pages/task/myDeal?code=${code}`
    });
  };
  render() {
    const { waitList } = this.props;
    return (
      <View>
        {waitList.map(v => (
            <MyListItem data={v} key={v.jobCode} onClick={this.turnPage(v.id)}></MyListItem>
          ))}
      </View>
    );
  }
}

export default List;
