import {Component} from "angular2/core"

@Component({
  selector: "shoppping-list",
  template: `
    <ul>
      <li
      *ngFor="#shoppingListItem of shoppingListItems"
      (click)="onItemClicked(shoppingListItem)"
      >{{shoppingListItem.name}}</li>
    </ul>
    <input type="text" [(ngModel)]="selectedItem.name">
    <button (click)="onDeleteItem()">Delete Item</button><br><br>
    <input type="text" #shoppingListItem>
    <button (click)="onAddItem(shoppingListItem)">Add Item</button>
  `
})
export class ShoppingListComponent {
  public shoppingListItems = [
    {name: 'milk'},
    {name: 'shugar'},
    {name: 'bread'}
  ];
  public selectedItem = {name: ""};

  onItemClicked(shoppingListItem) {
      this.selectedItem = shoppingListItem;
  }

  onAddItem(shoppingListItem) {
      this.shoppingListItems.push({name: shoppingListItem.value});
  }

  onDeleteItem() {
    this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
  }
}
