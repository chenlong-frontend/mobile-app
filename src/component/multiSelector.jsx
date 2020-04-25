import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtCheckbox } from "taro-ui";
import "./style/multiSelector.less";

class MultiSelector extends Component {
  handleChange(value) {
    this.props.onChange(value);
  }
  render() {
    const { title, data, value } = this.props;
    return (
      <View className="my-input">
        <View className="my-input__container">
          <Text className="my-input__title">{title}</Text>
          <View>
            <AtCheckbox
              options={data}
              selectedList={value}
              onChange={this.handleChange.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default MultiSelector;
