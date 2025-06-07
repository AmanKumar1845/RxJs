import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {increment, decrenment, reset, changeChannelName } from '../../shared/store/Counter/counter.action';
// import { CounterModle } from '../../shared/store/Counter/counter.model';
import { AppStateModel } from '../../shared/store/Global/App.state.model';
import { MaterialModule } from '../../../Material.Module';
// import { MaterialModule } from '../../../Material.Module';


@Component({
  selector: 'app-counter-button',
  imports: [MaterialModule],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {

  constructor(private store: Store<AppStateModel>){}
  onIncrement(){
    this.store.dispatch(increment())
  }

  onDecrement(){
    this.store.dispatch(decrenment())
  }

  onReset(){
    this.store.dispatch(reset())
  }

  onRename(){
    this.store.dispatch(changeChannelName({channel:'Welcome To Lucifer Gaming'}))
  }
}
