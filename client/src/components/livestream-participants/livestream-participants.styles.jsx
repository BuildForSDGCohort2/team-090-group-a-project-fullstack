import styled from 'styled-components';

export const LivestreamParticipantsContainer = styled.div`
    width:100%;
    height: 400px;
    min-height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    padding:5px;

    .local-stream-wrapper {
        display: block;
        margin: 0 auto;
        width: 70%;
    }

    .video-display-wrapper {
        width: 40%;
        overflow: hidden;
        margin: 10px;
        float: left;
        background-color: white;
    }
`;