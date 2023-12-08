import Link from "next/link";
import { GoogleResult } from "../web/page";
import ImageSearchResult from "./ImageSearchResult";

interface Props {
  searchParams: {
    searchTerm: string;
    start?: string;
  };
}

const ImageSearchPage = async ({
  searchParams: { searchTerm, start },
}: Props) => {
  const startIndex = start || "1";
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GO_API_KEY}&cx=${process.env.GO_CONTEXT_KEY}&q=${searchTerm}&searchType=image&start=${startIndex}`;
  const res = await fetch(url);
  const googleResult: GoogleResult = await res.json();
  if (!googleResult.items) return <NoSearchResult searchTerm={searchTerm} />;
  return (
    <div>
      <ImageSearchResult googleResult={googleResult} />
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
export default ImageSearchPage;
