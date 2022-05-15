import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FashionsComponent } from './fashions/fashions.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsubComponent } from './products/productsub/productsub.component';
import { CounterComponent } from './products/counter/counter.component';
import { CounterchildComponent } from './products/counter/counterchild/counterchild.component';
import { SignupComponent } from './signup/signup.component';
import { LadiesComponent } from './ladies/ladies.component';
import { MensComponent } from './mens/mens.component';
import { KidsComponent } from './kids/kids.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FashionsComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    ProductsComponent,
    ProductComponent,
    ProductsubComponent,
    CounterComponent,
    CounterchildComponent,
    SignupComponent,
    LadiesComponent,
    MensComponent,
    KidsComponent,
    UserRegistrationComponent,
    AddCustomerComponent,
    CustomerReviewsComponent,
    CustomersListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
