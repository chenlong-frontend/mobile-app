import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem } from "taro-ui";
import { connect } from "@tarojs/redux";
import { getJobByWaitMeAction } from "../../actions/taskAction";

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

  render() {
    const { waitList } = this.props;
    return (
      <AtList>
        {waitList.map(v => (
          <AtListItem
            key={v.jobCode}
            title={v.jobName}
            extraText={v.deadLine}
            note={v.jobDes}
          />
        ))}
      </AtList>
    );
  }
}

export default List;
