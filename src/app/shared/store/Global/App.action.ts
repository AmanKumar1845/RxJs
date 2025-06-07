import { createAction, props } from "@ngrx/store"

export const SHOW_ALERT = '[app event] show alert'
export const showAlert = createAction(SHOW_ALERT,props<{message:string, actionResult:string}>())

export const emptyAction = createAction('emptyAction',props<{message:string, }>())


export const LOAD_SPINNER = '[blog page] spinner blog'
export const loadSpinner =  createAction(LOAD_SPINNER,props<{isLoaded:boolean}>())
