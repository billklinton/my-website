import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  firstColumnTools = [
    { title: 'Openshift', score: 3 },
    { title: 'Jenkins', score: 2 },
    { title: 'Apigee', score: 2 },
    { title: 'Azure', score: 2 },
    { title: 'AWS', score: 2 },
    { title: 'Heroku', score: 2 },
    { title: 'Firebase', score: 2 },
    { title: 'Rancher', score: 1 },
    { title: 'GoCD', score: 1 },
  ];

  secondColumnTools = [
    { title: 'Git', score: 4 },
    { title: 'Docker', score: 3 },
    { title: 'Jira', score: 3 },
    { title: 'Scrum', score: 3 },
    { title: 'Kanban', score: 3 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
