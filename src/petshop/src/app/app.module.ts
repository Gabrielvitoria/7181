import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { FramelessPageComponent } from './pages/master/frameless-page/frameless-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/store/checkout-page/checkout-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
    FramelessPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ResetPasswordPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ProfilePageComponent,
    PetsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
