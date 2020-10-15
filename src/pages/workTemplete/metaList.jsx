import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem, AtFab, AtIcon } from "taro-ui";
import { connect } from "@tarojs/redux";
import { getMetaInfo } from "../../actions/taskAction";
import './list.less'

@connect(
  ({ task }) => ({
    task
  }),
  dispatch => ({
    onTaskTplList() {
      dispatch(getMetaInfo());
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
      task: { metaList }
    } = this.props;
    console.log(metaList);
    return (
      <View>
        {metaList.map((v, key) => (
          <View key={key}>
            <View style={{padding: '15px'}}>{v.taskTemplateType}</View>
            <AtList>
              {v.taskTemplateTypeMetaDetails.map((item, index) => (
                <AtListItem
                  iconInfo={{ size: 25, color: "#FF4949", value: "bookmark" }}
                  key={index}
                  title={item.metaName}
                  extraText={item.metaType}
                  note={item.isRequired}
                />
              ))}
            </AtList>
          </View>
        ))}

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
