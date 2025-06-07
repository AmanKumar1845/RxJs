import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel, Blogs2 } from "./blog.model";

const getBlogState = createFeatureSelector<Blogs2>('blog')

export const getBlog = createSelector(getBlogState, (state)=>{
  return state.blogList
})


export const getBlogById = (blogId:number) => createSelector(getBlogState, (state)=>{
  return state.blogList.find((blog:BlogModel)=> blog.id === blogId) as BlogModel
})


export const getBlogInfo = createSelector(getBlogState, (state)=> {
  return state
})

// export const getSpinner = createSelector(getBlogState, (state)=> {
//   return state.isLoaded
// })
