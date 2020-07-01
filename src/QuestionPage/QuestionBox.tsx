import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { selectCurrentQuestion } from '../api/questionsSlice';
import { Question } from './Question.type';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    flexBasis: '30%',
  },
}));

const QuestionBox = ({ text }: { text: string }) => {
  const classes = useStyles();
  const currentQuestion: Question = useSelector(selectCurrentQuestion);

  return (
    <div className={classes.root}>
      <Typography variant="h4">{text}</Typography>
    </div>
  );
};

export default QuestionBox;
