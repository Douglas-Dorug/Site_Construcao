import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortasJanelasComponent } from './portas-janelas.component';

describe('PortasJanelasComponent', () => {
  let component: PortasJanelasComponent;
  let fixture: ComponentFixture<PortasJanelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortasJanelasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortasJanelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
