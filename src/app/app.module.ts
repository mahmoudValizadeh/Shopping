import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecpieListComponent } from './recpies/recpie-list/recpie-list.component';
import { RecpieDetailComponent } from './recpies/recpie-detail/recpie-detail.component';
import { RecpieItemComponent } from './recpies/recpie-list/recpie-item/recpie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecpiesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecpieListComponent,
    RecpieDetailComponent,
    RecpieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
