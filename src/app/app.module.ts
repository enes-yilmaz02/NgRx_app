import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule.forRoot({
      
    })
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
