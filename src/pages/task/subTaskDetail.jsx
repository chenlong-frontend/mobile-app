import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtList, AtListItem, AtButton } from "taro-ui";
import {
  getTaskInsInfoDetailByIdAciton,
  getMainTaskAction,
  passTaskAction,
  rejectTaskAction,
  getAllTask, 
  getJobByWaitMeAction
} from "../../actions/taskAction";

@connect(
  ({ task: { insInfo, mainTskInfo } }) => ({ insInfo, mainTskInfo }),
  dispatch => ({
    onInsInfo(data) {
      return dispatch(getTaskInsInfoDetailByIdAciton(data));
    },
    onPassTask(code, id) {
      dispatch(passTaskAction(code)).then(() => {
        dispatch(getMainTaskAction(id));
        dispatch(getAllTask())
        dispatch(getJobByWaitMeAction());
        Taro.navigateBack();
      });
    },
    onRejectTask(code, id) {
      dispatch(rejectTaskAction(code)).then(() => {
        dispatch(getMainTaskAction(id));
        dispatch(getAllTask())
        dispatch(getJobByWaitMeAction());
        Taro.navigateBack();
      });
    }
  })
)
class SubTaskDetail extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      code: ""
    };
    this.config = {
      navigationBarTitleText: "子任务详情"
    };
  }
  componentWillMount() {
    const { code } = this.$router.params;
    this.props.onInsInfo(code);
    this.setState({ code });
  }
  onSubmit = () => {
    const {
      insInfo,
      mainTskInfo: {
        workTemplateVo: { id }
      }
    } = this.props;
    if (insInfo.taskStatus === "active") {
      this.props.onPassTask(this.state.code, id);
    }
    if (insInfo.taskStatus === "finish") {
      this.props.onRejectTask(this.state.code, id);
    }
  };
  render() {
    const { insInfo } = this.props;
    const isActive = insInfo.taskStatus === "active";
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
          <AtButton
            onClick={this.onSubmit}
            type={isActive ? "primary" : "secondary"}
            formType="submit"
          >
            {isActive ? "通过" : "驳回"}
          </AtButton>
        </View>
      </View>
    );
  }
}

export default SubTaskDetail;
