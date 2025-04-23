import { Component, inject, OnInit } from '@angular/core';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { AppDescriptionComponent } from "./components/app-description/app-description.component";
import { CredibilityScoreComponent } from "./components/credibility-score/credibility-score.component";
import { GovernmentSchemesComponent } from "./components/government-schemes/government-schemes.component";
import { VoterToolComponent } from "./components/voter-tool/voter-tool.component";
import { DownloadCtaComponent } from "./components/download-cta/download-cta.component";
import { GamifieldRewardsComponent } from "./components/gamifield-rewards/gamifield-rewards.component";
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [HeroSectionComponent, AppDescriptionComponent, CredibilityScoreComponent, GovernmentSchemesComponent, VoterToolComponent, DownloadCtaComponent, GamifieldRewardsComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private scroller =inject(ViewportScroller) 


  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    });
  }
}
