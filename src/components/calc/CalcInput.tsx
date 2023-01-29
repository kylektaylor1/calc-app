import { Entry } from './CalculatorFrame';

type Props = {
	entry: Entry;
};

export const CalcInput = ({ entry }: Props) => {
	const topFieldDisplay = entry?.currNum ? (entry?.prevNum ? entry?.prevNum : ``) : ` `;
	const bottomFieldDisplay = entry?.prevNum ? (entry?.currNum ? entry?.currNum : entry?.prevNum) : ` `;

	return (
		<div className='flex flex-col gap-2 transition-all justify-evenly'>
			<div className='font-mono font-light text-slate-500 text-xl text-right break-all'>{topFieldDisplay}</div>
			<div className='text-white font-mono font-bold text-5xl text-right break-all'>{bottomFieldDisplay}</div>
		</div>
	);
};
