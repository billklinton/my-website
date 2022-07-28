import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.activeMenu();
  }

  @HostListener('window:scroll', ['$event']) scrollHandler(event: Event) {
    var offsetTop = document.getElementById('menu-scroll')!.offsetTop;

    if (window.scrollY > offsetTop) {
      this.addClassByElementId('nav-bar', 'fixed');
      return;
    }
    this.removeClassByElementId('nav-bar', 'fixed');
  }

  activeMenu() {
    this.isNavbarElementActive('profile');
    this.isNavbarElementActive('experiences');
    this.isNavbarElementActive('abilities');
    this.isNavbarElementActive('projects');
    this.isNavbarElementActive('contact');
  }

  isNavbarElementActive(id: string) {
    const el = document.querySelector(`#${id}`);
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          var lastActiveElement = document.getElementsByClassName('active')
          this.removeClassByElementId(lastActiveElement[0].id, 'active');
          this.addClassByElementId(`${id}Link`, 'active');
          return;
        }
        this.removeClassByElementId(`${id}Link`, 'active');
        return;
      },
      {
        root: null,
        threshold: 0.2
      }
    );

    observer.observe(el!);
  }

  addClassByElementId(elementId: string, classToAdd: string) {
    document.getElementById(elementId)?.classList.add(classToAdd);
  }

  removeClassByElementId(elementId: string, classToRemove: string) {
    document.getElementById(elementId)?.classList.remove(classToRemove);
  }
}
