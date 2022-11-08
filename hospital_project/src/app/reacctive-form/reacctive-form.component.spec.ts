import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacctiveFormComponent } from './reacctive-form.component';

describe('ReacctiveFormComponent', () => {
  let component: ReacctiveFormComponent;
  let fixture: ComponentFixture<ReacctiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReacctiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReacctiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
