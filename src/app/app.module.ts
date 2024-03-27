import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { TableComponent } from './table/table.component';
import { VehicleDataComponent } from './vehicle-data/vehicle-data.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { BikesComponent } from './bikes/bikes.component';
import { HttpClientModule } from '@angular/common/http';
import { RefreshComponent } from './refresh/refresh.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ReloadActivityComponent } from './reload-activity/reload-activity.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatBadgeModule} from '@angular/material/badge';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatCommonModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { ProductsComponent } from './products/products.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { BikesLogInComponent } from './bikes-log-in/bikes-log-in.component';
import { FormComponent } from './form/form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormTaskComponent } from './form-task/form-task.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    DataBindingComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    TableComponent,
    VehicleDataComponent,
    CarsComponent,
    MyntraComponent,
    BikesComponent,
    RefreshComponent,
    FlipkartComponent,
    MailComponent,
    ReloadActivityComponent,
    AccountsComponent,
    AngularMaterialComponent,
    BottomSheetComponent,
    ProductsComponent,
    CreateBikeComponent,
    BikesLogInComponent,
    FormComponent,
    UserFormComponent,
    FormTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
