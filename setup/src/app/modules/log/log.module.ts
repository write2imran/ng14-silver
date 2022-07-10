import { LogRoutingModule } from './log-routing.module';
import { LogService } from './services/logservice.service';
import { LogListComponent } from './components/log-list/log-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import * as fromLogState from './store';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogListComponent
  ],
  imports: [
    CommonModule,
    LogRoutingModule,
    FormsModule,
    StoreModule.forFeature(
      fromLogState.logModuleStateFeatureKey,
      fromLogState.reducers,
      { metaReducers: fromLogState.metaReducers })
  ],
  providers: [LogService],
  exports: [
    LogListComponent
  ]
})
export class LogModule { }
