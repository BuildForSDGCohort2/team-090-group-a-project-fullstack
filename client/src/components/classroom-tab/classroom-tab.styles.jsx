import styled from 'styled-components';

export const ClassroomTabContainer = styled.div`
    margin: auto;
    width: 100%;
    max-width: 100%;
    overflow: hidden;

    .hide-on-desktop {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .hide-on-desktop {
            display: block;
        }
    }
`;