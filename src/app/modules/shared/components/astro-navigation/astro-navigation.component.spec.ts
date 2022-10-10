import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroNavigationComponent } from './astro-navigation.component';

describe('AstroNavigationComponent', () => {
  let component: AstroNavigationComponent;
  let fixture: ComponentFixture<AstroNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
