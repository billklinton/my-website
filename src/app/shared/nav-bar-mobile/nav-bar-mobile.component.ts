import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss']
})
export class NavBarMobileComponent implements OnInit {

  stickNavbar = false;

  ngOnInit(): void {
    this.ObserveStickyNavBar();
  }

  ObserveStickyNavBar() {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? this.stickNavbar = false : this.stickNavbar = true;
      },
      {
        root: null,
        threshold: 0.7,
      }
    );
    observer.observe(document.querySelector('#menu-scroll')!);
  }
}
