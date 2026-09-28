import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobapply } from './jobapply';

describe('Jobapply', () => {
  let component: Jobapply;
  let fixture: ComponentFixture<Jobapply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jobapply],
    }).compileComponents();

    fixture = TestBed.createComponent(Jobapply);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
