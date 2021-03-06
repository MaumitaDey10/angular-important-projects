import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'FWK2 archetype application';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');  // Language used as a fallback when a translation is not found for the current language
    translate.use('en');             // Language to use
  }
}
