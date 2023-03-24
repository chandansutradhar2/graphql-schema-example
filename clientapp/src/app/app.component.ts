import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ChatService } from './services/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'clientapp';
  public users: number = 0;
  public message: string = '';
  public messages: string[] = [];
  constructor(private chatSvc: ChatService) {

  }

  ngOnInit() {
    this.chatSvc.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
    });
    this.chatSvc.getUsers().subscribe((users: number) => {
      this.users = users;
    });
  }

  addChat(text: string) {
    this.message = text;
    this.messages.push(this.message);
    this.chatSvc.sendChat(this.message);
    this.message = '';
  }
}
