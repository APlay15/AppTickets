import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConfigComponent } from './listar-config.component';

describe('ListarConfigComponent', () => {
  let component: ListarConfigComponent;
  let fixture: ComponentFixture<ListarConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
