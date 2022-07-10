import { environment } from '../../../../environments/environment';
import { Log } from './../models/Log';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }


  createLog(model: Log) {
    return this.http.post(this.baseUrl, model);
  }

  getLogs(): Observable<Log[]> {
    return this.http.get<Log[]>(this.baseUrl + "logs");
  }

  getLog(LogId: string): Observable<Log> {
    return this.http.get<Log>(this.baseUrl + LogId);
  }






}
