import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    border-bottom: solid #5E5E5E40 1px;

    @media screen and (max-width: 800px) {
        height: 50px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`

export const LogoContainer = styled.div`
    height: 100%;
    padding: 2px 15px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
        padding: 0;
    }

    a {
            text-decoration: none;
            color: blue;
        }
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
    }
`;

export const OptionContainer = styled.div`
    padding: 10px 15px;
    color: red;

    .drop-down-container{
        background: transparent;
    }

    .dots{
        cursor: pointer;
        border-radius: 50%;
        background: transparent;
        transition: 0.2s;
        width: 25px;
        height: 25px;
        -moz-box-sizing: border-box; 
        -webkit-box-sizing: border-box; 
        box-sizing: border-box; 
    }

    .drop-down{
        display: block;
        position: absolute;
        color: whitesmoke;
        background: #5E5E5E;
        border-radius: 3px;
        top: 60px;
        right: 52px;
        font-size: 11px;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;

        p{
            padding: 5px 5px 6px 5px;
            text-align: center;
            margin: 0;
        }
    }

    .drop-down-menu{
        position: absolute;
        background: whitesmoke;
        width: 100px;
        height:  70px;
        border-radius: 3px;
        top: 101px;
        right: 37px;
        font-size: 14px;
        padding: 1.5em;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;

        a{
            position: absolute;
            text-align: center;
            width: 100%;
            color: black;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }

        .link1{
            position: relative;
            width: 100%;
            background: #5E5E5E;
            margin: 0 0 1em 0;
            height: 30px;
            text-align: center;
            border-radius: 3px;
        }
        .link2{
            position: relative;
            width: 100%;
            background: #5E5E5E;
            height: 30px;
            text-align: center;
            border-radius: 3px;
        }
    }
/*
    :hover .drop-down{
        position: absolute;
        top: 60px;
        right: 52px;
        display: block;
        visibility: visible;
        opacity: 1;
        transition: 0.3s;
    }

    .drop-down-container:hover .dots {
        background: #5E5E5E20;
        padding: 5px;
        transition: 0.2s;
        transform: scale(1.4);
    }

    */

   .drop-down-container:focus>.drop-down-menu{
        top: 61px;
        visibility: visible;
        opacity: 1;
        transition: 0.3s;
    }
`