import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCubicTemasComponent } from './form-cubic-temas.component';

describe('FormCubicTemasComponent', () => {
  let component: FormCubicTemasComponent;
  let fixture: ComponentFixture<FormCubicTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCubicTemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCubicTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
