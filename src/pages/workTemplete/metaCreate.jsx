import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtRadio } from "taro-ui";
import { connect } from "@tarojs/redux";
import Selector from "../../component/selector";
import { metaTypes } from "../../constants/dict";

@connect(
  ({}) => ({
  }),
  dispatch => ({

  })
)

class MetaCreate extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      form: {
        taskTemplateType: undefined,
        isRequired: undefined,
        metaName: undefined,
        metaType: undefined,
      },
    };
    this.config = {
      navigationBarTitleText: "元数据创建"
    };
  }

  componentDidMount() {

  }
  onTypeChange = value => {
    let form = this.state.form;
    this.onValue("metaType")(value);
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
      taskTemplateType,
      metaName,
      isRequired,
      metaType
    } = this.state.form;

    return (
      <View className="container">
        <AtForm>
          <AtInput
            name="value"
            title="模板类型"
            type="text"
            placeholder="模板类型"
            value={taskTemplateType}
            onChange={this.onValue("taskTemplateType")}
          />
          <View style={{padding: '15px'}}>是否必填:</View>
          <AtRadio
            options={[
              { label: '必须', value: '1' },
              { label: '非必须', value: '0' },
            ]}
            value={isRequired}
            onClick={this.onValue("isRequired")}
          />
          <AtInput
            name="value"
            title="数据名"
            type="text"
            placeholder="数据名"
            value={metaName}
            onChange={this.onValue("metaName")}
          />
          <Selector
            title="数据类型"
            data={metaTypes}
            value={metaType}
            placeholder="请选择数据类型"
            onChange={this.onTypeChange}
          ></Selector>

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

export default MetaCreate;
