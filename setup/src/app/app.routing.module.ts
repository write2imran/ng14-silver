import { HomeComponent } from './common/components/home/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "logs",
    loadChildren: () => import("./modules/log/log.module").then(x => x.LogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
