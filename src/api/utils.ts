import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyBHFEYpu7lrGgFLqq-3RdM4CW5xQ3Ryk1c";

export enum ORDER_BY {
	DATE = "Date",
	RATING = "Rating",
	RELEVANCE = "Relevance",
}

interface Thumbnail {
	height: number;
	url: string;
	width: number;
}

export interface SearchResult {
	link: string;
	channelId: string;
	channelTitle: string;
	commentCount: string;
	description: string;
	liveBroadcastContent: string;
	publishTime: string;
	publishedAt: string;
	thumbnails: {
		default: Thumbnail;
		medium: Thumbnail;
		high: Thumbnail;
	};
	title: string;
}

export const getSearchResults = async (searchTerm: string, orderBy: string) => {
	try {
		const { data } = await axios.get(`${BASE_URL}/search`, {
			params: {
				key: API_KEY,
				part: "snippet",
				type: "video",
				maxResults: 50,
				q: searchTerm,
				order: orderBy,
			},
		});
		const items = await Promise.all(
			data.items.map(async (item: any) => {
				const videoId = item.id.videoId;
				const commentCount = await getNumVideoComments(videoId);
				return {
					link: `http://youtu.be/${videoId}`,
					...item.snippet,
					commentCount,
				} as SearchResult;
			})
		);
		return items;
	} catch (error) {
		console.error(error);
	}
};

export const getNumVideoComments = async (videoId: string) => {
	try {
		const { data } = await axios.get(`${BASE_URL}/videos`, {
			params: {
				key: API_KEY,
				part: "statistics",
				id: videoId,
			},
		});
		const commentCount = data.items[0].statistics.commentCount;
		return commentCount;
	} catch (error) {
		console.error(error);
	}
};
