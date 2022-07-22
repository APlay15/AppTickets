import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCubicTemasComponent } from './listar-cubic-temas.component';

describe('ListarCubicTemasComponent', () => {
  let component: ListarCubicTemasComponent;
  let fixture: ComponentFixture<ListarCubicTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCubicTemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCubicTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
