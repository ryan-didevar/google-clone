interface Props {
  searchParams: {
    searchTerm: string;
  };
}

const WebSearchPage = ({ searchParams: { searchTerm } }: Props) => {
  return <div>{searchTerm}</div>;
};

export default WebSearchPage;
