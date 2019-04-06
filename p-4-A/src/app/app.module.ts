import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

@NgModule({
    bootstrap:[AppComponent],
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent
    ]
})
export class AppModule{}