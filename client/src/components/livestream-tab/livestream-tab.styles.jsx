import styled from 'styled-components';

export const LivestreamTabContainer = styled.div`
    .hide-on-desktop {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .hide-on-desktop {
            display: block;
        }
    }
`;