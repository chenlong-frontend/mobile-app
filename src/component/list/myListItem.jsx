import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./myListItem.less";

class MyListItem extends Component {
  static options = {
    addGlobalClass: true
  };
  onItemClick = () => {
    const { onClick, data } = this.props;
    onClick && onClick(data);
  };
  render() {
    const { data } = this.props;
    if (!data) return;
    return (
      <View className="mylist-item" onClick={this.onItemClick}>
        <View className="mylist-content">
          <View className="at-row">
            <View className="at-col at-col-1 at-col--auto">
              <Text className="tilte-text">任务流程: </Text>
              <Text className="tilte-text-primary">确认订单</Text>
            </View>
            <View className="at-col right">
              <Text className="status">待提交</Text>
            </View>
          </View>
          <View className="at-row">
            <View className="at-col at-col-1 at-col--auto">
              <Text className="content">{data.jobName}</Text>
            </View>
            <View className="at-col right">
              <Text className="time">2020/4/28 18:23:30</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default MyListItem;
