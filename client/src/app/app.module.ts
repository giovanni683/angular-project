// import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TaskDetailComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
  // MatStrokedButtonModule não existe, mat-stroked-button é parte do MatButtonModule
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
