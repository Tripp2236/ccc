import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCommunityComponent } from './the-community.component';

describe('TheCommunityComponent', () => {
  let component: TheCommunityComponent;
  let fixture: ComponentFixture<TheCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
