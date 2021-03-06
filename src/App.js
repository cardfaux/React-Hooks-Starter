import React, { useRef, createContext, useMemo } from 'react';
import Toggle from './Toggle';
import Counter from './Counter';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {
	//const [value, setValue] = useState(initialState)

	const [name, setName] = useTitleInput('');
	const ref = useRef();

	const reverseWord = (word) => {
		console.log('function called');
		return word
			.split('')
			.reverse()
			.join('');
	};

	const title = 'Level Up Dishes';

	const TitleReversed = useMemo(() => reverseWord(title), [title]);

	return (
		<UserContext.Provider
			value={{
				user: true
			}}
		>
			<div className='main-wrapper' ref={ref}>
				<h1 onClick={() => ref.current.classList.add('new-fake-class')}>
					Level Up Dishes
					{/* {TitleReversed} */}
				</h1>
				<Toggle />
				<Counter />
				{TitleReversed}
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<input
						type='text'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<button>Submit</button>
				</form>
			</div>
		</UserContext.Provider>
	);
};

export default App;
