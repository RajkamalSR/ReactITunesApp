import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchResults } from './redux/store/index';
import { useAppDispatch } from './redux/store/index'

interface State {
  searchTerm: string;
  results: Array<any>;
  loading: boolean;
  error: any;
}

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const state = useSelector((state: State) => state);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchResults(inputValue));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

      {state.loading && <div>Loading...</div>}

      {state.error && <div>Error: {state.error}</div>}

      {state.results.map((result: any) => (
        <div key={result.trackId}>
          <img src={result.artworkUrl60} alt={result.trackName} />
          <div>{result.trackName}</div>
          <div>{result.artistName}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
