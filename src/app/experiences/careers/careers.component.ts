import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  careers = [
    {
      companySchool: 'Banco Carrefour',
      dateStart: 'Aug 2022',
      dateEnd: 'current',
      title: '.Net Developer',
      description: "- Developed and maintained scalable microservices to retrieve customer data, reducing partner API calls by 83%, using technologies like C#, .NET, MongoDB, GraphQL and Google Cloud Platform.\n- Designed and implemented scalable APIs and background workers to log customer actions for auditing, enhancing the performance by 52%, using C#, .NET, MongoDB and Google Pub/Sub.",
      location: 'São Paulo - SP',
      link: 'https://www.carrefoursolucoes.com.br',
      linkText: 'carrefoursolucoes.com.br',
    },
    {
      companySchool: 'InMetrics',
      dateStart: 'Jul 2021',
      dateEnd: 'Aug 2022',
      title: '.Net Developer',
      description:
        'Consultant – Developed and deployed microservices using .NET Core, MongoDB, and SQL Server for Brazilian banks, improving system performance, scalability, and compliance with industry standards.',
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
        "- Developed and maintained the new company's .NET Core based REST API, which manages client data and automates income tax processing. Delivered enhanced functionality, scalability, and performance improvements.\n- Provided ongoing support and enhancements for the company's legacy software built on .NET MVC, ensuring stability and functionality during transition phases.",
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
        'Developed new features and maintained company systems built on the .NET platform, ensuring robust functionality, performance, and reliability across enterprise applications.',
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
        '- Developed and maintained company systems that integrated with third-party software, enhancing functionality and ensuring seamless communication between platforms.\n- Led the development of a new software solution using C#, .NET, replacing and optimizing the legacy integration software, resulting in improved efficiency and maintainability.',
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
        '- Provided technical support to clients of the company.\n- Executed operations for data consultation, maintenance and troubleshooting on the Firebird database.',
      location: 'Belo Horizonte - MG',
      link: 'https://www.liga.inf.br',
      linkText: 'liga.inf.br',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
