import { LogService } from '../../services/logservice.service';
import { Log } from '../../models/Log';
import { LogState } from '../../store/index';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromActions from "../../store/log.actions"

@Component({
  selector: 'app-xentity-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

  logs: Log[] = [];

  constructor(private logService: LogService,
    public router: Router,
    private store: Store<LogState>) { }

  ngOnInit(): void {

    this.store.dispatch(fromActions.loadLogs());

    this.loadXEntities();
  }

  loadXEntities() {
    const logOberver = {
      next: (logs: Log[]) => {
        this.store.dispatch(fromActions.loadLogsSuccess({ logs: logs }));
        this.logs = logs
        console.log("Success")
        console.log(logs);
      },
      error: (err: any) => {
        this.store.dispatch(fromActions.loadLogsFailure({ error: err }));
        console.log("Failure")
        console.log(err)
      }
    };

    this.logService.getLogs().subscribe(logOberver);
  }

}
