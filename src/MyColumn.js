import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import MyCardAdd from './MyCardAdd';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  button: {
    width: 250,
    marginBottom: 5,
    marginTop: 5,
  },
  iconButton: {
    float: 'right',
    bottom: 12
  },
  titleColumn: {
    cursor: 'text'
  }
});

export default function MyColumn(props) {
  const classes = useStyles();
  const [isShowAdd, setShowAdd] = useState(false);
  const [isShowEditTitle, setShowEditTitle] = useState(false);
  const [titleColumn, setTitleColumn] = useState(props.column.title);

  const onColumnRemove = () => {
    props.onColumnRemoveFunc(props.column);
  }
  const onKeyDown = e =>{
    if (e.keyCode === '13'){
        props.onColumnRenameFunc({id: props.column.id, title: titleColumn, cards: props.column.cards})
        setShowEditTitle(false)
      }
  }
  const onClickShowRenameField= () =>{
        setShowEditTitle(true);
  }

  return (
    <div>
      {(!isShowEditTitle)?
        (<Typography variant="subtitle2"  component="span" onClick={onClickShowRenameField} className={classes.titleColumn}>
           {props.column.title}
        </Typography>)
        :(<TextField
            label="Название колонки"
            id="filled-size-normal"
            defaultValue=""
            size="small"
            autoFocus={true}
            onBlur={()=>setShowEditTitle(false)}
            onKeyDown={onKeyDown}
            onChange={(event) => setTitleColumn(event.target.value)}
            value={titleColumn}
        />)
      }
       <IconButton aria-label="удалить" className={classes.iconButton}  onClick={onColumnRemove}>
          <CloseIcon fontSize='small'/>
       </IconButton>
       <br />
      {(!isShowAdd)?
        (<Button
            variant="text"
            onClick={() => setShowAdd(true)}
            size="small"
            className={classes.button}
            startIcon={<AddIcon />}>
          Добавить карточку
          </Button>):
       (<MyCardAdd
            setShowCardAddFunc={setShowAdd}
            inColumn={props.column}
            addCardFunc={props.addCardFunc}/> )}
    </div>
  );
}
