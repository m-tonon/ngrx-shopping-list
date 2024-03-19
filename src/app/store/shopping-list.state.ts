export interface IShoppingListItem {
  id: string;
  name: string;
  quantity: number;
}

export interface IShoppingListState {
  entities: IShoppingListItem[];
  isLoading: boolean;
}