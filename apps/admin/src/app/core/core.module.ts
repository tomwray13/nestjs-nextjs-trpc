import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrpcService } from './services/trpc.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [TrpcService],
})
export class CoreModule {}
