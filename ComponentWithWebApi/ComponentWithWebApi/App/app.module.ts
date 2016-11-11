import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './Sales/product.component';
import { ManufacturerComponent } from './Sales/manufacturer.component';

import { DataService } from './Service/data.service';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, ProductComponent, ManufacturerComponent],
    providers: [DataService],
    bootstrap: [AppComponent]
})

export class AppModule { }