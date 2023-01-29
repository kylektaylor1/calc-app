import React from 'react';
import { Action, Operator } from '../calc/CalculatorFrame';

type Props = {
	op: Operator;
	dispatch: (operator: { op: Operator; type: Action }) => void;
};

export const OperatorButton = ({ op, dispatch }: Props) => {
	let displaySymbol: string;
	switch (op) {
		case `ADD`:
			displaySymbol = `+`;
			break;
		case `SUBTRACT`:
			displaySymbol = `-`;
			break;
		case `MULTIPLY`:
			displaySymbol = `*`;
			break;
		case `DIVIDE`:
			displaySymbol = `/`;
			break;
		default:
			displaySymbol = `@`;
	}
	return (
		<button
			className='bg-slate-200 drop-shadow-sm text-slate-900 text-3xl font-mono rounded-lg px-8 py-2 items-center justify-center hover:bg-slate-400 transition-all'
			onClick={() => {
				dispatch({ op, type: `OPERATOR` });
			}}
		>
			{displaySymbol}
		</button>
	);
};
