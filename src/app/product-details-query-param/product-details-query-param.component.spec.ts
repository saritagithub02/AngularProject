import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsQueryParamComponent } from './product-details-query-param.component';

describe('ProductDetailsQueryParamComponent', () => {
  let component: ProductDetailsQueryParamComponent;
  let fixture: ComponentFixture<ProductDetailsQueryParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsQueryParamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsQueryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
