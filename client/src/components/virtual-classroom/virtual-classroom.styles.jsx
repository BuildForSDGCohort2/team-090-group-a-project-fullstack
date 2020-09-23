import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const VirtualClassroomContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 20;
`;

export const VirtualClassroomContents= styled.div`
    position: relative;
    width: 100%;
    top: 100px;
`;


export const ButtonContainer = styled(Button)`
`