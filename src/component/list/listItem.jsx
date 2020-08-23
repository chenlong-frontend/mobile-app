import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./listitem.less";

class ListItem extends Component {
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
    const isActive = data.jobStatus === "active";
    return (
      <View className="list-item" onClick={this.onItemClick}>
        <View className="list-content">
          <View className="at-row title">
            <View className="at-col at-col-1 at-col--auto">
              <Text className="title-text">{data.jobName}</Text>
            </View>
            <View className="at-col title-right">
              <Text className={`${isActive ? "active" : ""}`}>
                {isActive ? "进行中" : "完成"}
              </Text>
            </View>
          </View>
          <View>
            <View className="at-row info">
              <View className="at-col">
                <View className="info-tilte">
                  <Text>最新进展: </Text>
                </View>
                <View>
                  <Text>最新进展</Text>
                </View>
              </View>
              <View className="at-col">
                <View>
                  <Text className="info-time">提交：{data.startDate}</Text>
                </View>
                <View>
                  <Text className="info-time">更新：{data.updateTime}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ListItem;
