import { AppContextType, useAppStore } from '../context/AppContext';
import styled from "styled-components";

export function Header() {
  const context = useAppStore() as AppContextType;

  const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: red;
    padding: 1em;
  `;

  const TotalContainer = styled.div`
    color: white;
    font-weight: bold;
    font-size: 24px;
  `;

  return (
    <HeaderContainer>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <TotalContainer>
          Total $ {context.total}
      </TotalContainer>
    </HeaderContainer>
  );
}
