import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

export const CardContainer = styled(Card)`
    .avatar {
        background-color: #c62828;
        color: white;
    }
`;

export const CardActionAreaContainer = styled(CardActionArea)`
    min-height: 200px;
`;