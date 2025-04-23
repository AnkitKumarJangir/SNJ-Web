import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCtaComponent } from './download-cta.component';

describe('DownloadCtaComponent', () => {
  let component: DownloadCtaComponent;
  let fixture: ComponentFixture<DownloadCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
