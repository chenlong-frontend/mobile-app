import Taro, { Component } from "@tarojs/taro";
import { View, Picker, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtTextarea } from "taro-ui";
import { connect } from "@tarojs/redux";
import Selector from "../../component/selector";
import { nodeListByTypeAction } from "../../actions/workAction";
import { createJobAction, getAllTask, getJobByWaitMeAction } from "../../actions/taskAction";
import { requestGetUsersAction } from "../../actions/userAction";

@connect(
  ({ work, user }) => ({
    work,
    user
  }),
  dispatch => ({
    onGetUsers() {
      dispatch(requestGetUsersAction());
    },
    onNode() {
      dispatch(nodeListByTypeAction());
    },
    onCreateJob(data) {
      dispatch(createJobAction(data)).then(() => {
        dispatch(getAllTask())
        dispatch(getJobByWaitMeAction());
        Taro.navigateBack();
      });
    }
  })
)
class TaskCreate extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      form: {
        jobName: undefined,
        jobDes: undefined,
        subTasks: []
      }
    };
    this.config = {
      navigationBarTitleText: "任务创建"
    };
  }
  componentDidMount() {
    this.props.onGetUsers();
    this.props.onNode();
  }
  onValue = key => value => {
    var form = this.state.form;
    form[key] = value;
    this.setState({
      form
    });
  };
  onSubmit() {
    const { form } = this.state;
    this.props.onCreateJob(form);
  }
  onAdd() {
    let { form } = this.state;
    form.subTasks.push({
      taskTemplateId: undefined,
      userId: undefined
    });
    this.setState({
      form
    });
  }
  onRemove() {
    let { form } = this.state;
    form.subTasks.length > 0 && form.subTasks.pop();
    this.setState({
      form
    });
  }
  onSubTask = (name, index) => value => {
    let { form } = this.state;
    form.subTasks[index][name] = value;
    if (name === "taskTemplateId") {
      const res = this.props.work.nodeList.find(v => v.taskCode === value);
      form.subTasks[index].taskTemplateName = res.taskName;
    }
    this.setState({
      form
    });
  };
  onTimeChange = (name, index) => v => {
    this.onSubTask(name, index)(v.detail.value);
  };
  render() {
    let {
      work: { nodeList },
      user
    } = this.props;
    const { jobName, jobDes, subTasks } = this.state.form;
    user = user || [];
    nodeList = nodeList || [];

    const taskTplList = nodeList.map(v => ({
      value: v.taskCode,
      text: v.taskName
    }));
    const userList = user.list.map(v => ({
      value: v.userCode,
      text: v.userName
    }));
    return (
      <View className="container">
        <AtForm>
          <AtInput
            name="value"
            title="任务名称"
            type="text"
            placeholder="任务名称"
            value={jobName}
            onChange={this.onValue("jobName")}
          />
          <AtTextarea
            value={jobDes}
            onChange={this.onValue("jobDes")}
            maxLength={200}
            placeholder="任务描述"
          />
          <View className="at-row">
            <View className="at-col">
              <AtButton onClick={this.onAdd.bind(this)}>新增</AtButton>
            </View>
            <View className="at-col">
              <AtButton onClick={this.onRemove.bind(this)}>撤销</AtButton>
            </View>
          </View>
          {subTasks.map((v, index) => {
            return (
              <view key={index}>
                <Selector
                  title={"任务" + (index + 1)}
                  data={taskTplList}
                  value={v.taskTemplateId}
                  placeholder="选择子任务"
                  onChange={this.onSubTask("taskTemplateId", index)}
                ></Selector>
                <Selector
                  title="负责人"
                  data={userList}
                  value={v.userId}
                  placeholder="请选择实施人"
                  onChange={this.onSubTask("userId", index)}
                ></Selector>
                <Picker
                  mode="date"
                  onChange={this.onTimeChange("startDate", index)}
                >
                  <View className="at-input">
                    <View className="at-input__container">
                      <Text className="at-input__title">启动时间</Text>
                      <View>
                        <View className="picker">
                          {v.startDate ? v.startDate : "请选择启动时间"}
                        </View>
                      </View>
                    </View>
                  </View>
                </Picker>
                <Picker
                  mode="date"
                  onChange={this.onTimeChange("endDate", index)}
                >
                  <View className="at-input">
                    <View className="at-input__container">
                      <Text className="at-input__title">结束时间</Text>
                      <View>
                        <View className="picker">
                          {v.endDate ? v.endDate : "请选择结束时间"}
                        </View>
                      </View>
                    </View>
                  </View>
                </Picker>
              </view>
            );
          })}
        </AtForm>
        <View className="footer-submit">
          <AtButton
            onClick={this.onSubmit.bind(this)}
            type="primary"
            formType="submit"
          >
            提交
          </AtButton>
        </View>
      </View>
    );
  }
}

export default TaskCreate;
