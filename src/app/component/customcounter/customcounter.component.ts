import { Component, NgModule, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../shared/store/Counter/counter.action';
import { FormsModule } from '@angular/forms';
import { CounterModle } from '../../shared/store/Counter/counter.model';
import { Subscription } from 'rxjs';
import { Observable } from 'redux';
import { getChannel } from '../../shared/store/Counter/counter.selector';
import { AppStateModel } from '../../shared/store/Global/App.state.model';
import { MaterialModule } from '../../../Material.Module';

@Component ({
  selector: 'app-customcounter',
  imports: [FormsModule, MaterialModule],
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css',
})

export class CustomcounterComponent implements OnInit{

  counterInput!: number;
  actionType = 'add'
  channelName = 'Lucifer Gaming'
  counterSubscribe!: Subscription

  counter$!:Observable<CounterModle>

  constructor(private store: Store<AppStateModel>) {}

  ngOnInit() {
     this.counterSubscribe = this.store.select(getChannel).subscribe(data => {
     this.channelName = data
     console.log('Custom counter');
    })
  }

  onCustomIncrement() {
    this.store.dispatch(customIncrement({value: +this.counterInput, action: this.actionType}))
    this.counterInput = 0
  }
}
