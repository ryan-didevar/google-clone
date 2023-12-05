import Link from "next/link";

interface Props {
  searchParams: {
    searchTerm: string;
  };
}
interface GoogleResult {
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
    formattedUrl: string;
    htmlFormattedUrl: string;
  }[];
}

const WebSearchPage = async ({ searchParams: { searchTerm } }: Props) => {
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GO_API_KEY}&cx=${process.env.GO_CONTEXT_KEY}&q=${searchTerm}}`;
  const res = await fetch(url);
  const googleResult: GoogleResult = await res.json();
  if (!googleResult.items) return <NoSearchResult searchTerm={searchTerm} />;
  return (
    <div>
      {googleResult.items.map((item) => (
        <h1 key={item.link}>{item.title}</h1>
      ))}
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
