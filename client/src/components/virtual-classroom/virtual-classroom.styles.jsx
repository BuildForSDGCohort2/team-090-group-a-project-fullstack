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
    width: 40%;
    height: 100%;
    background-color: white;
    border-left: 1px solid rgba(0,0,0,0.2);
    padding: 5px;

    .enter-btn-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height:100%;
        .enter-btn, .enter-btn:hover {
            background-color: #d32f2f;
            color: white;
    }
    }
    
`;

export const LeftContentContainer = styled.div`
    width: 60%;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const VideoBoxContainer = styled.div`
    width: 90%;
    height: 90%;
    background-color: white;
    position: relative;
    .loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        background-color:#eee;
    }
    
`;


export const ButtonContainer = styled(Button)`
`