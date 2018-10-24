import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerencialComponent } from './gerencial.component';

describe('GerencialComponent', () => {
  let component: GerencialComponent;
  let fixture: ComponentFixture<GerencialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerencialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
