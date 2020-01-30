import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaBorrarComponent } from './pa-borrar.component';

describe('PaBorrarComponent', () => {
  let component: PaBorrarComponent;
  let fixture: ComponentFixture<PaBorrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaBorrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
