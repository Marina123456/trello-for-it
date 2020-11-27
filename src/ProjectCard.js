import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme) => ({

  button: {
    paddingLeft: 2,
    paddingBottom: 5,
    },
  title: {
   fontSize: 14,
   marginBottom: 3,
   display: 'inline-block',
 },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  pos: {
    marginBottom: 12,

  },
  top: {
    marginTop: 12,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const preventDefault = (event) => event.preventDefault();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card className={classes.root}>
      <CardContent>

       <Button
        variant="outline"
        disabled
        color="secondary"
        className={classes.button}
        component="span"
        startIcon={<AccessTimeIcon fontSize="small" />
      }
      >
        до {props.endDate}
      </Button>
       <Typography variant="h6" component="h6" className={classes.pos}>
         {props.title}
       </Typography>
      <Typography variant="body2" color="textSecondary" component="p">

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
