import React from 'react';
import { EqualButton } from '../buttons/EqualButton';
import { NumButton } from '../buttons/NumButton';
import { ResetButton } from '../buttons/ResetButton';

export const CalculatorFrame = () => {
	return (
		<div>
			<div className='grid grid-cols-4 place-items-center gap-2 bg-slate-900 rounded-xl p-4'>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='p-2'>
					<NumButton />
				</div>
				<div className='col-span-2'>
					<ResetButton />
				</div>
				<div className='col-span-2'>
					<EqualButton />
				</div>
			</div>
		</div>
	);
};
