import React, { FC, useState, useEffect } from "react";
import { TextInput, Box } from "grommet";
import { ORDER_BY, getSearchResults } from "../api/utils";
// import { debounce } from "lodash"; /* add debounce for getting search results */

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
    };
    
		if (searchValue) {
			search();
		}
	}, [searchValue, orderByValue, setSearchResults]);

	return (
		<Box direction="row">
			<Box width="200px" justify="end">
				<TextInput
					placeholder="Search"
					value={searchValue}
					onChange={(evt): void => setSearchValue(evt.target.value)}
				/>
			</Box>
			<select
				onChange={(e) => setOrderByValue(e.target.value as any)}
				name="orderBy"
			>
				<option value={ORDER_BY.DATE}>{ORDER_BY.DATE}</option>
				<option value={ORDER_BY.RATING}>{ORDER_BY.RATING}</option>
				<option value={ORDER_BY.RELEVANCE}>{ORDER_BY.RELEVANCE}</option>
			</select>
		</Box>
	);
};

export default Search;
