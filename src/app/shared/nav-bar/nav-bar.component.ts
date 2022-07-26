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

    // window.location.hash = document.getElementById('.nav .active a')?. attr('href').replace('#', '#/');
  }

  activeMenu() {
    this.isElementVisible('profile');
    this.isElementVisible('experiences');
    this.isElementVisible('abilities');
    this.isElementVisible('projects');
    this.isElementVisible('contact');
  }

  isElementVisible(id: string) {
    const el = document.querySelector(`#${id}`);
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          var elem = document.getElementsByClassName('active')
          console.log(elem[0].id)
          this.removeClassByElementId(elem[0].id, 'active');
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
