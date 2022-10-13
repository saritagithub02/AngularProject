import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicmodelformComponent } from './dynamicmodelform.component';

describe('DynamicmodelformComponent', () => {
  let component: DynamicmodelformComponent;
  let fixture: ComponentFixture<DynamicmodelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicmodelformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicmodelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
