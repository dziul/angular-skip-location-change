import { Component, OnInit } from '@angular/core';

import { tap, filter, map, mergeMap } from 'rxjs/operators';

import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  buttons: { path: string; text: string }[] = [
    {
      path: 'anything',
      text: 'Anything',
    },
    {
      path: 'first',
      text: 'First',
    },
    {
      path: 'second',
      text: 'Second',
    },
  ];
  loading = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(
        tap((event) => {
          if (event instanceof NavigationStart) {
            this.loading = true;
          } else if (
            [NavigationEnd, NavigationCancel, NavigationError].some((i) => event instanceof i)
          ) {
            this.loading = false;
          }
        }),
        filter((event) => event instanceof NavigationEnd),
        map((event) => {
          let route = this.activatedRoute;
          const rootData = (route.firstChild && route.firstChild.snapshot.data) || {};

          while (route.firstChild) {
            route = route.firstChild;
          }
          const childData = route.snapshot.data;

          console.log(rootData, childData);
          return childData;
        })
      )
      .subscribe(console.log);
  }
}
