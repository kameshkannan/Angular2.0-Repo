import { Component, OnInit } from '@angular/core';

import { DataService } from './Service/data.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    uiData: any;
    clicked: boolean = true;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.getUiData(); 
    }

    getUiData(): void {
        this.dataService.getUiData().subscribe(a => this.uiData = a);
    }
    setClicked(): void {
        this.clicked = !this.clicked;
    }
}