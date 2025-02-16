import './App.scss';

import Logo from '@assets/reactLogo.svg';
import Button from '@shared/Button';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="test-class flex flex-col items-center justify-center gap-4 text-4xl">
      <h1>Title</h1>
      <Logo height={500} width={'auto'} />
      <Button label="button1" />
    </div>
  );
};

export default App;
