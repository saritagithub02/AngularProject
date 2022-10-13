import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelForm1Component } from './model-form1.component';

describe('ModelForm1Component', () => {
  let component: ModelForm1Component;
  let fixture: ComponentFixture<ModelForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelForm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
