import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";

export const LOAD_BLOG = '[Blog] Load Blogs'
export const loadBlog = createAction(LOAD_BLOG)

export const LOAD_BLOG_SUCCESS = '[blog page] load blog success'
export const loadBlogSuccess = createAction(LOAD_BLOG_SUCCESS,props<{blogList:BlogModel[]}>())

export const LOAD_BLOG_FAILURE = '[blog page] load blog failure'
export const loadBlogFailure = createAction(LOAD_BLOG_FAILURE,props<{errorText:any}>())

export const ADD_BLOG = '[blog page] add blog'
export const addBlog =  createAction(ADD_BLOG,props<{blogInput: BlogModel}>())

export const ADD_BLOG_SUCCESS = '[blog page] add blog success'
export const addBlogSuccess =  createAction(ADD_BLOG_SUCCESS,props<{blogInput: BlogModel}>())

export const UPDATE_BLOG = '[blog page] update blog '
export const updateBlog =  createAction(UPDATE_BLOG,props<{blogInput: BlogModel}>())

export const UPDATE_BLOG_SUCCESS = '[blog page] update blog success'
export const updateBlogSuccess =  createAction(UPDATE_BLOG_SUCCESS,props<{blogInput: BlogModel}>())

export const DELETE_BLOG = '[blog page] delete blog'
export const deleteBlog =  createAction(DELETE_BLOG,props<{id:number}>())

export const DELETE_BLOG_SUCCESS = '[blog page] delete blog success'
export const deleteBlogSuccess =  createAction(DELETE_BLOG_SUCCESS,props<{id:number}>())



