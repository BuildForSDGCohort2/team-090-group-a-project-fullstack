import styled from "styled-components";

export const ClassroomPageContainer = styled.div`
    flex-grow: 1;
    width: 100%;
`;

export const ClassroomSectionContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    .classroom-left {
        width: 30%;
    }

    .classroom-middle {
        width: 40%;
    }

    .classroom-right {
        width: 30%;
    }

    .classroom-left, .classroom-right, .classroom-middle {
        height: 100%;
    }
`