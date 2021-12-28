import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareAreaComponent } from './care-area.component';

describe('CareAreaComponent', () => {
  let component: CareAreaComponent;
  let fixture: ComponentFixture<CareAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
