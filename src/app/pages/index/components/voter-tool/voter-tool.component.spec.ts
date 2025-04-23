import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterToolComponent } from './voter-tool.component';

describe('VoterToolComponent', () => {
  let component: VoterToolComponent;
  let fixture: ComponentFixture<VoterToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoterToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoterToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
