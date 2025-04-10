import { Routes } from '@angular/router';
import { OrganigramaSinprosegComponent } from '../components/organigrama-sinproseg/organigrama-sinproseg.component';
import { AppComponent } from './app.component';
import { MisionComponent } from '../components/mision/mision.component';
import { VisionComponent } from '../components/vision/vision.component';

export const routes: Routes = [
    { path: 'organigrama', component: OrganigramaSinprosegComponent },
    { path: 'Mision', component: MisionComponent },
    { path: 'Vision', component: VisionComponent },
    { path: '**', redirectTo: 'organigrama',pathMatch: 'full' }
];
