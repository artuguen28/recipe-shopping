import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent {
    
    @Output() event = new EventEmitter<number>();

    collapsed: boolean = false;

    loadRecipes() {
        this.event.emit(0);
    }

    loadShopping() {
        this.event.emit(1);
    }
}