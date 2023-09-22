import styled, {keyframes} from "styled-components";

const gradient  = keyframes`
    0%{background-position:0% 67%}
    50%{background-position:100% 34%}
    100%{background-position:0% 67%}
`;

export const CardTomorrowContainerStyle = styled.div`
  width: 100%;
  height: 25%;
  background: linear-gradient(201deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  background-size: 400% 400%;
  animation: ${gradient} 30s ease infinite;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
`;

export const CardDailyContainerStyle = styled(CardTomorrowContainerStyle)`
  height: 30%;
  flex-direction: column;
  padding: 3% 0;
`;