import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem, AtFab, AtIcon } from "taro-ui";
import { connect } from "@tarojs/redux";
import { taskTplListAction } from "../../actions/workAction";
import './list.less'

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
  turnPage  = () => {
    Taro.navigateTo({
      url: "/pages/workTemplete/metaCreate"
    });
  };
  render() {
    const {
      work: { list }
    } = this.props;
    console.log(list);
    return (
      <View>
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
        <View className="list-fab">
          <AtFab onClick={this.turnPage}>
            <AtIcon value='add' size='25' color='#FFF'></AtIcon>
          </AtFab>
        </View>
      </View>
    );
  }
}

export default List;
