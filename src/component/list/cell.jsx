import Taro, { Component } from "@tarojs/taro";
import { View,Text } from "@tarojs/components";
import "./cell.less";

class Cell extends Component {
  static options = {
    addGlobalClass: true
  };

  render() {
    const { title, content} = this.props
    return (
      <View className="cell">
        <View className="cell-left">{title}</View>
        <View className="cell-right">
    <Text className="cell-right-text">{content}</Text>
        </View>
      </View>
    )
  }
}

export default Cell;