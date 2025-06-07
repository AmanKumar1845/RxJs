import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrenment,
  reset,
  customIncrement,
  changeChannelName,
} from './counter.action';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,

  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),

  on(decrenment, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),

  on(customIncrement, (state, action) => {
    // let newCounter;
    // if (action.action == 'add') {
    //   newCounter = state.counter + action.value;
    // } else {
    //   newCounter = state.counter - action.value;
    // }
    return {
      ...state,
      // counter: newCounter
      counter: action.action =='add'? state.counter + action.value : state.counter - action.value
    };
  }),

  on(changeChannelName,(state, action)=> {
    return{
      ...state,
      channelName: action.channel
    }
  })
);


export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
