import Link from "next/link";
import Parser from "html-react-parser";
import { GoogleResult } from "./page";
import PaginationButtons from "../PaginationButtons";
interface Props {
  googleResult: GoogleResult;
}

const WebSearchResults = ({ googleResult }: Props) => {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {googleResult.searchInformation?.formattedTotalResults} results (
        {googleResult.searchInformation?.formattedSearchTime} seconds)
      </p>
      {googleResult.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
};

export default WebSearchResults;
