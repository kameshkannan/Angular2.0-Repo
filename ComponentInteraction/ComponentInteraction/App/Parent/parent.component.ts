import { Component, Input, OnInit } from '@angular/core';
import { client } from '../Model/client';

@Component({
    moduleId: module.id,
    selector: 'parent-comp',
    templateUrl: 'parent.component.html'
})

export class ParentComponent {
    public data: client = { name: "Jk Associates", address: "Horrat Ter", city: "Fremont" }; 

    constructor() {
    }
    
    NgOnInit() {
    }
    
}