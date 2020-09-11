import styled from 'styled-components';

export const Style = styled.div`

    .oops {
        text-align: center;
        width: 35vw;
        padding-top: 3em;
        margin: auto;

        @media screen and (max-width: 800px) {
        width: 50vw;
    }
    }
        
    .comment{
        text-align: center;
        color: #5E5E5E;
        width: 75%;
        margin: auto;

    }

`

export const BackdropStyle = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #00000040;

    .box{
        position:  absolute;
        width: 40%;
        height: 65vh;
        border-radius: 8px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: whitesmoke;
        border: solid #5E5E5E 1px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media screen and (max-width: 1200px) {
            width: 60%;
        }

        @media screen and (max-width: 800px) {
            width: 80%;
        }

        .first{
            flex: 1;
        }

        hr{
            background-color: #00000099;
            width: 80%;
            height: 1px;
            border: none;
        }

        .last{
            flex: 1;
            margin-bottom: 1em;
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
            font-size: 13px;
            margin: auto;
        }

        .below{
            width: 80%;
            position: absolute;
            bottom: 1em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
        }
    }
`

export const Button = styled.button `
    position: absolute;
    border: none;
    color: white;
    background-color: blue;
    padding: 15px 40px;
    border-radius: 2px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 5em;
`