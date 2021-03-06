import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FashionsComponent } from './fashions/fashions.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LadiesComponent } from './ladies/ladies.component';
import { LoginComponent } from './login/login.component';
import { MensComponent } from './mens/mens.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';


const routes: Routes = [
  {path :'', component:LoginComponent},
  {path : 'home',component : HomeComponent},
  {path:'contact',component : ContactComponent},
  {path : 'fashions', component : FashionsComponent},
  {path : 'about', component : AboutComponent},
  {path : 'login' , component : LoginComponent},
  {path:'products',component : ProductsComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'ladies', component : LadiesComponent},
  {path : 'mens', component : MensComponent},
  {path : 'kids' , component : KidsComponent},
  {path : 'connect', component : UserRegistrationComponent},
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/:id', component: CustomerReviewsComponent },
  { path: 'add', component: AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
