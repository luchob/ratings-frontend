import {Component, OnInit} from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-rating-stream',
  templateUrl: './rating-stream.component.html',
  styleUrls: ['./rating-stream.component.scss']
})
export class RatingStreamComponent implements OnInit {

  private serverUrl = 'http://localhost:8080/socket';
  private stompClient;

  constructor() {
  }

  ngOnInit() {
    this.initializeWebSocketConnection();
  }

  private initializeWebSocketConnection() {

    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, () => {
      that.stompClient.subscribe('/ratings', (message) => {
          if (message.body) {
            console.log('Received a message!');
          }
        },
        () => {
          // todo
           console.log('Unable to connect!');
        });
    },
      () => {
        console.log('Disconnected...');
      });
  }
}
