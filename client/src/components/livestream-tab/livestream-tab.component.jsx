import React from 'react';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import LivestreamComments from '../livestream-comments/livestream-comments.components';
import LivestreamParticipants from '../livestream-participants/livestream-participants.components';
import VideoBox from '../video-box/video-box.component';

import { LivestreamTabContainer } from './livestream-tab.styles'

const LivestreamTab = (props) => {
  const [value, setValue] = React.useState(1);

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
    <LivestreamTabContainer>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={'hide-on-desktop'} label="Speaker" />
        <Tab label="Participants" />
        <Tab label="Comments" />
    </Tabs>
      <TabPanel className={'hide-on-desktop'} index={0} value={value}>
          <VideoBox { ...props } />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <LivestreamParticipants { ...props } />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <LivestreamComments /> 
      </TabPanel>
    </LivestreamTabContainer>
  );
}

export default LivestreamTab;