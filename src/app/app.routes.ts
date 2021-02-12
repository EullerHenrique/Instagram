import { AcessoComponent } from './acesso/acesso.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './app.auth.guard';

export const ROUTES = [

  { path: '', component: AcessoComponent},
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ]}

];