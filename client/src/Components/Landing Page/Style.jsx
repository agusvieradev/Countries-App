import styled from "styled-components";

export const Style = styled.div`
    background-image: url(https://wallpaperaccess.com/full/1087821.jpg);
    background-size: cover;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%; 
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 15rem;
        margin-right: 55rem;
        
        .title{
            position: relative;
            text-transform: uppercase;
            font-size: 20px;
            font-family: 'Catamaran', sans-serif;
            color: rgba(white, 0.8);
            &:before {
                position: absolute;
                color: rgba(blue, 0.8);
                top: 5px;
                left: 10px;
            }
            &:after {
                z-index: -1;
                position: absolute;
                color: rgba(red, 0.8);
                top: -5px;
                left: 8px;
            }
        }
    }
`