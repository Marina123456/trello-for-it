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

    height: 150,
    marginTop: 10
  },

  title: {
    fontSize: 14,
  },
  pos: {

  },

});

export default function MyColumnAdd(props) {
  const classes = useStyles();
  const [titleColumn, setTitleColumn] = useState('заголовок');

  const addNewColumn = () => {
    props.onColumnAddFunc({ id: new Date().getTime(), title: titleColumn, cards: []});
    props.setShowColumnAddFunc(false);
  };

  return (
    <Card className={classes.root}>
      <CardContent>


      <TextField
      className={classes.pos}
      label="Название колонки"
      id="filled-size-normal"
      defaultValue=""
      size="small"
      value={titleColumn}
      onChange={(event) => setTitleColumn(event.target.value)}
       />

      </CardContent>
      <CardActions disableSpacing>


        <Button variant="contained" color="primary" size="small"
              onClick={addNewColumn}>
          Добавить
        </Button>
        <IconButton aria-label="удалить" >
          <CloseIcon fontSize='small' onClick={() => props.setShowColumnAddFunc(false)}/>
        </IconButton>
      </CardActions>

    </Card>
  );
}
