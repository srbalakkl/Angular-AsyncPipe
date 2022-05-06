import { Component } from '@angular/core';
import {interval, map, take} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AsyncPipe';

  date$ = interval(1000).pipe(
    map(x => new Date()),take(10)
  );

  // date$ is the observable
}
