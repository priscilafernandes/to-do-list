import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskCardsComponent } from './components/task-cards/task-cards.component';
import { FormsModule } from '@angular/forms';

import { BroadcastTodoService } from './services/broadcast-todo.service';
import { ApiTaskService } from "../app/services/api-task.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskComponent,
    MainViewComponent,
    TaskCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BroadcastTodoService, ApiTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
