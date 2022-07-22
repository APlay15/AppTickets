import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoCedulaEscanerComponent } from './ingreso-cedula-escaner.component';

describe('IngresoCedulaEscanerComponent', () => {
  let component: IngresoCedulaEscanerComponent;
  let fixture: ComponentFixture<IngresoCedulaEscanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoCedulaEscanerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoCedulaEscanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
