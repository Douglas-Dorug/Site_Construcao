import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspelhosComponent } from './espelhos.component';

describe('EspelhosComponent', () => {
  let component: EspelhosComponent;
  let fixture: ComponentFixture<EspelhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspelhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspelhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
