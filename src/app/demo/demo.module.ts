import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [CommonModule, SharedModule, DemoRoutingModule],
  declarations: [DemoComponent],
})
export class DemoModule { }
