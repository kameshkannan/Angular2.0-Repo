import { Component, Input } from '@angular/core';
import { client } from '../Model/client';

@Component({
    moduleId: module.id,
    selector: 'child-comp',
    templateUrl: 'child.component.html'
})

export class ChildComponent {
    @Input() parentData: client; 
}