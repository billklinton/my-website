import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-info',
  templateUrl: './topic-info.component.html',
  styleUrls: ['./topic-info.component.scss']
})
export class TopicInfoComponent implements OnInit {

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
