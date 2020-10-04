import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Assignments from '../assignments/assignments.component';
import Tests from '../tests/tests.component';
import AboutClassroom from '../about-classroom/about-classroom.component';
import Announcements from '../announcements/announcements.component';

import { ClassroomTabContainer } from './classroom-tab.styles'

const ClassroomTab = ({ activeClassroom }) => {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const TabPanel = ({ children, value, index }) => {
      return(
        <div>
          {
            value === index && <div>{children}</div>
          }
        </div>
      )
    }

    return (
        <ClassroomTabContainer>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab className={'hide-on-desktop'} label="Home" />
          <Tab className={'hide-on-desktop'} label="Announcement" />
          <Tab label="Assignments" />
          <Tab label="Tests" />
      </Tabs>
        <TabPanel className={'hide-on-desktop'} index={0} value={value}>
          <AboutClassroom activeClassroom={activeClassroom} />
        </TabPanel>
        <TabPanel className={'hide-on-desktop'} index={1} value={value}>
          <Announcements /> 
        </TabPanel>
        <TabPanel index={2} value={value}>
          <Assignments />
        </TabPanel>
        <TabPanel index={3} value={value}>
          <Tests /> 
        </TabPanel>
      </ClassroomTabContainer>
    );
} 

export default ClassroomTab;