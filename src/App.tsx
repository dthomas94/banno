import React, { useState } from "react";
import { Box, Main, Header } from "grommet";
import { SearchResultCard, Search } from "./components";
import { SearchResult } from "./api/utils";

const App = () => {
	const [searchResults, setSearchResults] = useState<Array<SearchResult>>();

	return (
		<Box>
			<Header width="100%" justify="center">
				<Search setSearchResults={setSearchResults} />
			</Header>
			<Main>
				<Box direction="row" justify="evenly" wrap>
					{searchResults?.map((result) => (
						<SearchResultCard result={result} />
					))}
				</Box>
			</Main>
		</Box>
	);
};

export default App;
