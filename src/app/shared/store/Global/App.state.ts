import { blogReducer } from "../Blog/blog.reducer";
import { counterReducer } from "../Counter/counter.reducer";
import { AppReducer } from "./App.reducer";

export const AppState = {
  counter:counterReducer,
  blog:blogReducer,
  app:AppReducer
}


