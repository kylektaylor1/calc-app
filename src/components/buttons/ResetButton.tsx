import React from 'react';
import { Operator, Action } from '../calc/CalculatorFrame';

type Props = {
	dispatch: (operator: { type: Action }) => void;
};

export const ResetButton = ({ dispatch }: Props) => {
	return (
		<button
			className='flex items-center justify-center py-2 bg-orange-300 text-2xl font-mono text-black text-center w-full rounded-lg hover:bg-orange-400 transition-all'
			onClick={(e) => {
				dispatch({ type: `RESET` });
			}}
		>
			<div>{`Reset`}</div>
		</button>
	);
};
