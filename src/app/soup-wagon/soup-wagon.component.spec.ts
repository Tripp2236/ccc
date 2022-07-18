import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupWagonComponent } from './soup-wagon.component';

describe('SoupWagonComponent', () => {
  let component: SoupWagonComponent;
  let fixture: ComponentFixture<SoupWagonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoupWagonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoupWagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
