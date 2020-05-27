import React, { useState } from 'react';
import { Box, Header, Main } from 'grommet';
import {Search, SearchResults} from './components';

const App = () => {
  const [searchResults, setSearchResults] = useState();

  return (
    <Box>
      <Header>
        <Search setSearchResults={setSearchResults} />
      </Header>
      <Main>
        <SearchResults results={searchResults} />
      </Main>
    </Box>
  );
}

export default App;
