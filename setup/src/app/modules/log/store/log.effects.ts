import * as fromLogAction from "../store/log.actions"
import { LogService } from './../services/logservice.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';



@Injectable()
export class LogEffects {

  loadLogs$ = createEffect(() => this.actions$.pipe(
    ofType(fromLogAction.loadLogs),
    mergeMap(() =>
      this.logService.getLogs().pipe(
        map(logs => (fromLogAction.loadLogsSuccess({ logs }))),
        catchError((error) => of({ type: '[Log Effect] Load Log Failure', error: error }))
      )
    )
  ));

  constructor(private actions$: Actions, private logService: LogService) { }
}
