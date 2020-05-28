import React, { FC } from "react";
import { Box, Anchor } from "grommet";
import Card from "./Card";
import { SearchResult } from "../api/utils";

interface SearchResultsProps {
	results?: Array<SearchResult>;
}

const SearchResults: FC<SearchResultsProps> = ({ results }) => {
	return (
		<Box direction="row" justify="evenly" wrap>
			{results?.map(
				({ link, title, thumbnails, description, commentCount }) => (
					<Card key={title}>
						<Anchor
              target="_blank"
							title={title}
							href={link}
							style={{
								textOverflow: "ellipsis",
								whiteSpace: "nowrap",
								overflow: "hidden",
							}}
							label={title}
						/>
						<img
							alt="Video thumbnail"
							src={thumbnails.default.url}
							height={!!description ? thumbnails.default.height : "50%"}
							width={!!description ? thumbnails.default.width : "100%"}
							style={{ alignSelf: "center" }}
						/>
						{!!description && (
							<p
                title={description}
								style={{
									textOverflow: "ellipsis",
									overflow: "hidden",
								}}
							>
								{description}
							</p>
						)}

						<span>Total Comments: {commentCount}</span>
					</Card>
				)
			)}
		</Box>
	);
};

export default SearchResults;
