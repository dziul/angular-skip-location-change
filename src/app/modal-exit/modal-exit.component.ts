import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-exit',
  templateUrl: './modal-exit.component.html',
  styleUrls: ['./modal-exit.component.scss'],
})
export class ModalExitComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  closed() {
    // esse metodo não é ideal quando há queryParams
    // let url = this.router.url;
    // const targetIndex = url.lastIndexOf('(');
    // if (targetIndex !== -1) {
    //   url = url.slice(0, targetIndex);
    // }

    const url = this.router.url.replace(/\(.+\:.+\)/, '');
    return this.router.navigateByUrl(url);
  }
}
