import styled from "styled-components";

import { Grid } from '@material-ui/core';

import { ReactComponent as UserMenu } from '../../assets/image.svg';

export const ClassroomHomeContainer = styled.div`

`;

export const FirstGrid = styled(Grid)`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;	
    align-items: center;
    background-color:  rgba(238, 147, 147, 0.525424);
    padding: 35px 35px 35px 20px;
    border-radius: 16px 16px 0px 0px;
    margin-bottom: 0;
    margin-top: 2em;
`

export const SecondGrid = styled(Grid)`
    margin-top: 0;
    background-color: white;
    padding: 7px 7px 7px 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 16px 16px;
`;

export const SecondSection = styled.div`
    display: flex; 
    justify-content: space-between;
    flex-wrap: wrap;	
    align-items: flex-start;
    border-radius: 16px 16px 0px 0px;
    margin-top: 4em;
`;

export const ClassworkContainer = styled.div`
    height: 200px;
    width: 20%;
    min-width: 200px;
    padding: 26px 0px;
`;

export const InteractionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 330px;
    width: 8%;
    min-width: 300px;
`;

export const WorkBoxContainer = styled.div`
    width: 100%;
    height: 150px;
    border: 0.5px solid #000000;
    border-radius: 15px;
    padding: 15px 20px;
`;

export const LinkContainer = styled.div`
    margin-top: 40px;
    float: right;
`;

export const InputBoxContainer = styled.div`
    width: 100%;
    height: 90px;
    border: 0.5px solid #000000;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 15px 20px;
`;

export const InteractionBoxContainer = styled.div`
    width: 100%;
    height: 170px;
    border: 0.5px solid #000000;
    border-radius: 15px;
    padding: 15px 20px;
`

export const UserMenuContainer = styled(UserMenu)`
    transform: scale(3);
    margin-right: 35px;
`