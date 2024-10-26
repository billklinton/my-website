import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  firstColumnTools = [
    { title: 'Git', score: 4 },
    { title: 'Google Cloud Platform', score: 3 },
    { title: 'Docker', score: 3 },
    { title: 'Openshift', score: 3 },
    { title: 'Apigee', score: 2 },
    { title: 'AWS', score: 2 }
  ];

  secondColumnTools = [
    { title: 'Jira', score: 3 },
    { title: 'Scrum', score: 3 },
    { title: 'Kanban', score: 3 },
    { title: 'Azure', score: 2 },
    { title: 'Heroku', score: 2 },
    { title: 'Firebase', score: 2 }
  ];

  constructor() {}

  ngOnInit(): void {}
}
