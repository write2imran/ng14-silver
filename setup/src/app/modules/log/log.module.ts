import { LogRoutingModule } from './log-routing.module';
import { LogService } from './services/logservice.service';
import { LogListComponent } from './components/log-list/log-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    LogListComponent
  ],
  imports: [
    CommonModule,
    LogRoutingModule,
    
  ],
  providers: [LogService],
  exports: [
    LogListComponent
  ]
})
export class LogModule { }
