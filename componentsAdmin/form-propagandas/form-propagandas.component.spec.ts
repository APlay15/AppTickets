import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropagandasComponent } from './form-propagandas.component';

describe('FormPropagandasComponent', () => {
  let component: FormPropagandasComponent;
  let fixture: ComponentFixture<FormPropagandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPropagandasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPropagandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
