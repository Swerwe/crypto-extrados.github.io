import * as React from 'react';
import './Tokens.scss';
import { TokensModule } from '../../components/TokensModule/TokensModule';

export const Tokens: React.FC = () => {
  return (
    <div className="Tokens">
      <TokensModule size='large' className='tokens-full' />
    </div>
  );
};
