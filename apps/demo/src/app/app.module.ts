import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProjectModule } from './features/create-project/create-project.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    HttpClientModule,
    InlineSVGModule.forRoot(),
    CreateProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
