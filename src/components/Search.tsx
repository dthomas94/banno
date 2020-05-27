import React, { FC, useState, useEffect } from "react";
import { TextInput, Box, Select } from "grommet";
import { ORDER_BY, getSearchResults } from "../api/utils";

interface SearchProps {
	setSearchResults: React.Dispatch<React.SetStateAction<undefined>>;
}

const Search: FC<SearchProps> = ({ setSearchResults }) => {
	const [searchValue, setSearchValue] = useState("");
	const [orderByValue, setOrderByValue] = useState(ORDER_BY.DATE);

	useEffect(() => {
		async function search() {
			const results = await getSearchResults(searchValue, orderByValue);
			setSearchResults(results as any);
		}
		if (searchValue) {
			search();
		}
  }, [searchValue, orderByValue, setSearchResults]);
  
	return (
		<Box>
			<TextInput
				placeholder="Enter search term..."
				value={searchValue}
				onChange={(evt): void => setSearchValue(evt.target.value)}
			/>
			<Select
				options={[ORDER_BY.DATE, ORDER_BY.RATING, ORDER_BY.RELEVANCE]}
				value={orderByValue}
				onChange={({ option }): void => setOrderByValue(option)}
			/>
		</Box>
	);
};

export default Search;
