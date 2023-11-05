import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDuhocsinh = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Duhocsinh, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly dob?: string | null;
  readonly sex?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly residence?: string | null;
  readonly hometown?: string | null;
  readonly degree?: string | null;
  readonly averageScoreC3?: string | null;
  readonly scoreGPA?: string | null;
  readonly universityWant?: string | null;
  readonly timeStudyAbort?: string | null;
  readonly question?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDuhocsinh = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Duhocsinh, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly dob?: string | null;
  readonly sex?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly residence?: string | null;
  readonly hometown?: string | null;
  readonly degree?: string | null;
  readonly averageScoreC3?: string | null;
  readonly scoreGPA?: string | null;
  readonly universityWant?: string | null;
  readonly timeStudyAbort?: string | null;
  readonly question?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Duhocsinh = LazyLoading extends LazyLoadingDisabled ? EagerDuhocsinh : LazyDuhocsinh

export declare const Duhocsinh: (new (init: ModelInit<Duhocsinh>) => Duhocsinh) & {
  copyOf(source: Duhocsinh, mutator: (draft: MutableModel<Duhocsinh>) => MutableModel<Duhocsinh> | void): Duhocsinh;
}