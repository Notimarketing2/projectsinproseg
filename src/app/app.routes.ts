import { Routes } from '@angular/router';
import { OrganigramaSinprosegComponent } from '../components/organigrama-sinproseg/organigrama-sinproseg.component';
import { MisionComponent } from '../components/mision/mision.component';
import { VisionComponent } from '../components/vision/vision.component';
import { ValoresComponent } from '../components/valores/valores.component';
import { OrganigramaJdnComponent } from '../components/organigrama-jdn/organigrama-jdn.component';
import { ConsultoriaComponent } from '../components/consultoria/consultoria.component';
import { ComunicadosComponent } from '../components/comunicados/comunicados.component';
import { EstatutosComponent } from '../components/estatutos/estatutos.component';
import { CursosComponent } from '../components/cursos/cursos.component';
import { ActividadesComponent } from '../components/actividades/actividades.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { MiembrosJdnComponent } from '../components/miembros-jdn/miembros-jdn.component';
import { CaribeComponent } from '../components/caribe/caribe.component';
import { PacificoComponent } from '../components/pacifico/pacifico.component';
import { AndinaComponent } from '../components/andina/andina.component';
import { OrinoquiaComponent } from '../components/orinoquia/orinoquia.component';
import { AmazoniaComponent } from '../components/amazonia/amazonia.component';
import { CoopserparComponent } from '../components/coopserpar/coopserpar.component';
import { HazParteComponent } from '../components/haz-parte/haz-parte.component';

export const routes: Routes = [
    { path:'',redirectTo:'organigrama', pathMatch: 'full' },
    { path: 'Mision', component: MisionComponent },
    { path: 'Vision', component: VisionComponent },
    { path: 'organigrama', component: OrganigramaSinprosegComponent },
    { path: 'valores', component: ValoresComponent },
    { path: 'organigrama-jdn', component: OrganigramaJdnComponent},
    { path: 'miembros-jdn', component: MiembrosJdnComponent},
    { path: 'consultoria', component: ConsultoriaComponent},
    { path: 'comunicados', component: ComunicadosComponent},
    { path: 'estatutos', component: EstatutosComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'actividades', component: ActividadesComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'caribe', component: CaribeComponent },
    { path: 'pacifico', component: PacificoComponent},
    { path: 'andina', component: AndinaComponent},
    { path: 'orinoquia', component: OrinoquiaComponent},
    { path: 'amazonia', component: AmazoniaComponent},
    { path: 'coopserpar', component: CoopserparComponent},
    { path: 'haz-parte-de-sinproseg', component: HazParteComponent},
];
