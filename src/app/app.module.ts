import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  imports: [BrowserModule, CardComponent, TasksComponent],
  exports: [],
  declarations: [HeaderComponent, AppComponent, UserComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
