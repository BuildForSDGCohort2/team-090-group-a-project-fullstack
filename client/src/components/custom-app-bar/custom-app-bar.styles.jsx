import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';

export const LogoContainer = styled.div`
  cursor: pointer;
`;


export const AppBarContainer = styled(AppBar)`
    background-color: white;
    .grow {
        flex-grow: 1;
    };
    position: relative;
    overflow: hidden;
    width: 100vw;
    max-width: 100vw;
`