import './App.css';
import Input from './components/atoms/Input';
import searchIcon from './assets/search-icon.svg';
import { useState } from 'react';
import Table from './components/atoms/Table';

function App() {
  const [search, setSearch] = useState('');

  return (
    <main>
      <section>
        <Input
          type='text'
          value={search}
          setValue={setSearch}
          placeholder='Search'
          icon={searchIcon}
        />
        <Table columns={4} rows={3}/>
      </section>
    </main>
  );
}

export default App;
