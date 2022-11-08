import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTamplateComponent } from './header-tamplate.component';

describe('HeaderTamplateComponent', () => {
  let component: HeaderTamplateComponent;
  let fixture: ComponentFixture<HeaderTamplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTamplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
