import { createReducer, on } from '@ngrx/store';

import { loadLogsSuccess, loadLogsFailure } from './log.actions';
import { initialState } from '.';

export const reducers = createReducer(
    initialState,

    on(loadLogsSuccess, (state, action) => {
        return { logs: action.logs, error: undefined };
    }),

    on(loadLogsFailure, (state, action) => {
        return { logs: state.logs, error: action.error };
    })
);

