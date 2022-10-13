import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsItemAddComponent } from './clients-item-add.component';

describe('ClientsItemAddComponent', () => {
  let component: ClientsItemAddComponent;
  let fixture: ComponentFixture<ClientsItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsItemAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
