import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';

export const PostNewAnnouncementCountainer = styled(Paper)`
    padding: 10px;

    .action {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        
        .grow {
            flex-grow: 1
        }

        .button {
            background-color: #1565c0;
            color: white;
        }
    }
`