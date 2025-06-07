import { createReducer, on } from "@ngrx/store";
import { globalState } from "./Global.state";
import { loadSpinner } from "./App.action";



const _appReducer = createReducer(
  globalState,

  on(loadSpinner,(state,action) => {
    return {
      ...state,
      isLoaded: action.isLoaded
    }
  })
)

export function AppReducer(state: any, action: any) {
  return _appReducer(state, action);
}
