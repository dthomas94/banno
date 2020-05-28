import React from "react";
import { render } from "@testing-library/react";
import SearchResultCard from "../SearchResultCard";

const result = {
	link: "",
	channelId: "",
	channelTitle: "",
	commentCount: "",
	description: "",
	liveBroadcastContent: "",
	publishTime: "",
	publishedAt: "",
	thumbnails: {
		default: {
			height: 300,
			url: "https://placekitten.com/300/300",
			width: 300,
		},
		medium: {
			height: 600,
			url: "https://placekitten.com/600/600",
			width: 600,
		},
		high: { height: 600, url: "https://placekitten.com/600/900", width: 900 },
	},
	title: "",
};

test("renders thumbnail at half width of card if there is no description", () => {
  const { getByAltText } = render(<SearchResultCard result={result} />);
  const thumbnail = getByAltText('Video thumbnail');
  expect(thumbnail).toHaveAttribute('height', '50%');
  expect(thumbnail).toHaveAttribute('width', '100%');
});

test("renders thumbnail at default res if there is a description", () => {
	const { getByAltText } = render(
		<SearchResultCard result={{ ...result, description: "cat video" }} />
  );
  const thumbnail = getByAltText('Video thumbnail');
  expect(thumbnail).toHaveAttribute('height', `${result.thumbnails.default.height}`);
  expect(thumbnail).toHaveAttribute('width', `${result.thumbnails.default.width}`);
});
