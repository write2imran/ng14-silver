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
        tap(logs => console.log('HTTP response:', logs)),
        map(logs => (fromLogAction.loadLogsSuccess({ logs })),
          catchError(() =>
            of({ type: '[Log Effect] Load Log Failure' }))
        ))
    )
  ));

  constructor(private actions$: Actions, private logService: LogService) { }
}
