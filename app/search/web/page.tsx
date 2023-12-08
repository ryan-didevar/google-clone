import Link from "next/link";
import WebSearchResults from "./WebSearchResult";

interface Props {
  searchParams: {
    searchTerm: string;
    start?: string;
  };
}
export interface GoogleResult {
  kind: string;
  url: {
    type: string;
    template: string;
  };
  context: { title: string };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  items: {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    formattedUrl?: string;
    htmlFormattedUrl?: string;
    mime?: string;
    fileFormat?: string;
    image: {
      contextLink: string;
      height: number;
      width: number;
      byteSize: number;
      thumbnailLink: string;
      thumbnailHeight: number;
      thumbnailWidth: number;
    };
  }[];
}

const WebSearchPage = async ({
  searchParams: { searchTerm, start },
}: Props) => {
  const startIndex = start || "1";
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GO_API_KEY}&cx=${process.env.GO_CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`;
  const res = await fetch(url);
  const googleResult: GoogleResult = await res.json();
  if (!googleResult.items) return <NoSearchResult searchTerm={searchTerm} />;
  return (
    <div>
      <WebSearchResults googleResult={googleResult} />
    </div>
  );
};
const NoSearchResult = ({ searchTerm }: { searchTerm: string }) => (
  <div className="flex flex-col justify-center items-center pt-10">
    <h1 className="text-3xl mb-4">
      Your search - <span className="font-bold">{searchTerm}</span> - did not
      match any documents.
    </h1>
    <h2 className="text-lg">
      Try searching for something else or go back to the homepage.{" "}
      <Link className="text-blue-500" href="/">
        Home
      </Link>
    </h2>
  </div>
);
export default WebSearchPage;
