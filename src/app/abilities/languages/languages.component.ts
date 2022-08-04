import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent {
  firstColumnLanguages = [{ title: 'Portuguese (Native)', score: 5 }];
  secondColumnLanguages = [{ title: 'English (Intermediate)', score: 4 }];
}
