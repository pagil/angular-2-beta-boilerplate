import {Component} from 'angular2/core';
import {ShoppingListComponent} from './shopping-list-component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        This is the app component
        <shoppping-list></shoppping-list>
    `,
    directives: [ShoppingListComponent]
})
export class AppComponent {

}
