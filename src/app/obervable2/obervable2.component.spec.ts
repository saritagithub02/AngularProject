import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obervable2Component } from './obervable2.component';

describe('Obervable2Component', () => {
  let component: Obervable2Component;
  let fixture: ComponentFixture<Obervable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Obervable2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obervable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
