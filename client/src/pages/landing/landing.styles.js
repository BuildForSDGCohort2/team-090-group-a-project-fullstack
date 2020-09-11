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
        height: 60vh;
        border-radius: 8px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: whitesmoke;
        border: solid #5E5E5E 1px;
        text-align: center;

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
    }
`