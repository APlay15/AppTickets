import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccesosComponent } from './view-accesos.component';

describe('ViewAccesosComponent', () => {
  let component: ViewAccesosComponent;
  let fixture: ComponentFixture<ViewAccesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccesosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
