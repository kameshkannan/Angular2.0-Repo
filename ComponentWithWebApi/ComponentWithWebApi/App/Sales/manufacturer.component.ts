import { Component, Input} from '@angular/core';
import { Manufacturer } from '../Model/manufacturer';

@Component({
    moduleId: module.id,
    selector: 'manufacturer',
    templateUrl: 'manufacturer.component.html'
})

export class ManufacturerComponent {
    @Input() list: Manufacturer[];
}