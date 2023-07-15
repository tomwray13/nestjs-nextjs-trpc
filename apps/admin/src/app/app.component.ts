import { Component } from '@angular/core';
import { TrpcService } from './core/services/trpc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
  constructor(private trpc: TrpcService) {
    this.trpc.router.hello.query({}).then((res) => {
      this.title = res;
    });
  }
}
