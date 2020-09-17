import React from 'react';

import Grid from '@material-ui/core/Grid';
import ClassroomCard from '../classroom-card/classroom-card.component';


const ClassroomsGrid = ({ classrooms }) => (
    <Grid container spacing={3}>
        {
            classrooms.map((classroom, key) => (
             <Grid item xs={4} key={key}>   
                <ClassroomCard elevation={10} classroom={classroom} />
             </Grid>   
            ))
        }
    </Grid>
);

export default React.memo(ClassroomsGrid);