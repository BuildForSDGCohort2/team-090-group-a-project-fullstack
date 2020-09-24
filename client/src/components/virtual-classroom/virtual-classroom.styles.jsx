import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const VirtualClassroomContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: white;
`;

export const VirtualClassroomContents= styled.div`
    position: relative;
    width: 100%;
    height: 90%;
    background-color: white;
    display: flex;
    flex-direction: row;
`;

export const RightContentContainer = styled.div`
    width: 30%;
    height: 100%;
    background-color: white;
    border-left: 1px solid rgba(0,0,0,0.2);
    padding: 5px;
`;

export const LeftContentContainer = styled.div`
    width: 70%;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const VideoBoxContainer = styled.div`
    width: 90%;
    height: 90%;
    background-color: black;
`;


export const ButtonContainer = styled(Button)`
`