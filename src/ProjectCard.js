import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme) => ({
  button: {
    paddingLeft: 2,
    paddingBottom: 5,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
         <Button
            disabled
            color="secondary"
            className={classes.button}
            component="span"
            startIcon={<AccessTimeIcon fontSize="small" />}>
            до {props.endDate}
          </Button>
         <Typography variant="h6" component="h6" className={classes.pos}>
            {props.title}
         </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button href={`${process.env.PUBLIC_URL}/${props.id}`} size="small" color="primary">
          Перейти к задачам
        </Button>
      </CardActions>
    </Card>
  );
}
