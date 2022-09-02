import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeRedComponent } from './welcome-red/welcome-red.component';
import { ProdutsModule } from './produts/produts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieHerosInformationComponent } from './movie-heros-information/movie-heros-information.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DataSahreService } from './data-sahre.service';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WelcomeRedComponent,
    MovieHerosInformationComponent,
    Comp1Component,
    Comp2Component,
    UsersComponent,
    AdminsComponent,
    MyProductsComponent,
    UserInfoComponent,
    NotFoundComponent,
    UserCreationComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
