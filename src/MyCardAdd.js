import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  root: {
    width: 250,
    marginBottom: 12,
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
    marginBottom: 10,
  },

});

export default function MyCardAdd(props) {
  const classes = useStyles();
  const [titleCard, setTitleCard] = useState('заголовок');
  const [descriptionCard, setDescriptionCard] = useState('описание');
  const addNewCard = () => {
    props.addCardFunc({ id: new Date().getTime(), title: titleCard, description: descriptionCard});
    props.setShowCardAddFunc(false);
  };

  return (
    <Card className={classes.root}>
      <CardContent>


      <TextField
      className={classes.pos}
      label="Название"
      id="filled-size-normal"
      defaultValue=""
      size="small"
      value={titleCard}
      onChange={(event) => setTitleCard(event.target.value)}
       />
      <br />
      <TextField
      label="Описание"
      id="filled-size-normal"
      defaultValue=""
      size="small"
      multiline
      rows={2}
      onChange={(event) => setDescriptionCard(event.target.value)}
      value={descriptionCard}
      />

      </CardContent>
      <CardActions disableSpacing>


        <Button variant="contained" color="primary" size="small"
              onClick={addNewCard}>
          Добавить
        </Button>
        <IconButton aria-label="удалить" >
          <CloseIcon fontSize='small' onClick={() => props.setShowCardAddFunc(false)}/>
        </IconButton>
      </CardActions>

    </Card>
  );
}