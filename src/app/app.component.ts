import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface Advice {
  slip: {
    id: number;
    advice: String;
  };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AdviceGenerator';
  imageSrc = './assets/pattern-divider-desktop.png';
  ImageSrc = './assets/icon-dice.png';
  advice: Advice = {
    slip: {
      id: 0,
      advice: '',
    },
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<Advice>('https://api.adviceslip.com/advice')
      .subscribe((res) => {
        this.advice = res;
        console.log(res);
      });
  }
  adviceMe() {
    this.ngOnInit();
  }
}
