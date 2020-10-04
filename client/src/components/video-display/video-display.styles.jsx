import styled from 'styled-components';

export const VideoDisplayContainer = styled.div`
    position: relative;
    display: flex;
    align-self: center;
    width: 100%;
    height: 100%;
    display: block;
    background-color: white;
    border: none;
    margin: 10px;

    video {
        width: 100%;
        height:100%;
    }
    .video-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-self: center;
    }

    .controls-container {
        position: absolute;
        bottom: 0;
        left: 0;
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