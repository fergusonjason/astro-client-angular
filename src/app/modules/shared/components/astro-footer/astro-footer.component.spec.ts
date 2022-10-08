import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroFooterComponent } from './astro-footer.component';

describe('AstroFooterComponent', () => {
  let component: AstroFooterComponent;
  let fixture: ComponentFixture<AstroFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
