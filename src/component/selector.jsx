import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import "./style/selector.less";

class Selector extends Component {
  onChange = (v) => {
    const { onChange, data } = this.props;
    const key = v.detail.value;
    onChange && onChange(data[key].value);
  };

  render() {
    const { data, placeholder, title, value } = this.props;
    const showData = data ? data.map((v) => v.text) : [];
    const selectItemArr = data
      ? data.filter((v) => {
          return v.value === value;
        })
      : [];
    const selectItem = selectItemArr.length > 0 ? selectItemArr[0].value : "";
    const showItem =data ? data.filter(v => v.value === value) : [];
    return (
      <Picker mode="selector" range={showData} onChange={this.onChange}>
        <View className="my-input">
          <View className="my-input__container">
            <Text className="my-input__title">{title}</Text>
            <View>
              <View className="picker">
                {showItem.length > 0 ? showItem[0].text : placeholder}
              </View>
            </View>
          </View>
        </View>
      </Picker>
    );
  }
}

export default Selector;
