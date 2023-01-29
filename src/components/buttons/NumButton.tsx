import { Action, Entry } from '../calc/CalculatorFrame';

type Props = {
	value: number;
	dispatch: (value: { value: number; type: Action }) => void;
};

export const NumButton = ({ value, dispatch }: Props) => {
	return (
		<button
			className='bg-slate-200 drop-shadow-sm text-slate-900 text-3xl font-mono rounded-lg px-8 py-2 items-center justify-center hover:bg-slate-400 transition-all'
			onClick={() => {
				dispatch({ value, type: `VALUE` });
			}}
		>
			{value}
		</button>
	);
};
