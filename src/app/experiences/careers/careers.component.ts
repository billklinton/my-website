import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  careers = [
    {
      companySchool: 'InMetrics',
      dateStart: 'Jul 2021',
      dateEnd: 'current',
      title: '.Net Developer',
      description:
        'Development of new systems and features for brazilian banks, using the following technologies:\n\n- Banco Neon: .NET Core, RabbitMQ, Kafka, MongoDB, SQLServer, GoCD and Rancher.\n- Banco Carrefour: .NET Core, RabbitMQ, SQLServer, Apigee, Jenkins and Openshift.',
      location: 'São Paulo - SP',
      link: 'https://inmetrics.com.br',
      linkText: 'inmetrics.com.br',
    },
    {
      companySchool: 'ConferIR',
      dateStart: 'Feb 2021',
      dateEnd: 'Jul 2021',
      title: '.Net Developer',
      description:
        "- Development and maintenance of the company's software (Rest API in .NET Core),which manages clients and their information on the Income Tax of each one of them.\n- Maintenance of the company's legacy software, made with .NET MVC.",
      location: 'São Paulo - SP',
      link: 'http://www.conferironline.com.br',
      linkText: 'conferironline.com.br',
    },
    {
      companySchool: 'Sinqia',
      dateStart: 'Oct 2020',
      dateEnd: 'Feb 2021',
      title: '.Net Developer',
      description:
        'Development of new features and maintenance of company systems based on the .NET platform.',
      location: 'Belo Horizonte - MG',
      link: 'https://www.sinqia.com.br',
      linkText: 'sinqia.com.br',
    },
    {
      companySchool: 'Donuz',
      dateStart: 'May 2018',
      dateEnd: 'Sep 2020',
      title: '.Net / Flutter Developer',
      description:
        '- Development and maintenance of software to perform integrations between the Donuz system and third-party systems, the integrations were made through Rest APIs.\n- Development and maintenance of applications for Android and iOS systems, using the Flutter development framework.\n- Publishing and updating apps on Google Play and Apple Store.',
      location: 'Betim - MG',
      link: 'https://donuz.com.br',
      linkText: 'donuz.com.br',
    },
    {
      companySchool: 'LIGA Sistemas',
      dateStart: 'Oct 2017',
      dateEnd: 'May 2018',
      title: 'Technical Support Intern',
      description:
        '- Provide technical support to the clients of the company.\n- Execution of database operations for data consultation, maintenance and troubleshooting with the system.',
      location: 'Belo Horizonte - MG',
      link: 'https://www.liga.inf.br',
      linkText: 'liga.inf.br',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
