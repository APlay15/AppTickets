import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCubiculoComponent } from './form-cubiculo.component';

describe('FormCubiculoComponent', () => {
  let component: FormCubiculoComponent;
  let fixture: ComponentFixture<FormCubiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCubiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCubiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
