import { Log } from '../models/Log';

import { createAction, props } from '@ngrx/store';

export const loadLogs = createAction(
  '[XEntity] Load XEntity'
);

export const loadLogsSuccess = createAction(
  '[XEntity] Load XEntitys Success',
  props<{ logs: Log[] }>()
);

export const loadLogsFailure = createAction(
  '[XEntity] Load XEntitys Failure',
  props<{ error: any }>()
);
