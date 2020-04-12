import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtTextarea } from "taro-ui";
import Selector from "../../component/selector";

class TaskCreate extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      form: {
        jobName: "",
        deadLine: "",
        startTaskTplCode: "",
        jobDes: ""
      },
      startTaskTpls: [
        { value: "1", text: "asdfafas" },
        { value: "2", text: "saf" }
      ]
    };
    this.config = {
      navigationBarTitleText: "任务创建"
    };
  }
  onValue = key => value => {
    var form = this.state.form;
    form[key] = value;
    this.setState({
      form
    });
  };
  onTimeChange = v => {
    this.onValue("deadLine")(v.detail.value);
  };
  onJobDes = event => {
    this.onValue("jobDes")(event.target.value);
  };
  onSubmit(event) {
    console.log(event);
  }
  render() {
    const { jobName, deadLine, jobDes, startTaskTplCode } = this.state.form;
    const { startTaskTpls } = this.state;

    return (
      <View>
        <AtForm onSubmit={this.onSubmit.bind(this)}>
          <AtInput
            name="value"
            title="工作名称"
            type="text"
            placeholder="工作名称"
            value={jobName}
            onChange={this.onValue("jobName")}
          />
          <Picker mode="date" onChange={this.onTimeChange}>
            <View className="at-input">
              <View className="at-input__container">
                <Text className="at-input__title">截止时间</Text>
                <View>
                  <View className="picker">
                    {deadLine ? deadLine : "请选择时间"}
                  </View>
                </View>
              </View>
            </View>
          </Picker>
          <Selector
            title="起初模板"
            data={startTaskTpls}
            value={startTaskTplCode}
            placeholder="选择起初模板"
            onChange={this.onValue("startTaskTplCode")}
          ></Selector>
          <AtTextarea
            value={jobDes}
            onChange={this.onJobDes}
            maxLength={200}
            placeholder="工作描述"
          />

          <AtButton formType="submit">提交</AtButton>
        </AtForm>
      </View>
    );
  }
}

export default TaskCreate;
