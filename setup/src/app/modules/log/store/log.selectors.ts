import { LogState, logModuleStateFeatureKey } from './index';
import { Log } from './../models/Log';
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const selectLogsFeature = createFeatureSelector<LogState>(
    logModuleStateFeatureKey
);

export const selectLogs = createSelector(
    selectLogsFeature,
    (state: LogState) => state.logs
);

