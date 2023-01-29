import { useImmerReducer } from 'use-immer';
import { z } from 'zod';
import { DeleteButton } from '../buttons/DeleteButton';
import { NumButton } from '../buttons/NumButton';
import { OperatorButton } from '../buttons/OperatorButton';
import { ResetButton } from '../buttons/ResetButton';
import { CalcInput } from './CalcInput';

export const EntrySchema = z.object({
	prevNum: z.string().optional(),
	currNum: z.string().optional(),
	operator: z.enum([`ADD`, `SUBTRACT`, `MULTIPLY`, `DIVIDE`]).optional(),
	overwrite: z.boolean(),
});

export type Entry = z.infer<typeof EntrySchema>;

const operatorSchema = EntrySchema.pick({ operator: true }).shape.operator;
export type Operator = z.infer<typeof operatorSchema>;

export const actionSchema = z.enum([`OPERATOR`, `VALUE`, `CALCULATE`, `RESET`, `DELETE`, `DECIMAL`]);
export type Action = z.infer<typeof actionSchema>;

export const CalculatorFrame = () => {
	const initEntry: Entry = {
		prevNum: undefined,
		currNum: undefined,
		operator: undefined,
		overwrite: true,
	};

	const reducer = (draft: Entry, { value, op, type }: { value?: number; op?: Operator; type: Action }) => {
		switch (type) {
			case `RESET`:
				return {
					...draft,
					prevNum: undefined,
					currNum: undefined,
					operator: undefined,
					overwrite: true,
				};
			case `DECIMAL`:
				if (draft?.currNum === undefined) {
					const valArr = draft?.prevNum?.split(``) ?? [];
					if (valArr.includes('.')) return draft;
					valArr?.push('.');
					return {
						...draft,
						prevNum: valArr?.join(``),
						overwrite: false,
					} satisfies Entry;
				}

				if (draft?.prevNum && draft?.currNum) {
					const valArr = draft?.currNum?.split(``) ?? [];
					if (valArr.includes('.')) return draft;
					valArr?.push('.');
					return {
						...draft,
						currNum: valArr?.join(''),
						overwrite: false,
					} satisfies Entry;
				}
				break;
			case `DELETE`:
				if (draft?.currNum === undefined) {
					const valueArr = draft?.prevNum?.split(``);
					const newValue = valueArr?.slice(0, valueArr.length - 1).join(``);
					return {
						...draft,
						prevNum: newValue,
						overwrite: false,
					} satisfies Entry;
				}

				if (draft?.prevNum && draft?.currNum) {
					const valueArr = draft?.currNum?.split(``);
					const newValue = valueArr?.slice(0, valueArr.length - 1).join(``);
					return {
						...draft,
						currNum: newValue,
						overwrite: false,
					} satisfies Entry;
				}
				break;
			case `OPERATOR`:
				if (draft?.operator && draft?.currNum && draft?.prevNum) {
					return {
						...draft,
						operator: op,
						overwrite: true,
						prevNum: draft?.currNum,
						currNum: undefined,
					} satisfies Entry;
				}

				return {
					...draft,
					operator: op,
					overwrite: true,
				} satisfies Entry;
			case `VALUE`:
				if (draft?.prevNum === undefined && draft?.overwrite === true && !draft?.operator) {
					return {
						...draft,
						prevNum: `${value}`,
						overwrite: false,
					} satisfies Entry;
				}

				if (draft?.overwrite === false && !draft?.operator)
					return { ...draft, prevNum: `${draft?.prevNum ?? ``}${value}` } satisfies Entry;

				if (draft?.currNum === undefined && draft?.overwrite === true && draft?.operator) {
					return {
						...draft,
						currNum: `${value}`,
						overwrite: false,
					} satisfies Entry;
				}

				if (!draft?.overwrite && draft?.operator) {
					return {
						...draft,
						currNum: `${draft?.currNum ?? ``}${value}`,
					} satisfies Entry;
				}

				if (draft?.overwrite && draft?.operator) {
					console.log(`overwrite & op true`);
					return {
						...draft,
						currNum: `${value}`,
						overwrite: false,
					} satisfies Entry;
				}

				break;
			case `CALCULATE`:
				console.log(`calc occurred`);
				if (draft?.operator === `ADD`) {
					const result = Number(draft?.prevNum) + Number(draft?.currNum);
					return {
						...draft,
						currNum: result.toString(),
						prevNum: draft?.currNum,
						// overwrite: false,
					} satisfies Entry;
				}

				if (draft?.operator === `SUBTRACT`) {
					const result = Number(draft?.prevNum) - Number(draft?.currNum);
					return { ...draft, currNum: result.toString() } satisfies Entry;
				}

				if (draft?.operator === `MULTIPLY`) {
					const result = Number(draft?.prevNum) * Number(draft?.currNum);
					return { ...draft, currNum: result.toString() } satisfies Entry;
				}

				if (draft?.operator === `DIVIDE`) {
					const result = Number(draft?.prevNum) / Number(draft?.currNum);
					return { ...draft, currNum: result.toString() } satisfies Entry;
				}

				break;
		}
	};

	const [entry, dispatch] = useImmerReducer(reducer, initEntry);

	console.log(entry);

	return (
		<div className='max-w-[448px]'>
			<div className='flex items-center justify-end bg-slate-900 mb-4 p-4 min-h-[116px] rounded-xl w-full'>
				<CalcInput entry={entry} />
			</div>
			<div className='bg-slate-900 rounded-xl'>
				<div className='grid grid-cols-4 place-items-center gap-2 p-4'>
					<div className='p-2'>
						<NumButton
							dispatch={dispatch}
							value={7}
						/>
					</div>
					<div className='p-2'>
						<NumButton
							dispatch={dispatch}
							value={8}
						/>
					</div>
					<div className='p-2'>
						<NumButton
							dispatch={dispatch}
							value={9}
						/>
					</div>
					<div className='p-2 w-full h-full'>
						<DeleteButton dispatch={dispatch} />
					</div>
					<div className='p-2'>
						<NumButton
							dispatch={dispatch}
							value={4}
						/>
					</div>
					<div className='p-2'>
						<NumButton
							dispatch={dispatch}
							value={5}
						/>
					</div>
					<div className='p-2'>
						<NumButton
							dispatch={dispatch}
							value={6}
						/>
					</div>
					<div className='p-2'>
						<OperatorButton
							op={`ADD`}
							dispatch={dispatch}
						/>
					</div>
					<div className='p-2'>
						<NumButton
							dispatch={dispatch}
							value={1}
						/>
					</div>
					<div className='p-2'>
						<NumButton
							dispatch={dispatch}
							value={2}
						/>
					</div>
					<div className='p-2'>
						<NumButton
							dispatch={dispatch}
							value={3}
						/>
					</div>
					<div className='p-2'>
						<OperatorButton
							op={`SUBTRACT`}
							dispatch={dispatch}
						/>
					</div>
					<div className='p-2'>
						<button
							className='bg-red-200 text-slate-900 text-3xl font-mono rounded-lg w-full px-8 py-2 items-center justify-center'
							onClick={() => {
								dispatch({ type: `DECIMAL` });
							}}
						>
							<div className='w-full px-auto'>{`.`}</div>
						</button>
					</div>
					<div className='p-2'>
						<NumButton
							dispatch={dispatch}
							value={0}
						/>
					</div>
					<div className='p-2'>
						<OperatorButton
							op={`DIVIDE`}
							dispatch={dispatch}
						/>
					</div>
					<div className='p-2'>
						<OperatorButton
							op={`MULTIPLY`}
							dispatch={dispatch}
						/>
					</div>
				</div>
				<div className='flex flex-row gap-4 px-6 pb-4'>
					<ResetButton dispatch={dispatch} />
					<button
						className='flex items-center justify-center py-2 bg-orange-300 text-2xl font-mono text-black text-center w-full rounded-lg hover:bg-orange-400 transition-all'
						onClick={(e) => {
							dispatch({ type: `CALCULATE` });
						}}
					>
						<div>{`=`}</div>
					</button>
				</div>
			</div>
		</div>
	);
};
