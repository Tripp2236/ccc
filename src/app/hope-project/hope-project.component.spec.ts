import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopeProjectComponent } from './hope-project.component';

describe('HopeProjectComponent', () => {
  let component: HopeProjectComponent;
  let fixture: ComponentFixture<HopeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopeProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HopeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
