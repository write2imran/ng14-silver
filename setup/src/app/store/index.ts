import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface AppRootState {

}

export const reducers: ActionReducerMap<AppRootState> = {

};


export const metaReducers: MetaReducer<AppRootState>[] = !environment.production ? [] : [];
