import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtList, AtListItem, AtForm, AtInput, AtButton } from "taro-ui";
import {
  getTaskInsInfoAction,
  finshTaskInsAction,
  editTaskInsInfoAction
} from "../../actions/taskAction";

@connect(
  ({ task: { insInfo } }) => ({ insInfo }),
  dispatch => ({
    onInsInfo(data) {
      dispatch(getTaskInsInfoAction(data));
    },
    onFinsh(data) {
      dispatch(finshTaskInsAction(data));
    },
    onEditTask(data) {
      dispatch(editTaskInsInfoAction(data));
    }
  })
)
class MyDeal extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      formArr: [
        { label: "标签1", value: "1" },
        {
          label: "标签2",
          value: "1"
        }
      ],
      code: ""
    };
  }
  componentWillMount() {
    const { code } = this.$router.params;
    this.props.onInsInfo(code);
    this.setState({ code });
  }
  onValue = key => v => {
    const { formArr } = this.state;
    formArr[key].value = v;
    this.setState({
      formArr
    });
  };
  onSubmit = () => {
    this.props.onFinsh(this.state.code);
  };
  onSave = () => {
    console.log(this.state.formArr);
  };
  render() {
    const { formArr } = this.state;
    return (
      <View>
        <AtList>
          <AtListItem title="订单号" extraText="详细信息" />
          <AtListItem title="订单状态" extraText="详细信息" />
        </AtList>
        <View className="at-row">
          <View className="at-col">请填写：</View>
          <View className="at-col" onClick={this.onSave}>
            保存
          </View>
        </View>
        <AtForm>
          {formArr.map((v, key) => {
            return (
              <AtInput
                key={key}
                name={v.label}
                title={v.label}
                type="text"
                placeholder={v.label}
                value={v.value}
                onChange={this.onValue(key)}
              />
            );
          })}
          <AtButton onClick={this.onSubmit}>完成任务</AtButton>
        </AtForm>
      </View>
    );
  }
}

export default MyDeal;
