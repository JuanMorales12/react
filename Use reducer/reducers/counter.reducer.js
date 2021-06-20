
import { INCREMENT,DECREMENT } from "../actions/counter.actions"
const counterInitialState = {
    counter:0
}

const counterReducer = (state=counterInitialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{counter:state.counter + action.payload}
            
        case DECREMENT:
            return{counter:state.counter - action.payload}
        default:
            return state;
    }
}


export {counterInitialState,counterReducer}