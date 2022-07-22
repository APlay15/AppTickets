import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPropComponent } from './listar-prop.component';

describe('ListarPropComponent', () => {
  let component: ListarPropComponent;
  let fixture: ComponentFixture<ListarPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
