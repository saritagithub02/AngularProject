import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsRouteParamComponent } from './product-details-route-param.component';

describe('ProductDetailsRouteParamComponent', () => {
  let component: ProductDetailsRouteParamComponent;
  let fixture: ComponentFixture<ProductDetailsRouteParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsRouteParamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsRouteParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
