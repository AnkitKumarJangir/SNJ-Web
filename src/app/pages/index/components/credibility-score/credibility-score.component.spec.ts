import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredibilityScoreComponent } from './credibility-score.component';

describe('CredibilityScoreComponent', () => {
  let component: CredibilityScoreComponent;
  let fixture: ComponentFixture<CredibilityScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredibilityScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredibilityScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
