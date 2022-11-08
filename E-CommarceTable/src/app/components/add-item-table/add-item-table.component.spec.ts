import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemTableComponent } from './add-item-table.component';

describe('AddItemTableComponent', () => {
  let component: AddItemTableComponent;
  let fixture: ComponentFixture<AddItemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
