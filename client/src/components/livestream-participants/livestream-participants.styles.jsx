import styled from 'styled-components';

export const LivestreamParticipantsContainer = styled.div`
    width:100%;
    height: 400px;
    min-height: 90vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding:5px;

    .local-stream-wrapper {
        height: 100%;
        max-height: 250px;
    }

    .video-display-wrapper {
        width: 45%;
        height: 250px;
        margin: 10px;
        float: left;
    }
`;