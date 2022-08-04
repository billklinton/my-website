import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  firstColumnSkills = [
    { title: 'C#', score: 5 },
    { title: '.NET Core', score: 5 },
    { title: 'Entity Framework', score: 4 },
    { title: 'Dapper', score: 4 },
    { title: 'SQLServer', score: 4 },
    { title: 'MySql', score: 3 },
    { title: 'Firebird', score: 3 },
    { title: 'PostgreSQL', score: 3 },
    { title: 'MongoDB', score: 3 },
  ];

  secondColumnSkills = [
    { title: 'RabbitMQ', score: 3 },
    { title: 'Kafka', score: 2 },
    { title: 'MediatR', score: 4 },
    { title: 'Unit Tests', score: 4 },
    { title: 'Angular', score: 2 },
    { title: 'Typescript', score: 2 },
    { title: 'Bootstrap', score: 2 },
    { title: 'Flutter', score: 3 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
