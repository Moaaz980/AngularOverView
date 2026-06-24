import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Themeicon } from './themeicon';

describe('Themeicon', () => {
  let component: Themeicon;
  let fixture: ComponentFixture<Themeicon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Themeicon],
    }).compileComponents();

    fixture = TestBed.createComponent(Themeicon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
