import { Component } from '@angular/core';
import { MaterialModule } from '../../../Material.Module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menuheader',
  imports: [MaterialModule, RouterLink],
  templateUrl: './menuheader.component.html',
  styleUrl: './menuheader.component.css'
})
export class MenuheaderComponent {

}
