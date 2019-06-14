import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainComponent } from "./main/main.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "demo",
        loadChildren: "./demo/demo.module#DemoModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
