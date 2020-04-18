import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtTextarea } from "taro-ui";
import { connect } from '@tarojs/redux'
import Selector from "../../component/selector";
import {taskTypeDict} from '../../constants/dict'
import { taskTplListAction } from '../../actions/workAction'

@connect(({ work }) => ({
  work
}), (dispatch) => ({
  onTaskTplList (data) {
    dispatch(taskTplListAction(data))
  }
}))
class WorkTempleteCreate extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      form: {
        taskName: '',
        taskType: '',
        dependTaskCodes: '',
        nextTaskCode: '',
        receiverUserId: '',
        taskDes: ''
      },
      taskTypeList: taskTypeDict
    };
    this.config = {
      navigationBarTitleText: "工单创建"
    };
  }

  componentDidMount () {
    this.props.onTaskTplList();
  }

  onTaskDes = event => {
    this.onValue("taskDes")(event.target.value);
  };
  onValue = key => value => {
    var form = this.state.form;
    form[key] = value;
    this.setState({
      form
    });
  };

  onSubmit(event) {
    console.log(event);
  }

  render() {
    const {work: { list }} = this.props;
    const { taskTypeList } = this.state;
    const { taskName, taskType, dependTaskCodes, nextTaskCode, receiverUserId, taskDes } = this.state.form;
    const taskTplList = list.map(v => ({value: v.taskCode, text: v.taskName}));
    return (
      <View>
        <AtForm onSubmit={this.onSubmit.bind(this)}>
          <AtInput
            name="value"
            title="节点名称"
            type="text"
            placeholder="节点名称"
            value={taskName}
            onChange={this.onValue("jobName")}
          />
          <Selector
            title="完成模式"
            data={taskTypeList}
            value={taskType}
            placeholder="请选择完成模式"
            onChange={this.onValue("taskType")}
          ></Selector>
          <Selector
            title="所需工序"
            data={taskTplList}
            value={dependTaskCodes}
            placeholder="请选择所需工序"
            onChange={this.onValue("dependTaskCodes")}
          ></Selector>
          <Selector
            title="下一节点"
            data={taskTplList}
            value={nextTaskCode}
            placeholder="请选择下一节点"
            onChange={this.onValue("nextTaskCode")}
          ></Selector>
          <Selector
            title="实施人"
            data={taskTypeList}
            value={receiverUserId}
            placeholder="请选择实施人"
            onChange={this.onValue("receiverUserId")}
          ></Selector>
          <AtTextarea
            value={taskDes}
            onChange={this.onTaskDes}
            maxLength={200}
            placeholder="节点描述"
          />
          <AtButton formType="submit">提交</AtButton>
        </AtForm>
      </View>
    )
  }
}

export default WorkTempleteCreate;