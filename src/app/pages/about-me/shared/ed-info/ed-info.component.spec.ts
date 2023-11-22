import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdInfoComponent } from './ed-info.component';

describe('EdInfoComponent', () => {
  let component: EdInfoComponent;
  let fixture: ComponentFixture<EdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
