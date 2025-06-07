import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModle } from '../../shared/store/Counter/counter.model';
import { Subscription, Observable} from 'rxjs';
import { CommonModule } from '@angular/common';
import { getCounter } from '../../shared/store/Counter/counter.selector';
import { AppStateModel } from '../../shared/store/Global/App.state.model';



@Component({
  selector: 'app-counter-display',
  imports: [CommonModule],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css'
})
export class CounterDisplayComponent implements OnInit, OnDestroy{

  constructor( private store: Store<AppStateModel>){}

  channelName!:string
  counterDisplay!: number
  counterSubscribe!: Subscription
  counter$!: Observable<CounterModle>

  ngOnInit() {
    this.counterSubscribe = this.store.select(getCounter).subscribe(data => {
      this.counterDisplay = data
      // this.channelName = data.channelName
      console.log('Counter Display');
    })
    // this.counter$ = this.store.select('counter')
  }

  ngOnDestroy() {
    if(this.counterSubscribe){
      this.counterSubscribe.unsubscribe()
    }
  }

}
