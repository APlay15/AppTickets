import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCubiculoComponent } from './listar-cubiculo.component';

describe('ListarCubiculoComponent', () => {
  let component: ListarCubiculoComponent;
  let fixture: ComponentFixture<ListarCubiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCubiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCubiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
