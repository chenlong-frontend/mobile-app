import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem } from "taro-ui";
import { connect } from "@tarojs/redux";
import { getJobByWaitMeAction } from "../../actions/taskAction";

@connect(
  ({ work }) => ({
    work
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
    const {
      work: { list }
    } = this.props;
    return (
      <AtList>
        {list.map(v => (
          <AtListItem
            key={v.taskCode}
            title={v.taskName}
            extraText={v.createDate}
            note={v.taskDes}
          />
        ))}
      </AtList>
    );
  }
}

export default List;
