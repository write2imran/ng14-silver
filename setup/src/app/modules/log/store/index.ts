import { loadLogsSuccess, loadLogsFailure } from './log.actions';
import { Log } from './../models/Log';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

export const logModuleStateFeatureKey = 'LogState';

export interface LogState {
  logs: Log[];
  error: any;
}

export const initialState: LogState = {
  logs: [],
  error: undefined
}

export const metaReducers: MetaReducer<LogState>[] = !environment.production ? [] : [];
