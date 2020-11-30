import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import MyCardEdit from './MyCardEdit';
import inColumn from './utils/inColumn';

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
});

export default function MyCard(props) {
  const board = useSelector(state=>state.card.board);
  const classes = useStyles();
  const [isShowEdit, setShowEdit] = useState(false);
  return (
    <div>
    
    {(!isShowEdit) ?
    (<Card className={classes.root}>
         <CardHeader
             action={
               <>
                  <IconButton aria-label="удалить" onClick={()=>props.removeFunc(inColumn(props.card,board),props.card)}>
                      <CloseIcon fontSize='small'/>
                  </IconButton>
                  <br />
                  <IconButton aria-label="изменить" onClick={() => setShowEdit(true)}>
                      <EditIcon fontSize='small'/>
                  </IconButton>
              </>

              }
           title={
             <Typography
                variant="subtitle2"
                component="p">
                {props.card.title}
             </Typography>}
           subheader={
             <Typography
                variant="body2"
                color="textSecondary"
                component="p">
                {props.card.description}
                </Typography>
              }
          />
    </Card>) : (<MyCardEdit card={props.card} setShowCardEditFunc={setShowEdit} editingFunc={props.editingFunc}/>)}
    </div>
  );
}
