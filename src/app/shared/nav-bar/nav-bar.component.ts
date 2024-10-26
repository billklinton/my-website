import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  stickNavbar = false;
  currentElement = '';

  navbarItems = [
    { navText: 'Profile', navLink: '#profile' },
    { navText: 'Experiences', navLink: '#experiences' },
    { navText: 'Abilities', navLink: '#abilities' },
    //{ navText: 'Projects', navLink: '#projects' },
    { navText: 'Contact', navLink: '#contact' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.ObserveNavBarElements();
    this.ObserveStickyNavBar();
  }

  ObserveNavBarElements() {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          this.currentElement = entry.target.id;

      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    this.navbarItems.forEach((el) =>
      observer.observe(document.querySelector(el.navLink)!)
    );
  }

  ObserveStickyNavBar() {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? this.stickNavbar = false : this.stickNavbar = true;
      },
      {
        root: null,
        threshold: 0.2,
      }
    );
    observer.observe(document.querySelector('#menu-scroll')!);
  }
}
