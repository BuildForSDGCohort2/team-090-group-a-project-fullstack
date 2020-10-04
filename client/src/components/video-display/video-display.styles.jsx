import styled from 'styled-components';

export const VideoDisplayContainer = styled.div`
    position: relative;
    display: block;
    background-color: white;
    border: none;
    margin: 10px;
    

    video {
        width: 100%;
        height: auto;
    }
    .video-container {
        width: 100%;
        display: flex;
        align-self: center;
    }

    .controls-container {
        position: relative;
        width: 100%;
        background-color: white;
        border: none;
        
        .controls {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-evenly;

            .control-btn {
                color: #1565c0;
            }
        }
    }
`