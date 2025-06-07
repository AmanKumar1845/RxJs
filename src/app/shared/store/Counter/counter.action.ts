import { createAction, props } from "@ngrx/store"

//For creating the action we have to use this keyword createAction

export const increment = createAction("increment")
export const decrenment = createAction("decrenment")
export const reset = createAction("reset")
export const customIncrement = createAction('customIncrement',props <{ value:number, action: string }>())
export const changeChannelName = createAction('changeChannelName',props <{channel: string}>() )
