import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../Material.Module';
import { NgIf } from '@angular/common';
import { Store } from '@ngrx/store'
import {  getSpinnerState } from '../../shared/store/Global/App.selector';


@Component({
  selector: 'app-loading-spinner',
  imports: [MaterialModule, NgIf],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent implements OnInit {


  isLoaded = false;
  constructor(private store:Store){}

  ngOnInit() {
    this.store.select(getSpinnerState).subscribe((res)=>{
      this.isLoaded = res
    })
  }
}
