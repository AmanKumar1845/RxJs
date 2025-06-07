import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModle } from "./counter.model";

const getCounterState = createFeatureSelector<CounterModle>('counter')

export const getCounter = createSelector(getCounterState, (state)=>{
  return state.counter;
})

export const getChannel = createSelector(getCounterState, (state)=>{
  return state.channelName;
})
