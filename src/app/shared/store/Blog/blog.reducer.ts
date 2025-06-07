import { createReducer, on } from '@ngrx/store';
import { BlogState } from './blog.state';

import {
  addBlogSuccess,
  deleteBlogSuccess,
  loadBlog,
  loadBlogFailure,
  loadBlogSuccess,
  // loadSpinner,
  updateBlogSuccess
} from './blog.action';


const _blogReducer = createReducer(
  BlogState,

  on(loadBlog, (state) => {
    return {
      ...state,
      isLoaded: false
    };
  }),

  on(loadBlogSuccess, (state, action) => {
    return {
      ...state,
      blogList: [...action.blogList],
      errorMessage: '',
      isLoaded: false
    };
  }),

  on(loadBlogFailure, (state, action) => {
    console.log(action.errorText);

    return {
      ...state,
      blogList: [],
      errorMessage: action.errorText.message,
      // isLoaded: false
    };
  }),


  on(addBlogSuccess, (state, action) => {
    const _blog = { ...action.blogInput };
    return {
      ...state,
      blogList: [...state.blogList, _blog],
      // isLoaded: false
    };
  }),


  on(updateBlogSuccess, (state, action) => {
    const _blog = { ...action.blogInput };

    const updatedBlog = state.blogList.map((blog) => {
      return _blog.id === blog.id ? _blog : blog;
    });

    return {
      ...state,
      blogList: updatedBlog,
      // isLoaded: false
    };
  }),

    on(deleteBlogSuccess, (state, action) => {
    return {
      ...state,
      blogList: state.blogList.filter((data) => data.id !== action.id),
      // isLoaded: false
    };
  }),


  // on(loadSpinner,(state,action) => {
  //   // const _load = action.isLoaded
  //   return {
  //     ...state,
  //     isLoaded: action.isLoaded
  //   }
  // })

);





export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}




  // on(deleteBlog, (state, action) => {
  //   const updatedBlog = state.blogList.filter((data: BlogModel) => {
  //     return data.id !== action.id;
  //   });

  //   return {
  //     ...state,
  //     blogList: updatedBlog,
  //   };
  // }),

// on(addBlog,(state, action) => {
  //   const _blog = { ...action.blogInput }
  //   _blog.id = state.blogList.length + 1

  //   return {
  //     ...state,
  //     blogList:[...state.blogList, _blog]
  //   }
  // }),
