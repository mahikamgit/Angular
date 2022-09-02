import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{path:'', redirectTo:'users', pathMatch:'full'},
{ path: 'users', component: UsersComponent },
{ path: 'admins', component: AdminsComponent },
{ path: 'myProducts', component: MyProductsComponent },
{path:'userInfo/:username', component: UserInfoComponent},
{path:'create-user', component:UserCreationComponent},
{path:'posts', component:PostsComponent},
{path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
