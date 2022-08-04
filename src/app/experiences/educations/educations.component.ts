import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss'],
})
export class EducationsComponent {
  educations = [
    {
      companySchool: 'Faculdade Pitágoras',
      dateStart: 'Jan 2016',
      dateEnd: 'Dec 2019',
      title: 'Bachelor - Computer Science',
      description: '',
      location: 'Betim - MG',
      link: 'https://www.pitagoras.com.br',
      linkText: 'pitagoras.com.br',
    },
    {
      companySchool: 'Senai',
      dateStart: 'Jul 2013',
      dateEnd: 'Jan 2015',
      title: 'Technical Course - Computer Science',
      description: '',
      location: 'Contagem - MG',
      link: 'https://www.senaimg.com.br',
      linkText: 'senaimg.com.br',
    },
  ];
}
