import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuheaderComponent } from './component/menuheader/menuheader.component';
import { LoadingSpinnerComponent } from './component/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuheaderComponent, LoadingSpinnerComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {}

