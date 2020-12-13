import {INCREMENT,DECREMENT} from '../actions'

function Number(state = 2, action ){
    switch(action.type){
        case INCREMENT:
            return state + 1
        case DECREMENT :
            return state - 1
        default :
            return state
    }
}

export default Number