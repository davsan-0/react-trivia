import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import QuestionBox from './QuestionBox';
import AnswerBox from './AnswerBox';
import { selectCurrentQuestion } from '../api/questionsSlice';
import { Question } from './Question.type';

const useStyles = makeStyles((theme) => ({
  questionPage: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
}));

const QuestionPage = () => {
  const classes = useStyles();
  const currentQuestion: Question = useSelector(selectCurrentQuestion);

  return (
    <div className={classes.questionPage}>
      <QuestionBox text={currentQuestion.question} />
      <AnswerBox />
    </div>
  );
};

export default QuestionPage;
