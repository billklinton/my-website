import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities-topic',
  templateUrl: './abilities-topic.component.html',
  styleUrls: ['./abilities-topic.component.scss']
})
export class AbilitiesTopicComponent implements OnInit {

  @Input() title!: string;
  @Input() score!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
