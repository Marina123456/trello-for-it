import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import ProjectCard from './ProjectCard';
import { fetchProjects } from './store/project/actions';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ru';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ProjectContainer() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const project_list = useSelector(state=>state.project.project_list);
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(fetchProjects());

   }, []);
   console.log(project_list);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} >
      <Grid item xs={12}>
        <Grid container  spacing={2} >
          {project_list.map(
            function newCard(value) {

              moment.locale('ru'); // default the locale to English
              var ru = moment().locale('ru');
              let newStartDate = moment(value.startDate);
              let newEndDate = moment(value.endDate);

              return ( <Grid md={3} sm={6} xs={12} item>
              <ProjectCard
                 id = {value.id}
                 title = {value.title}
                 startDate = {newStartDate.format('l')}
                 endDate = {newEndDate.format('ll')}
              />
            </Grid>
          )}
        )}
        </Grid>
      </Grid>
    </Grid>
  );
}
