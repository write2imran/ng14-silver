import { Log } from '../models/Log';

import { createAction, props } from '@ngrx/store';

export const loadLogs = createAction(
  '[Log] Load Log'
);

export const loadLogsSuccess = createAction(
  '[Log Effect] Load Log Success',
  props<{ logs: Log[] }>()
);

export const loadLogsFailure = createAction(
  '[Log Effect] Load Log Failure',
  props<{ error: any }>()
);
