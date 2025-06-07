import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../Material.Module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BlogModel } from '../../shared/store/Blog/blog.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/store/Global/App.state.model';
import {
  addBlog,
  updateBlog,
} from '../../shared/store/Blog/blog.action';
import {
  getBlog,
  getBlogById,
  getBlogInfo,
} from '../../shared/store/Blog/blog.selectors';
import { loadSpinner } from '../../shared/store/Global/App.action';

@Component({
  standalone: true,
  selector: 'app-add-blog',
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css',
})
export class AddBlogComponent implements OnInit {
  blogForm!: FormGroup;

  pageTitle = '';
  editBlogId = 0;

  editData!: BlogModel;

  constructor(
    private store: Store<AppStateModel>,
    private dialogRef: MatDialogRef<AddBlogComponent>,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.blogForm = this.builder.group({
      id: this.builder.control(0),
      title: this.builder.control('', Validators.required),
      description: this.builder.control('', Validators.required),
    });

    console.log(this.data);
    this.pageTitle = this.data.title;

    if (this.data.isEdit) {
      this.editBlogId = this.data.id;
      this.store.select(getBlogById(this.editBlogId)).subscribe((_data) => {
        this.editData = _data;

        this.blogForm.setValue({
          id: this.editData.id,
          title: this.editData.title,
          description: this.editData.description,
        });
      });
    }
  }

  closePopUp() {
    this.dialogRef.close();
    console.log();
  }

  SaveBlog() {
    if (this.blogForm.valid) {
      const _blogInput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string,
      };

      this.store.dispatch(loadSpinner({ isLoaded: true }));
      setTimeout(() => {
        if (this.data.isEdit) {
          _blogInput.id = this.blogForm.value.id as number;
          this.store.dispatch(updateBlog({ blogInput: _blogInput }));
        } else {
          this.store.dispatch(addBlog({ blogInput: _blogInput }));
        }
      }, 2000);

      this.closePopUp();
    }
  }
}
