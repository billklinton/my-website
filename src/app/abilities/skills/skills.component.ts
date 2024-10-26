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
    { title: 'Unit Tests', score: 4 },
    { title: 'MongoDB', score: 4 },
    { title: 'SQLServer', score: 4 },    
    { title: 'Pub/Sub', score: 4 },
    { title: 'Kafka', score: 4 },
  ];

  secondColumnSkills = [
    { title: 'RabbitMQ', score: 3 },
    { title: 'MySql', score: 3 },
    { title: 'Firebird', score: 3 },
    { title: 'PostgreSQL', score: 3 },        
    { title: 'Angular', score: 3 },
    { title: 'Typescript', score: 3 },
    { title: 'Bootstrap', score: 2 },
    { title: 'Flutter', score: 3 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
