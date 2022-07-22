import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInteraccionComponent } from './form-interaccion.component';

describe('FormInteraccionComponent', () => {
  let component: FormInteraccionComponent;
  let fixture: ComponentFixture<FormInteraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInteraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInteraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
