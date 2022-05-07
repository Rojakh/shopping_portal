import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FashionsComponent } from './fashions/fashions.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home',component : HomeComponent},
  {path:'contact',component : ContactComponent},
  {path : 'footer', component : FooterComponent},
  {path : 'fashions', component : FashionsComponent},
  {path : 'about', component : AboutComponent},
  {path : 'login' , component : LoginComponent},
  {path:'products',component : ProductsComponent},
  {path : 'signup', component : SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
