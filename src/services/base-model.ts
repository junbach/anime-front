export interface Model<T> {
  id: string;
  type: "anime" | "manga" | "character";
  attributes: T;
}
