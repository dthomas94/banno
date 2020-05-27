import React, { FC } from "react";
import { Box } from "grommet";
import Card from "./Card";
import { SearchResult } from "../api/utils";

interface SearchResultsProps {
	results?: Array<SearchResult>;
}

const SearchResults: FC<SearchResultsProps> = ({ results }) => {
	return (
		<Box fill direction="row" overflow="wrap" justify="between">
			{results?.map(({ title, thumbnails, description, commentCount }) => (
				<Card key={title}>
					<span>{title}</span>
					<img
						alt="Video thumbnail"
						src={thumbnails.default.url}
						height={thumbnails.default.height}
						width={thumbnails.default.width}
					/>
          <p>{description}</p>
          <span>{commentCount}</span>
				</Card>
			))}
		</Box>
	);
};

export default SearchResults;
