import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormrecetaComponent } from './formreceta.component';

describe('FormrecetaComponent', () => {
  let component: FormrecetaComponent;
  let fixture: ComponentFixture<FormrecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormrecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormrecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
