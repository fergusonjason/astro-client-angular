import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroHeaderComponent } from './astro-header.component';

describe('AstroHeaderComponent', () => {
  let component: AstroHeaderComponent;
  let fixture: ComponentFixture<AstroHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
