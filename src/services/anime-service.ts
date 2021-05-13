import axios, { AxiosInstance } from "axios";

import { Model } from "./base-model";

interface AnimeAttribute {
  desc: string;
  titles: {
    en: string;
    en_jp: string;
    ja_jp: string;
  };
  canonicalTitle: string;
  averageRating: string;
  startDate: Date;
  endDate?: Date;
  popularityRank: number;
  ratingRank: number;
  status: "current" | "finished" | "upcoming" | "unreleased" | "tba";
  posterImage: {
    original: string;
    small: string;
  };
  episodeCount: number;
  showType: "TV" | "OVA" | "movie" | "ONA";
}

export type Anime = Model<AnimeAttribute>;
class Service {
  private readonly restClient: AxiosInstance;
  constructor() {
    this.restClient = axios.create({
      baseURL: "https://kitsu.io/api/edge/anime",
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    });
  }
  public readonly get = (years: number[] = [2019, 2020, 2021]): Promise<Anime[]> =>
    this.restClient.get<{ data: Anime[] }>(`?filter[seasonYear]=${years.join(",")}`).then(resp => resp.data.data);
  public readonly getOne = (id: string): Promise<Anime> => this.restClient.get<Anime>(id).then(resp => resp.data);
}

export const animeService = new Service();
