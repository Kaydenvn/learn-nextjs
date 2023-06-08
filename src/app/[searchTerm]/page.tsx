import React from "react";
import getWikiResults from "@/lib/getWikiResult";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data.query?.page;

  const content = (
    <main className="bg-white mx-auto w-5/6 text-black py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <p key="">{JSON.stringify(result)}</p>;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
  return content;
}
