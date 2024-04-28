import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import './TokensModule.scss';

export function TokensModule() {
    const {tokens} = useAppSelector((state) => state.tokensReducer)
    return (
        <div className='TokensModule'>

        </div>
    );
}
