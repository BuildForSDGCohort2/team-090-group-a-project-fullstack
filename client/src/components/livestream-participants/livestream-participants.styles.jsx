import styled from 'styled-components';

export const LivestreamParticipantsContainer = styled.div`
    width:100%;
    height: 400px;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding:5px;
    display: "grid";
    grid-template-columns: 50px 50px;
    grid-template-rows: 50px 50px;

    .local-stream-wrapper {
        height: 100%;
        max-height: 250px;
    }

    .video-display-wrapper {
        width: 40%;
        height: 100%;
        max-height: 100px;
        margin: 10px;
    }
`;