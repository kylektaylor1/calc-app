import { useState } from 'react';
import { CalculatorFrame } from './components/calc/CalculatorFrame';

function App() {
	return (
		<div className='relative h-screen flex flex-col justify-center items-center'>
			<p className='font-mono text-2xl text-white mb-4'>Calculator</p>
			<CalculatorFrame />
		</div>
	);
}

export default App;
