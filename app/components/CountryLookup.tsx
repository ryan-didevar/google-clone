"use client";

import { useQuery } from "@tanstack/react-query";
import Skeleton from "./Skeleton";
interface IpLookup {
  country: string;
  city: string;
  countryCode: string;
}
const CountryLookup = () => {
  const { data, error, isLoading } = useQuery<IpLookup>({
    queryKey: ["country"],
    queryFn: () =>
      fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.LOOKUP_API_KEY}`
      ).then((res) => res.json()),
  });
  if (error) return <></>;
  if (isLoading) return <Skeleton width={100} height={15} />;
  return (
    <div>
      {data?.country}, {data?.countryCode}
    </div>
  );
};

export default CountryLookup;
