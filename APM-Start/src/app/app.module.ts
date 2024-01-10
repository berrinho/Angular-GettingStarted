import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { productListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    RxjsDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'rxjsdemo', component: WelcomeComponent},
      {path: 'productlist', component: RxjsDemoComponent},
      {path: 'productdetail/:id', 
      component: ProductDetailsComponent,
      canActivate: [ProductDetailGuard]},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome'}])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
