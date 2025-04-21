import { Routes } from '@angular/router';
import { OrganigramaSinprosegComponent } from '../components/organigrama-sinproseg/organigrama-sinproseg.component';
import { MisionComponent } from '../components/mision/mision.component';
import { VisionComponent } from '../components/vision/vision.component';
import { ValoresComponent } from '../components/valores/valores.component';
import { OrganigramaJdnComponent } from '../components/organigrama-jdn/organigrama-jdn.component';

export const routes: Routes = [
    { path: 'Mision', component: MisionComponent },
    { path: 'Vision', component: VisionComponent },
    { path: 'organigrama', component: OrganigramaSinprosegComponent },
    { path: 'valores', component: ValoresComponent },
    { path: 'organigrama-jdn', component: OrganigramaJdnComponent}

];
