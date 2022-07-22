import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPagNoEnComponent } from './view-pag-no-en.component';

describe('ViewPagNoEnComponent', () => {
  let component: ViewPagNoEnComponent;
  let fixture: ComponentFixture<ViewPagNoEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPagNoEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPagNoEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
