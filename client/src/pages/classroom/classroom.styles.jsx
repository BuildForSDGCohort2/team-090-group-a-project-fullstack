import styled from "styled-components";

export const ClassroomPageContainer = styled.div`
    position: relative;
    width: 100vw;
    max-width: 100vw;
    overflow: hidden;
    background-color: white;
`;

export const ClassroomSectionContainer = styled.div`
    position: relative;
    top:0;
    left: 0;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100%;
    overflow: hidden;

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

    @media screen and (max-width: 800px) {
        .classroom-left, .classroom-middle {
            display: none;
        }

        .classroom-right {
            width: 100vw;
            overflow: hidden;
        }
    }
`