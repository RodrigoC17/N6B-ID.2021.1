import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './components/product-list/pipes/filter.pipe';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductNotExistGuard } from './components/product-detail/guards/product-not-exist.guard';
import { ProductAddComponent } from './components/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductRowComponent,
    FilterPipe,
    ProductDetailComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductNotExistGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
