import React from 'react';
import { Action, Operator } from '../calc/CalculatorFrame';

type Props = {
	dispatch: (operator: { type: Action }) => void;
};

export const DeleteButton = ({ dispatch }: Props) => {
	return (
		<button
			className='bg-red-200 text-slate-900 text-3xl drop-shadow-sm font-mono rounded-lg p-auto h-full w-full items-center justify-center hover:bg-red-300 transition-all'
			onClick={() => {
				dispatch({ type: `DELETE` });
			}}
		>
			<div className='w-full px-auto'>{`DEL`}</div>
		</button>
	);
};
