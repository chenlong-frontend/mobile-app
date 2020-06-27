import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtList, AtListItem, AtButton } from "taro-ui";
import {
  getTaskInsInfoAction,
  finshTaskInsAction,
  getAllTask
} from "../../actions/taskAction";

@connect(
  ({ task: { insInfo } }) => ({ insInfo }),
  dispatch => ({
    onInsInfo(data) {
      return dispatch(getTaskInsInfoAction(data));
    },
    onFinsh(data) {
      dispatch(finshTaskInsAction(data)).then(() => {
        dispatch(getAllTask());
        Taro.navigateBack();
      });
    }
  })
)
class MyDeal extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      code: ""
    };
    this.config = {
      navigationBarTitleText: "任务处理"
    };
  }
  componentWillMount() {
    const { code } = this.$router.params;
    this.props.onInsInfo(code);
    this.setState({ code });
  }
  onSubmit = () => {
    this.props.onFinsh(this.state.code);
  };
  render() {
    const { insInfo } = this.props;
    return (
      <View className="container">
        <AtList>
          <AtListItem title="任务流程" extraText={insInfo.taskFlow} />
          <AtListItem title="提交时间" extraText={insInfo.submitTime} />
          <AtListItem title="更新时间" extraText={insInfo.updateTime} />
          <AtListItem title="负责人" extraText={insInfo.taskManager} />
          <AtListItem title="所属主任务" extraText={insInfo.belongs} />
        </AtList>
        <View className="footer-submit">
          <AtButton onClick={this.onSubmit} type="primary" formType="submit">
            完成任务
          </AtButton>
        </View>
      </View>
    );
  }
}

export default MyDeal;
