import { createStore } from "redux";

const initialState = {counter : 0, showCounter : false}
const CounterReducer = (state = initialState,action) => {
    if(action.type === 'increment'){
        return {
            counter : state.counter + 1,
            showCounter : state.showCounter
        }
    }
    if(action.type === 'decrement'){
        return {
            counter : state.counter - 1,
            showCounter : state.showCounter
        }
    }
    if(action.type === 'increase'){
        return {
            counter : state.counter + action.value,
            showCounter : state.showCounter
        }
    }

    if(action.type === 'toggle'){
        return {
            counter : state.counter,
            showCounter : !state.showCounter
        }
    }

    if(action.type === 'reset'){
        return {
            counter : initialState.counter,
            showCounter : state.showCounter
        }
    }
    return state;
}
const CounterStore = createStore(CounterReducer);

export default CounterStore;