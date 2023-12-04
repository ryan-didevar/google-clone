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
  return (
    <div>
      {googleResult.items.map((item) => (
        <h1 key={item.link}>{item.title}</h1>
      ))}
    </div>
  );
};

export default WebSearchPage;
