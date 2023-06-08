type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SearchResult = {
  query?: {
    page?: Result[];
  };
};
