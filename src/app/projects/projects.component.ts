import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Irmão do Jorel Website',
      description:
        'Website built with angular, using a API built with .NET Core to fetch the data used',
      imageUrl: 'assets/images/irmao-do-jorel-site.png',
      link: 'https://irmao-do-jorel.web.app/',
      linkText: 'irmao-do-jorel.web.app',
    },
    {
      title: 'Irmão do Jorel App',
      description:
        'Mobile Application built with Flutter, using a API built with .NET Core to fetch the data used',
      imageUrl: 'assets/images/irmao-do-jorel-app.png',
      link: 'https://play.google.com/store/apps/details?id=com.devbkma.irmao_do_jorel_wiki',
      linkText: 'Play Store',
    },
  ];
}
