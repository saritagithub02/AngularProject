import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginModule } from './login/login.module';
import { DatabindingComponent } from './databinding/databinding.component';
import { TemplateBindingComponent } from './template-binding/template-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { NumberonlyDirective } from './custom-directive/numberonly.directive';
import { HighlightDirective } from './custom-directive/highlight.directive';
import { BackButtonDirective } from './custom-directive/back-button.directive';
import { PipesComponent } from './pipes/pipes.component';
import { RemainingPipe } from './remaining.pipe';
import { OrdinalPipe } from './ordinal.pipe';
import { GenderSuffixPipe } from './gender-suffix.pipe';
import { PuresortArrPipe } from './puresort-arr.pipe';
import { ImpuresortArrPipe } from './impuresort-arr.pipe';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { EmployeeCRUDComponent } from './employee-crud/employee-crud.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { UsersComponent } from './users/users.component';
import { CommentComponent } from './comment/comment.component';
import { Observable1Component } from './observable1/observable1.component';
import { Obervable2Component } from './obervable2/obervable2.component';
import { Observable3Component } from './observable3/observable3.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { MapDemoComponent } from './map-demo/map-demo.component';
import { Observable4Component } from './observable4/observable4.component';
import { Message1Component } from './message1/message1.component';
import { Messagr2Component } from './messagr2/messagr2.component';
import { CartComponent } from './cart/cart.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ModelForm1Component } from './model-form1/model-form1.component';
import { DynamicmodelformComponent } from './dynamicmodelform/dynamicmodelform.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsRouteParamComponent } from './product-details-route-param/product-details-route-param.component';
import { ProductDetailsQueryParamComponent } from './product-details-query-param/product-details-query-param.component';
import { PermanentjobsComponent } from './permanentjobs/permanentjobs.component';
import { ContractjobsComponent } from './contractjobs/contractjobs.component';
import { CustomersModule } from './customers/customers.module';
import { PaymentModule } from './payment/payment.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    DatabindingComponent,
    TemplateBindingComponent,
    DirectivesComponent,
    ProductsComponent,
    EmployeesComponent,
    CustomDirectiveComponent,
    NumberonlyDirective,
    HighlightDirective,
    BackButtonDirective,
    PipesComponent,
    RemainingPipe,
    OrdinalPipe,
    GenderSuffixPipe,
    PuresortArrPipe,
    ImpuresortArrPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    EmployeeCRUDComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    UsersComponent,
    CommentComponent,
    Observable1Component,
    Obervable2Component,
    Observable3Component,
    ForkjoinComponent,
    MapDemoComponent,
    Observable4Component,
    Message1Component,
    Messagr2Component,
    CartComponent,
    RegistrationFormComponent,
    ModelForm1Component,
    DynamicmodelformComponent,
    HomeComponent,
    AboutUsComponent,
    CareerComponent,
    ContactUsComponent,
    NotfoundComponent,
    ProductDetailsRouteParamComponent,
    ProductDetailsQueryParamComponent,
    PermanentjobsComponent,
    ContractjobsComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    CustomersModule,
    PaymentModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
