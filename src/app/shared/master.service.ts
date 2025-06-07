import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/Blog/blog.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MasterService {
  constructor(private http: HttpClient) {}
  haveAccess() {
    return true;
  }

  GetAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>('http://localhost:3000/Blogs');
  }

  createBlogs(blogInput: BlogModel) {
    const { title, description } = blogInput;
    return this.http.post<BlogModel>('http://localhost:3000/Blogs',{title, description});
  }

  updateBlog(blogInput: BlogModel) {
    return this.http.put('http://localhost:3000/Blogs/'+blogInput.id, blogInput)
  }

  deleteBlog( blogId: number ) {
    return this.http.delete('http://localhost:3000/Blogs/'+blogId)
  }
}













 // createBlogs(blogInput:BlogModel){
  //   return this.http.post("http://localhost:3000/Blogs",blogInput)
  //   .pipe(tap(()=> {
  //     this.http.get<BlogModel>("http://localhost:3000/Blogs?_limit=1&_sort=id&_order=desc")
  //   }))
  // }
