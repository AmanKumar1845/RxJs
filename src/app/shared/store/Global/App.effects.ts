import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { emptyAction, showAlert } from "./App.action";


@Injectable()
export class AppEffects {

  private actions$ = inject(Actions);
  private _snackbar = inject(MatSnackBar)

  _showAlert = createEffect(()=>
    this.actions$.pipe(
      ofType(showAlert),
      exhaustMap((action)=> {
        return this.showShackBarAlert(action.message, action.actionResult)
        .afterDismissed()
        .pipe(
          map((id)=> {
            return emptyAction({message:action.message, })
          })
        )
      })
    )
  )


  showShackBarAlert(message:string, actionResult:string='fail') {
    let _class = actionResult == 'pass'?'green-snackbar':'red-snackbar'
    return this._snackbar.open(message,'Ok',{
      verticalPosition:'top',
      horizontalPosition:'end',
      panelClass:[_class],
      duration:3000
    })
  }
}
