import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-topic',
  templateUrl: './projects-topic.component.html',
  styleUrls: ['./projects-topic.component.scss']
})
export class ProjectsTopicComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() link!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
