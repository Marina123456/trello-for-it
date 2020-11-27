import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import MyCardAdd from './MyCardAdd';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    width: 250,
    marginBottom: 5,
    marginTop: 5,
  }
});

export default function MyColumn(props) {
  const classes = useStyles();
  const [isShowAdd, setShowAdd] = useState(false);

  console.log(props);//onClick={() => props.addCardFunc({ id: 897987979, title: 'New Card' })}
  return (
    <div>
    <Typography variant="subtitle2"  component="p">{props.column.title}</Typography>

      {(!isShowAdd)?
        (<Button
        variant="text"
        onClick={() => setShowAdd(true)}
        size="small"
        className={classes.button}
        startIcon={<AddIcon />}

      >
        Добавить карточку
      </Button>):
      (<MyCardAdd setShowCardAddFunc={setShowAdd} addCardFunc={props.addCardFunc}/> )}

    </div>
  );
}
