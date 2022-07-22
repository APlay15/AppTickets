import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInteraccionComponent } from './listar-interaccion.component';

describe('ListarInteraccionComponent', () => {
  let component: ListarInteraccionComponent;
  let fixture: ComponentFixture<ListarInteraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInteraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInteraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
