import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
  providers: []
})
export class DashboardModule{

}
