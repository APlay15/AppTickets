import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTurnosComponent } from './vista-turnos.component';

describe('VistaTurnosComponent', () => {
  let component: VistaTurnosComponent;
  let fixture: ComponentFixture<VistaTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTurnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
