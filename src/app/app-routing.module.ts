import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { TableComponent } from './table/table.component';
import { VehicleDataComponent } from './vehicle-data/vehicle-data.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { BikesComponent } from './bikes/bikes.component';
import { RefreshComponent } from './refresh/refresh.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { ProductsComponent } from './products/products.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { BikesLogInComponent } from './bikes-log-in/bikes-log-in.component';
import { FormComponent } from './form/form.component';
import { AuthenticationGuard } from './authentication.guard';
import { UserFormComponent } from './user-form/user-form.component';
import { FormTaskComponent } from './form-task/form-task.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "", component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'data-binding', component: DataBindingComponent },
      {path:"calculator", component:CalculatorComponent},
      {path:"rectangle", component:RectangleComponent},
      {path:"circle", component:CircleComponent},
      {path:"bmi", component:BMIComponent},
      {path:"table", component:TableComponent},
      {path:"vehicle-data",component:VehicleDataComponent},
      {path:"cars", component:CarsComponent},
      {path:"myntra", component:MyntraComponent},
      {path:"bikes", component:BikesComponent},
      {path:"refresh", component:RefreshComponent},
      {path:"flipkart",component:FlipkartComponent},
      {path:"mail",component:MailComponent},
      {path:"accounts", component:AccountsComponent},
      {path:"angularMaterial", component:AngularMaterialComponent},
      {path:"products", component:ProductsComponent},
      {path:"create-bike", component:CreateBikeComponent},
      {path:"bikesLogIn", component:BikesLogInComponent},
      {path:"form", component:FormComponent},
      {path:"userForm", component:UserFormComponent},
      {path:"formtask",component:FormTaskComponent}
    ]
  },

  { path: "**", component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
