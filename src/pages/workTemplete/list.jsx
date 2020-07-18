import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem } from "taro-ui";
import { connect } from "@tarojs/redux";
import { taskTplListAction } from "../../actions/workAction";

@connect(
  ({ work }) => ({
    work
  }),
  dispatch => ({
    onTaskTplList() {
      dispatch(taskTplListAction());
    }
  })
)
class List extends Component {
  constructor() {
    super(...arguments);
    this.config = {
      navigationBarTitleText: "工作流模板列表"
    };
  }

  componentDidMount() {
    this.props.onTaskTplList();
  }

  render() {
    const {
      work: { list }
    } = this.props;
    console.log(list);
    return (
      <AtList>
        {list.map(v => (
          <AtListItem
            iconInfo={{ size: 25, color: "#FF4949", value: "bookmark" }}
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
