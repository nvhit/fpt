import { combineReducers } from 'redux'
import { INPUT_TEST } from '../../actions/InputTest'
import ContentTest from '../../components/InputTest/ContentTest.js'


let initialState = { message: 'Đây là trang kiểm tra đầu vào cho người dùng, dựa vào kết quả này có phân chia người dùng vào các cấp độ khác nhau' }

let inputTest = (state=initialState, action) => {
    switch (action.type) {
      case INPUT_TEST:
        return Object.assign({}, state, { message:ContentTest()})
      default:
      return state = initialState 
    }
  }

  let inputReducers = combineReducers({
    inputTest
  })
  
  export default inputReducers
  