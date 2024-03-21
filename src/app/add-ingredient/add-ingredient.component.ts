import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import { IShoppingListState } from '../store/shopping-list.state';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrl: './add-ingredient.component.scss',
})
export class AddIngredientComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  constructor(
    private store: Store<{ shoppingList: IShoppingListState }>,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      quantity: [null],
    });
  }

  addIngredient() {
    const { name, quantity } = this.form.value;

    this.store.dispatch(
      ShoppingListActions.addIngredient({
        entities: {
          id: new Date().getTime().toString(),
          name: name,
          quantity: quantity,
        },
      })
    );
  }
}
