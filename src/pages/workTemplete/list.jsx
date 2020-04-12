import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem } from "taro-ui"

class List extends Component {
  constructor () {
    super(...arguments)
    this.config = {
      navigationBarTitleText: "工作流模板列表",
    };
  }

  render() {
    return (
      <AtList>
        <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
        <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
        <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
        <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
        <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
      </AtList>
    )
  }
}

export default List;