import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [


  { path: '', component: ProductlistComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produclist', children: [{ path: 'addproduct', component: AddproductComponent }] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
