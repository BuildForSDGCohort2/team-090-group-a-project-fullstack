import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const VirtualClassroomContainer = styled.div`
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 2;
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
    border-left: 1px solid transparent;
    padding: 5px;
    
    @media screen and (max-width: 800px) {
        width: 100%;
    }

    .enter-classroom-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height:100%;
        border: none;
        .hide-on-desktop {
            display: none;
        }

        .enter-btn-container {
            .enter-btn, .enter-btn:hover {
                background-color: #d32f2f;
                color: white;
            }
        } 

        @media screen and (max-width: 800px) {
            .hide-on-desktop {
                display: block;
            }
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

    @media screen and (max-width: 800px) {
        display: none;
    }
`;


export const ButtonContainer = styled(Button)`
`