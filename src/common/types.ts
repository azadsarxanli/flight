/**
 * Utility to generate a client-side error in graphQL format
 */
export type GraphQlError<T extends string = string> = {
  __typename: T;
  message: string;
};

export type GraphQlNode<T extends string = string> = {
  __typename: T;
};

export type OmitTypename<T> = Omit<T, '__typename'>;

export type Maybe<T> = T | undefined | null;

export type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;
