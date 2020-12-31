export interface WikiPediaArticle {
  pageid: number;
  ns: number;
  title: string;
  extract: string;
  contentmodel: string;
  pagelanguage: string;
  pagelanguagehtmlcode: string;
  pagelanguagedir: string;
  touched: string; // Date
  lastrevid: number;
  length: number;
  fullurl: string;
  editurl: string;
  canonicalurl: string;
  thumbnail?: Thumbnail;
  pageimage: string;
}

export interface Thumbnail {
  source: string;
  width: number;
  height: number;
}

export interface Query {
  normalized: {
    from: string;
    to: string;
  };
  pages: { [pageid: string]: WikiPediaArticle };
}

export interface WikiPediaArticleData {
  batchcomplete: string;
  query: Query;
}
