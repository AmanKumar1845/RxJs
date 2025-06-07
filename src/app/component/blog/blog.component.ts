import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs2 } from '../../shared/store/Blog/blog.model';
import { getBlog, getBlogInfo } from '../../shared/store/Blog/blog.selectors';
import { MaterialModule } from '../../../Material.Module';
import { NgFor, NgIf } from '@angular/common';
import { AppStateModel } from '../../shared/store/Global/App.state.model';
import { MatDialog } from '@angular/material/dialog';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import {
  deleteBlog,
  loadBlog,
} from '../../shared/store/Blog/blog.action';
import { loadSpinner } from '../../shared/store/Global/App.action';

@Component({
  selector: 'app-blog',
  imports: [MaterialModule, NgFor, NgIf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {}

  blogList!: BlogModel[];
  blogInfo!: Blogs2;

  ngOnInit() {
    this.store.dispatch(loadSpinner({ isLoaded: true }));
    setTimeout(() => {
      this.store.dispatch(loadBlog());
       this.store.dispatch(loadSpinner({ isLoaded: false }));
    }, 2000);

    this.store.select(getBlogInfo).subscribe((item) => {
      this.blogInfo = item;
    });
  }

  AddBlog() {
    this.openPopUp(0, 'Add Blog');
  }

  editBlog(id: any) {
    this.openPopUp(id, 'Edit Blog', true);
  }

  removeBlog(id: any) {
    console.log(id);
    if (confirm('Are you sure want to remove?')) {
      this.store.dispatch(loadSpinner({ isLoaded: true }));
      setTimeout(() => {
        this.store.dispatch(deleteBlog({ id: id }));
      }, 2000);
    }
  }


  openPopUp(id: number, title: string, isEdit: boolean = false) {
    this.dialog.open(AddBlogComponent, {
      width: '50%',
      data: {
        id: id,
        title: title,
        isEdit: isEdit,
      },
    });
  }
}
