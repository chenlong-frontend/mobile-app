import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtTextarea } from "taro-ui";
import { connect } from "@tarojs/redux";
import Selector from "../../component/selector";
import MultiSelector from "../../component/multiSelector";
import { taskTypeDict } from "../../constants/dict";
import {
  taskTplCreateAction,
  dependListByTypeAction,
  nodeListByTypeAction
} from "../../actions/workAction";
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
    onTplCreate(data) {
      dispatch(taskTplCreateAction(data)).then(() => {
        Taro.navigateBack();
      });
    },
    onDepend() {
      dispatch(dependListByTypeAction());
    },
    onNode() {
      dispatch(nodeListByTypeAction());
    }
  })
)
class WorkTempleteCreate extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      form: {
        taskName: undefined,
        taskType: "depend",
        dependTaskCodes: undefined,
        nextTaskCode: undefined,
        receiverUserId: undefined,
        taskDes: undefined
      },
      taskTypeList: taskTypeDict
    };
    this.config = {
      navigationBarTitleText: "工单创建"
    };
  }

  componentDidMount() {
    this.props.onGetUsers();
    this.props.onDepend();
    this.props.onNode();
  }
  onTypeChange = value => {
    let form = this.state.form;
    this.setState({
      form: Object.assign(form, {
        dependTaskCodes: undefined,
        nextTaskCode: undefined
      })
    });
    this.onValue("taskType")(value);
  };
  onValue = key => value => {
    let form = this.state.form;
    form[key] = value;
    this.setState({
      form
    });
  };

  onSubmit() {
    const { form } = this.state;
    this.props.onTplCreate(form);
  }

  render() {
    const {
      work: { dependList, nodeList },
      user
    } = this.props;
    const { taskTypeList } = this.state;
    const {
      taskName,
      taskType,
      dependTaskCodes,
      nextTaskCode,
      receiverUserId,
      taskDes
    } = this.state.form;
    const dependLists = dependList.map(v => ({
      value: v.taskCode,
      text: v.taskName,
      label: v.taskName
    }));
    const nodeLists = nodeList.map(v => ({
      value: v.taskCode,
      text: v.taskName,
      label: v.taskName
    }));
    const receiverUserList = user.list.map(v => ({
      value: v.userCode,
      text: v.userName
    }));
    const isDepend = taskType === "node";
    return (
      <View className="container">
        <AtForm>
          <AtInput
            name="value"
            title="节点名称"
            type="text"
            placeholder="节点名称"
            value={taskName}
            onChange={this.onValue("taskName")}
          />
          <Selector
            title="完成模式"
            data={taskTypeList}
            value={taskType}
            placeholder="请选择完成模式"
            onChange={this.onTypeChange}
          ></Selector>
          {isDepend && (
            <MultiSelector
              title="所需工序"
              data={dependLists}
              value={dependTaskCodes}
              onChange={this.onValue("dependTaskCodes")}
            ></MultiSelector>
          )}
          {isDepend && (
            <Selector
              title="下一节点"
              data={nodeLists}
              value={nextTaskCode}
              placeholder="请选择下一节点"
              onChange={this.onValue("nextTaskCode")}
            ></Selector>
          )}
          <Selector
            title="实施人"
            data={receiverUserList}
            value={receiverUserId}
            placeholder="请选择实施人"
            onChange={this.onValue("receiverUserId")}
          ></Selector>
          <AtTextarea
            value={taskDes}
            onChange={this.onValue("taskDes")}
            maxLength={200}
            placeholder="节点描述"
          />
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

export default WorkTempleteCreate;
