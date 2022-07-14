import { LogService } from '../../services/logservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
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
    public router: Router  ) {

    //TS 2.7 either disable strictPropertyInitialization or initialize properly all variables
    this.logs$ = of([]);

  }

  ngOnInit(): void {

    this.loadXEntities();
  }

  loadXEntities() {

  }




}
