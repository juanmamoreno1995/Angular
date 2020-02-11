import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetDetallesComponent } from './vet-detalles.component';

describe('VetDetallesComponent', () => {
  let component: VetDetallesComponent;
  let fixture: ComponentFixture<VetDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
