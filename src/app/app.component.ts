import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContentComponent } from '../components/content/content.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, NavbarComponent, FooterComponent, ContentComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectsinproseg';
}
