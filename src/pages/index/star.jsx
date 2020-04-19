import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem } from "taro-ui"
import { connect } from '@tarojs/redux'
import { getJobByStarAction } from '../../actions/taskAction'

@connect(({ task:{starList} }) => ({
  starList
}), (dispatch) => ({
  onTaskStar () {
    dispatch(getJobByStarAction())
  },
}))
class StarList extends Component {
  componentDidMount () {
    this.props.onTaskStar();
  }
  render() {
    const {starList} = this.props;
    return (
      <AtList>
          {
            starList.map(v => (<AtListItem key={v.jobCode} title={v.jobName} extraText={v.deadLine} note={v.jobDes} />))
          }
      </AtList>
    )
  }
}

export default StarList;