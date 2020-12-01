import React, { useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import { fetchProjects } from './store/project/actions';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ru';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function ProjectContainer() {
  const classes = useStyles();
  const project_list = useSelector(state=>state.project.project_list);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchProjects());

   }, []);

  return (
    <Grid container className={classes.root} >
      <Grid item xs={12}>
        <Grid container  spacing={2} >
          { project_list.map( function newCard(value) {
                   moment.locale('ru');
                   let newStartDate = moment(value.startDate);
                   let newEndDate = moment(value.endDate);
                   return ( <Grid key = {value.id.toString()} md={3} sm={6} xs={12} item>
                              <ProjectCard
                                  id        = {value.id}
                                  title     = {value.title}
                                  startDate = {newStartDate.format('l')}
                                  endDate   = {newEndDate.format('ll')}
                              />
                            </Grid>
                          )}
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
