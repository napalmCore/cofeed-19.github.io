export const STORAGE_PREFIX = "FWF_";

export const databaseName = "FeedDb";
export const databaseVersion = 2;
export const siteDomain = "https://cofeed-19.github.io/";

export type TableSchema = {
  Name: string;
  Key: string;
};

export const SiteFeedTable: TableSchema = {
  Name: "Site_Feed",
  Key: "url",
};

export const FavoriteTable: TableSchema = {
  Name: "Favorite",
  Key: "url",
};
