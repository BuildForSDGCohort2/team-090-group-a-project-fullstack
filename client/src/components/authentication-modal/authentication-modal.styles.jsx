import styled from 'styled-components';

export const AuthenticationModalContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);

    .box{
        position:  absolute;
        width: 40%;
        height: 60vh;
        border-radius: 8px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        border: solid #fff 1px;
        text-align: center;

        @media screen and (max-width: 800px) {
            width: 90%;
        }

        .backdrop-logo{
            padding: 0.5em;
            margin-top: 0;
            width: 100%;
            background: #5E5E5E20;
            box-sizing: border-box;
        }

        p{
            width: 80%;
            font-size: 20px;
            margin: auto;
        }

        button {
            position: relative;
            top: 100px;
            border: none;
            border-radius: 5px;
            background-color: blue;
            color: white;
            padding: 10px;
            outline: none !important;
            cursor: pointer;
        }
    }
`