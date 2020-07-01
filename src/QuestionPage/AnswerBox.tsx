import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AnswerButton from './AnswerButton';
import { sendAnswer } from '../api/websocket';
import { selectCurrentQuestion } from '../api/questionsSlice';
import { Question } from './Question.type';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(5),
  },
  row: {
    display: 'flex',
    '&:first-child': {
      marginBottom: theme.spacing(2),
    },
  },
  margin: {},
}));

const AnswerBox = () => {
  const classes = useStyles();
  const currentQuestion: Question = useSelector(selectCurrentQuestion);
  const text = currentQuestion.answers
    ? currentQuestion.answers
    : new Array<string>(4);

  const answerClicked = (index: number) => {
    sendAnswer(currentQuestion.id, index);
  };

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <AnswerButton onClick={() => answerClicked(0)} text={text[0]} />
        <AnswerButton onClick={() => answerClicked(1)} text={text[1]} />
      </div>
      <div className={classes.row}>
        <AnswerButton onClick={() => answerClicked(2)} text={text[2]} />
        <AnswerButton onClick={() => answerClicked(3)} text={text[3]} />
      </div>
    </div>
  );
};

export default AnswerBox;
