import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './Parent/parent.component';
import { ChildComponent } from './Child/child.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ParentComponent, ChildComponent],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }