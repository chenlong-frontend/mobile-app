import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { getMainTaskAction } from "../../actions/taskAction";
import { AtList, AtListItem, AtButton } from "taro-ui";
import "./mainTaskdetail.less";
@connect(
  ({ task: { mainTskInfo } }) => ({ mainTskInfo }),
  dispatch => ({
    onGetMainTask(code) {
      return dispatch(getMainTaskAction(code));
    }
  })
)
class MainTaskdetail extends Component {
  constructor() {
    super(...arguments);
    this.config = {
      navigationBarTitleText: "任务详情"
    };
  }
  componentWillMount() {
    const { code } = this.$router.params;
    this.props.onGetMainTask(code);
  }
  turnPage = code => () => {
    Taro.navigateTo({
      url: `/pages/task/subTaskDetail?code=${code}`
    });
  };
  render() {
    const { workTemplateVo, taskDetailDatas } = this.props.mainTskInfo;
    console.log(workTemplateVo, taskDetailDatas);
    return (
      <View className="container">
        <AtList>
          <AtListItem title="任务名称" extraText={workTemplateVo.jobName} />
          <AtListItem title="任务描述" extraText={workTemplateVo.jobDesc} />
          <AtListItem title="开始时间" extraText={workTemplateVo.startDate} />
          <AtListItem title="结束时间" extraText={workTemplateVo.endDate} />
        </AtList>
        <View>
          <View className="main-task-title">子任务(流程任务)</View>
          {taskDetailDatas.map(insInfo => {
            return (
              <View key={insInfo.taskInsCode} className="main-task-item">
                <AtListItem title="任务流程" extraText={insInfo.taskFlow} />
                <AtListItem title="提交时间" extraText={insInfo.submitTime} />
                <AtListItem title="更新时间" extraText={insInfo.updateTime} />
                <AtListItem title="负责人" extraText={insInfo.taskManager} />
                <AtListItem title="所属主任务" extraText={insInfo.belongs} />
                <AtButton
                  onClick={this.turnPage(insInfo.taskInsCode)}
                  type="primary"
                >
                  查看详情操作
                </AtButton>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default MainTaskdetail;
