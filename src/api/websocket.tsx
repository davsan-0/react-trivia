import ReconnectingWebSocket from 'reconnecting-websocket';
import { Dispatch } from 'redux';
import { setCurrentQuestion } from './questionsSlice';

let ws: ReconnectingWebSocket;

export function connectToRoom(code: string, dispatch: Dispatch<any>) {
  let userId = sessionStorage.getItem('user_id');
  const options = { debug: Boolean(process.env.REACT_APP_DEBUG_FLAG) };
  return new Promise((resolve, reject) => {
    ws = new ReconnectingWebSocket('ws://localhost:8080', [], options);

    ws.onopen = (event) => {
      const send = { type: 'connect', code, userId };
      ws.send(JSON.stringify(send));
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      console.log('Server Message: ', msg);

      switch (msg.type) {
        case 'connect':
          sessionStorage.setItem('user_id', msg.userId);
          userId = msg.userId;
          const broadcast = { type: 'broadcast' };

          ws.send(JSON.stringify(broadcast));

          resolve();
          break;
        case 'question':
          dispatch(setCurrentQuestion(JSON.parse(msg.message)));
          break;
      }
    };
  });
}

export function getQuestion() {
  const send = { type: 'question' };
  ws.send(JSON.stringify(send));
}

export function sendAnswer(question_id: string, answer: number) {
  const send = { type: 'answer', message: { question_id, answer } };
  ws.send(JSON.stringify(send));
}
