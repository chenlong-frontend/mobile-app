import schema from 'async-validator'
import { Toast } from 'vant'
class Validator {
  constructor(rules) {
    this.validator = new schema(rules)
  }
  validate = (value, fn) => {
    this.validator
      .validate(value)
      .then(() => {
        fn(value, false)
      })
      .catch(({ fields }) => {
        const keys = Object.keys(fields)
        Toast(fields[keys[0]][0].message)
        fn(value, true)
      })
  }
}
export default Validator
