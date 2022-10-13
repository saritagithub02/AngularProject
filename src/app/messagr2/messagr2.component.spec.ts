import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messagr2Component } from './messagr2.component';

describe('Messagr2Component', () => {
  let component: Messagr2Component;
  let fixture: ComponentFixture<Messagr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Messagr2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Messagr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
