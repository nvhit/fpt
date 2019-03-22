import { connect } from 'react-redux'
import {inputTest} from '../../actions/InputTest'
import Intro from '../../components/InputTest/Intro'

const mapStateToProps = (state) => {
  return {
    message: state.inputTest.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(inputTest())
  }
}

const InputTest = connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro)

export default InputTest
