import React, { useState } from 'react';
import { Box, Main, Header } from 'grommet';
import {Search, SearchResults} from './components';

const App = () => {
  const [searchResults, setSearchResults] = useState();

  return (
    <Box>
      <Header width="100%" justify="center">
        <Search setSearchResults={setSearchResults} />
      </Header>
      <Main>
        <SearchResults results={searchResults} />
      </Main>
    </Box>
  );
}

export default App;
