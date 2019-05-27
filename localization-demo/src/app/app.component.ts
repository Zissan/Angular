import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localization-demo';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Espanol' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string){}
}
