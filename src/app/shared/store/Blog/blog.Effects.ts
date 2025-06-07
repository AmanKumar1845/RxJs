import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import {
  addBlog,
  addBlogSuccess,
  deleteBlog,
  deleteBlogSuccess,
  LOAD_BLOG,
  loadBlogFailure,
  loadBlogSuccess,
  updateBlog,
  updateBlogSuccess,
} from './blog.action';
import { of, catchError, exhaustMap, map, switchMap } from 'rxjs';
import {  loadSpinner, showAlert } from '../Global/App.action';

@Injectable()
export class BlogEffects {
  private actions$ = inject(Actions);
  private service = inject(MasterService);

  _blog = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_BLOG),
      exhaustMap(() => {
        return this.service.GetAllBlogs().pipe(
          map((data) => {
            return loadBlogSuccess({ blogList: data });
          }),
          catchError((_error) => of(loadBlogFailure({ errorText: _error }), loadSpinner({isLoaded:false})))
        );
      })
    )
  );


  _AddBlog = createEffect(() =>
  this.actions$.pipe(
    ofType( addBlog ),
    switchMap(( action ) =>
       this.service.createBlogs( action.blogInput ).pipe(
        switchMap(data => of(
          addBlogSuccess({ blogInput: data }),
          loadSpinner({isLoaded:false}),
          showAlert({message:'Blog Added Successfully',actionResult:'pass'})
        )),
        catchError((_error) => of(showAlert ({message:'Failed to Create a Blog', actionResult:'fail'}),loadSpinner({isLoaded:false})))))
      )
    )

  _updateBlog = createEffect(()=>
    this.actions$.pipe(
      ofType( updateBlog ),
      switchMap(( action ) =>
        this.service.updateBlog( action.blogInput ).pipe(
          switchMap( res => of(
            updateBlogSuccess({ blogInput:action.blogInput }),
            loadSpinner({isLoaded:false}),
            showAlert({message:'Updated Successfully',actionResult:'pass'})
          )),
          catchError(( _error ) => of(showAlert
            ({message:'Updated Failed - Due to '+_error.message, actionResult:'fail'}),loadSpinner({isLoaded:false})))
        )
      )
    )
  )


  _deleteBlog = createEffect(() =>
    this.actions$.pipe(
      ofType( deleteBlog ),
      switchMap(( action ) =>
        this.service.deleteBlog(action.id).pipe(
          switchMap(res => of(
            deleteBlogSuccess({id:action.id}),
            loadSpinner({isLoaded:false}),
            showAlert({message:'Deleted Successfully',actionResult:'pass'})
          )),
          catchError(( _error ) => of(showAlert
            ({message:'Failed to Delete a Blog', actionResult:'fail'}),loadSpinner({isLoaded:false})))
        )
      )
    )
  )
}



// _AddBlog = createEffect(()=>
  //   this.actions$.pipe(
  //     ofType(addBlog),
  //     exhaustMap((action => {
  //       return this.service.createBlogs(action.blogInput).pipe(
  //         map((data:any)=>{
  //           return addBlogSuccess({blogInput:{...action.blogInput, id:Number(data.id)}})
  //         }),
  //         catchError((_error) => of(loadBlogFailure({ errorText: _error })))
  //       )
  //     })
  //   )
  // ));
