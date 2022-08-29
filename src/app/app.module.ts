import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { SubUserComponent } from './sub-user/sub-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SubUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
