import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuienesSomosComponent } from '../quienes-somos/quienes-somos.component';

@Component({
  selector: 'app-content',
  imports: [QuienesSomosComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
