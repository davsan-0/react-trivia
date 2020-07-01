import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    height: 150,
    width: 150,
    borderRadius: 20,
    '&:first-child': {
      marginRight: theme.spacing(2),
    },
  },
}));

const AnswerButton = ({ text, onClick }: { text: string; onClick: any }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      className={classes.root}
    >
      <Typography>{text}</Typography>
    </Button>
  );
};

export default AnswerButton;
