import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   showMoileMenu = false;
   _router = inject(Router)


   redirect(url:string){
    this.showMoileMenu = false;
    this._router.navigateByUrl(url)
   }
}
