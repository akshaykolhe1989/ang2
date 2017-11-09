import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list.component';



@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent
    ],
    imports: [
        BrowserModule
        //HttpClientModule
    ],
    bootstrap: [AppComponent,ProductListComponent]

})
export class AppModule{ }