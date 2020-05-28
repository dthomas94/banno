import React, { FC, useState, useEffect, useCallback } from "react";
import { TextInput, Box } from "grommet";
import { ORDER_BY, getSearchResults } from "../api/utils";
import { debounce } from "lodash";

interface SearchProps {
	setSearchResults: React.Dispatch<React.SetStateAction<undefined>>;
}

const Search: FC<SearchProps> = ({ setSearchResults }) => {
	const [searchValue, setSearchValue] = useState("");
	const [orderByValue, setOrderByValue] = useState(ORDER_BY.DATE);

	const debouncedSearch = useCallback(
		debounce(async () => {
			const results = await getSearchResults(searchValue, orderByValue);
			setSearchResults(results as any);
		}, 700),
		[]
	);

	useEffect(() => {
		if (searchValue) {
			debouncedSearch();
		}
	}, [searchValue, orderByValue, debouncedSearch]);

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
