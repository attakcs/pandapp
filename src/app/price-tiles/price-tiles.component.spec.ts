import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTilesComponent } from './price-tiles.component';

describe('PriceTilesComponent', () => {
  let component: PriceTilesComponent;
  let fixture: ComponentFixture<PriceTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
