import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  root: {
    width: 250,
    marginBottom: 12,
  },
  pos: {
    marginBottom: 10,
  },

});

export default function MyCardAdd(props) {
  const classes = useStyles();
  const [titleCard, setTitleCard] = useState(props.card.title);
  const [descriptionCard, setDescriptionCard] = useState(props.card.description);
  const editCard = () => {
    props.editingFunc({id:props.card.id,title:titleCard,description:descriptionCard});
    props.setShowCardEditFunc(false);
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
        <Button
           variant="contained"
           color="primary"
           size="small"
           onClick={editCard}>
           Изменить
        </Button>
        <IconButton aria-label="скрыть" >
          <CloseIcon fontSize='small' onClick={() => props.setShowCardEditFunc(false)}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
