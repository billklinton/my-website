import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) scrollHandler(event: Event) {
    var offsetTop = document.getElementById('menu-scroll')!.offsetTop;

    if (window.scrollY > offsetTop) {
      document.getElementById('nav-bar')?.classList.add('fixed');
      return;
    }
    document.getElementById('nav-bar')?.classList.remove('fixed');
  }

  activeClass(){

  }
}
