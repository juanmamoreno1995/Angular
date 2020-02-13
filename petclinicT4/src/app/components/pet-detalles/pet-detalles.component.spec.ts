import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetallesComponent } from './pet-detalles.component';

describe('PetDetallesComponent', () => {
  let component: PetDetallesComponent;
  let fixture: ComponentFixture<PetDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
