import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getShoppingList } from './store/shopping-list.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor(private store: Store) {}

  ingredients$ = this.store.pipe(select(getShoppingList));
}
