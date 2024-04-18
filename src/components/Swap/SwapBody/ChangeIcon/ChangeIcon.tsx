import * as React from 'react';
import './ChangeIcon.scss';
interface IChangeIcon{
    className?:string
}
export const ChangeIcon: React.FC<IChangeIcon> = ({className}) => {
    return (
        <div className={["ChangeIcon",className].join(" ")}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="15.000000pt" height="15.000000pt" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path fill="#fff" d="M171 577 c-7 -7 -11 -79 -11 -221 l0 -210 -34 33 c-34 33 -65 38 -74 13 -2 -7 25 -43 61 -78 75 -76 72 -76 156 9 36 37 52 61 48 71 -10 25 -38 19 -74 -16 l-33 -32 0 216 c0 174 -3 217 -14 221 -7 3 -19 0 -25 -6z" />
                    <path fill="#fff" d="M383 527 c-47 -45 -64 -69 -60 -81 10 -25 38 -19 74 16 l33 32 0 -216 c0 -174 3 -217 14 -221 32 -12 36 16 36 227 l0 210 34 -33 c33 -32 65 -38 73 -14 5 13 -89 118 -120 134 -15 8 -30 -1 -84 -54z" />
                </g>
            </svg>
        </div>
    );
};
