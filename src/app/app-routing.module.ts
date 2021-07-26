import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent} from 'src/app/components/sing-up/sing-up.component';
import { SingInComponent} from 'src/app/components/sing-in/sing-in.component';

const routes: Routes = [
  {path:'', redirectTo:'singin', pathMatch:'full'},
  {path:'singin', component:SingInComponent},
  {path:'singup', component: SingUpComponent},
  {path:'dashboard',
  loadChildren:()=>import('src/app/dashboard/dashboard.module').
  then(x=>x.DashboardModule)},
  {path:'**', redirectTo:'singin', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
