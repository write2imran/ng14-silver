import { selectLogs } from './../../store/log.selectors';
import { LogService } from '../../services/logservice.service';
import { LogState } from '../../store/index';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromActions from "../../store/log.actions"
import { Log } from '../../models/Log';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-xentity-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

  //logs: Log[] = [];
  logs$: Observable<Log[]>;

  constructor(private logService: LogService,
    public router: Router,
    private store: Store<LogState>) {

    //TS 2.7 either disable strictPropertyInitialization or initialize properly all variables
    this.logs$ = of([]);

  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadLogs());
    this.loadXEntities();
  }

  loadXEntities() {
    const logOberver = {
      next: (logs: Log[]) => {
        this.store.dispatch(fromActions.loadLogsSuccess({ logs: logs }));
      },
      error: (err: any) => {
        this.store.dispatch(fromActions.loadLogsFailure({ error: err }));
      }
    };
    this.logService.getLogs().subscribe(logOberver);

    //Get subscribe to latest logs data available at anytime.
    this.logs$ = this.store.pipe(select(selectLogs));
  }


  // O
  // loadXEntities() {
  //   const logOberver = {
  //     next: (logs: Log[]) => {
  //       this.store.dispatch(fromActions.loadLogsSuccess({ logs: logs }));
  //       this.logs = logs;
  //     },
  //     error: (err: any) => {
  //       this.store.dispatch(fromActions.loadLogsFailure({ error: err }));
  //     }
  //   };
  //   this.logService.getLogs().subscribe(logOberver);
  // } 

}
