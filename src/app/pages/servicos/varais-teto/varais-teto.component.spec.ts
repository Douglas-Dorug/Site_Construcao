import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaraisTetoComponent } from './varais-teto.component';

describe('VaraisTetoComponent', () => {
  let component: VaraisTetoComponent;
  let fixture: ComponentFixture<VaraisTetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaraisTetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaraisTetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
