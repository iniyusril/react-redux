import {combineReducers} from 'redux'

import Number from './num_reducer'
import Data from './data_reducer'

const rootReducer = combineReducers({
    Number,
    Data
})

export default rootReducer