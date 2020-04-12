import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem, AtTabs, AtTabsPane } from "taro-ui"

class List extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [{ title: '我待办的' }, { title: '我发起的' }]
    }
    this.config = {
      navigationBarTitleText: "工单列表",
    };
  }

  onTabChange (value) {
    this.setState({
      current: value
    })
  }

  render() {
    const {tabList} = this.state
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.onTabChange.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <AtList>
            <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
            <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
            <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
            <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
            <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
          </AtList>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <AtList>
            <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
            <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
            <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
            <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
            <AtListItem title='工单名称' extraText='2020-01-02' note='描述信息' />
          </AtList>
        </AtTabsPane>
      </AtTabs>
    )
  }
}

export default List;