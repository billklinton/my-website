import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences-topic',
  templateUrl: './experiences-topic.component.html',
  styleUrls: ['./experiences-topic.component.scss']
})
export class ExperiencesTopicComponent implements OnInit {

  @Input() companySchool!: string;
  @Input() dateStart!: string;
  @Input() dateEnd!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() location!: string;
  @Input() link!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
