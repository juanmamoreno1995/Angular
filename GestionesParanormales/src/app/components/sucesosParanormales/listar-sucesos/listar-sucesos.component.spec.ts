import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSucesosComponent } from './listar-sucesos.component';

describe('ListarSucesosComponent', () => {
  let component: ListarSucesosComponent;
  let fixture: ComponentFixture<ListarSucesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSucesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSucesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
