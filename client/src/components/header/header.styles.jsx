import styled from 'styled-components';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    overflow-x: hidden;
    z-index: 2;

    @media screen and (max-width: 800px) {
        height: 50px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const UserMenuContainer = styled(Menu)`

`;

export const ClassroomMenuContainer = styled(Menu)`

`;

export const StyledMenuItem = styled(MenuItem)`

`;

export const MenuContainer = styled.div`
    height: 100%;
    width: 20px;
    padding: 2px 15px;
    display: flex;
    align-items: center;
    

    .menu {
        cursor: pointer;
    }

`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
    }

    a{
        text-decoration: none;
        font-weight: lighter;
    }
    .gb_cf{
        color: red;
    }
`;

export const OptionContainer = styled(Link)`

`;