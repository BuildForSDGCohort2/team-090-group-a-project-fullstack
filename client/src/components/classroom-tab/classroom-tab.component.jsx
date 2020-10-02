import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Assignments from '../assignments/assignments.component';
import Tests from '../tests/tests.component';

import { ClassroomTabContainer } from './classroom-tab.styles'

const ClassroomTab = () => {
    const [value, setValue] = React.useState(0);

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
          <Tab label="Assignments" />
          <Tab label="Tests" />
      </Tabs>
        <TabPanel index={0} value={value}>
          <Assignments />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <Tests /> 
        </TabPanel>
      </ClassroomTabContainer>
    );
} 

export default ClassroomTab;