import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmanageDetailsComponent } from './tmanage-details.component';

describe('TmanageDetailsComponent', () => {
  let component: TmanageDetailsComponent;
  let fixture: ComponentFixture<TmanageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmanageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmanageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
