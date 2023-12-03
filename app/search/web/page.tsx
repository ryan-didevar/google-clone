
interface Props {
  searchParams: {
    searchTerm: string;
  };
}

const WebPage = ({ searchParams: { searchTerm } }: Props) => {
  return (
    <div>
      {searchTerm}
    </div>
  );
};

export default WebPage;
