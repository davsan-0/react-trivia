import React, { useState, useEffect, useRef } from 'react';
import { connectToRoom, getQuestion } from './api/websocket';
import ReconnectingWebSocket from 'reconnecting-websocket';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { green, teal, red, indigo } from '@material-ui/core/colors';
import { Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './common/header/Header';
import QuestionPage from './QuestionPage/QuestionPage';
import { useSelector, useDispatch } from 'react-redux';

let theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#ab47bc',
    },
    type: 'dark',
  },
});

function App() {
  const [questions, setQuestions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    connectToRoom('EEE', dispatch).then(() => getQuestion());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/*<Header title="Trivia" /> */}
      <CssBaseline />
      <QuestionPage />
    </ThemeProvider>
  );
}

export default App;
