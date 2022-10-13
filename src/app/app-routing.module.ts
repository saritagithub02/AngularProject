import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsRouteParamComponent } from './product-details-route-param/product-details-route-param.component';
import { ProductDetailsQueryParamComponent } from './product-details-query-param/product-details-query-param.component';
import { PermanentjobsComponent } from './permanentjobs/permanentjobs.component';
import { ContractjobsComponent } from './contractjobs/contractjobs.component';
import { RouteGuardService } from './route-guard.service';
import { GuardChildService } from './guard-child.service';
import { DeActivateGuardService } from './de-activate-guard.service';
import { ProductResolverService } from './product-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  {
    path: 'career',
    component: CareerComponent,
    canActivateChild: [GuardChildService],
    children: [
      { path: '', component: PermanentjobsComponent },
      { path: 'Permanentjobs', component: PermanentjobsComponent },
      { path: 'Contractjobs', component: ContractjobsComponent },
    ],
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
    //canDeactivate: [DeActivateGuardService],
  },
  { path: 'products', component: ProductsComponent },
  {
    path: 'ProductDetailsRouteParam/:id',
    component: ProductDetailsRouteParamComponent,
    resolve:{productDetail:ProductResolverService}
  },
  {
    path: 'ProductDetailsQueryParam',
    component: ProductDetailsQueryParamComponent,
    canActivate: [RouteGuardService],
  },
  { path: '', component: HomeComponent },
  { path: 'customers',
   loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', component: NotfoundComponent }, // wild card route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
