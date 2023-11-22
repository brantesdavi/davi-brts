import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpInfoComponent } from './xp-info.component';

describe('XpInfoComponent', () => {
  let component: XpInfoComponent;
  let fixture: ComponentFixture<XpInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
