import styled from "styled-components"
export const CardTomorrowContainerStyle = styled.div`
    width: 100%;
    height: 25%;
    background: linear-gradient(170deg, rgba(9,9,121,1) 0%, rgba(9,9,121,1) 25%, rgba(0,212,255,1) 100%);
    border-radius: 30px;
    display: flex;
    justify-content: space-around;
`
export const CardDailyContainerStyle = styled(CardTomorrowContainerStyle)`
    height: 30%;
    flex-direction: column;
    padding: 3% 0;
`