import { Component } from '@angular/core';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CounterDisplayComponent } from '../counter-display/counter-display.component';
import { CustomcounterComponent } from '../customcounter/customcounter.component';

@Component({
  selector: 'app-counter',
  imports: [CounterButtonComponent,CounterDisplayComponent,CustomcounterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

}
