import { createReducer, on } from '@ngrx/store';
import { IShoppingListState } from './shopping-list.state';
import * as actions from './shopping-list.actions';

export const initialState: IShoppingListState = {
  entities: [{
    id: '1',
    name: 'Milk',
    quantity: 2,
  }],
  isLoading: false,
};

export const shoppingListReducer = createReducer(
  initialState,
  on(actions.loadShoppingList, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(actions.loadShoppingListSuccess, (state, { entities }) => ({
    ...state,
    entities,
    isLoading: false,
  })),
  on(actions.loadShoppingListError, (state) => ({
    ...state,
    isLoading: false,
  }))
);
