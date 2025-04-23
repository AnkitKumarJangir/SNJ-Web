import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamifieldRewardsComponent } from './gamifield-rewards.component';

describe('GamifieldRewardsComponent', () => {
  let component: GamifieldRewardsComponent;
  let fixture: ComponentFixture<GamifieldRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamifieldRewardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamifieldRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
