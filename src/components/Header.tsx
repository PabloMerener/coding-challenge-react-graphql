import { AppContextType, useAppStore } from '../context/AppContext';

export function Header() {
  const context = useAppStore() as AppContextType;

  return (
    <header style={{ background: 'red' }}>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div>$ {context.total}</div>
    </header>
  );
}
