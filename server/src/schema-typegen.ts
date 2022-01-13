/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context as Context } from "./context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateIdeaInput: { // input type
    content: string; // String!
    imageUrl: string; // String!
    title: string; // String!
  }
  IdeaWhereUniqueInput: { // input type
    id: string; // ID!
  }
  VoteIdeaWhereUniqueInput: { // input type
    ideaId: string; // String!
  }
  VoteWhereUniqueInput: { // input type
    id: string; // ID!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Idea: { // root type
    content: string; // String!
    id: string; // ID!
    imageUrl: string; // String!
    title: string; // String!
  }
  Mutation: {};
  Query: {};
  Vote: { // root type
    id: string; // ID!
    ideaId: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Idea: { // field return type
    content: string; // String!
    id: string; // ID!
    imageUrl: string; // String!
    title: string; // String!
    votes: NexusGenRootTypes['Vote'][]; // [Vote!]!
  }
  Mutation: { // field return type
    createIdea: NexusGenRootTypes['Idea'] | null; // Idea
    voteIdea: NexusGenRootTypes['Vote'] | null; // Vote
  }
  Query: { // field return type
    idea: NexusGenRootTypes['Idea'] | null; // Idea
    ideas: NexusGenRootTypes['Idea'][] | null; // [Idea!]
    vote: NexusGenRootTypes['Vote'] | null; // Vote
    votes: NexusGenRootTypes['Vote'][] | null; // [Vote!]
  }
  Vote: { // field return type
    id: string; // ID!
    idea: NexusGenRootTypes['Idea']; // Idea!
    ideaId: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Idea: { // field return type name
    content: 'String'
    id: 'ID'
    imageUrl: 'String'
    title: 'String'
    votes: 'Vote'
  }
  Mutation: { // field return type name
    createIdea: 'Idea'
    voteIdea: 'Vote'
  }
  Query: { // field return type name
    idea: 'Idea'
    ideas: 'Idea'
    vote: 'Vote'
    votes: 'Vote'
  }
  Vote: { // field return type name
    id: 'ID'
    idea: 'Idea'
    ideaId: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createIdea: { // args
      input: NexusGenInputs['CreateIdeaInput']; // CreateIdeaInput!
    }
    voteIdea: { // args
      where: NexusGenInputs['VoteIdeaWhereUniqueInput']; // VoteIdeaWhereUniqueInput!
    }
  }
  Query: {
    idea: { // args
      where: NexusGenInputs['IdeaWhereUniqueInput']; // IdeaWhereUniqueInput!
    }
    vote: { // args
      where: NexusGenInputs['VoteWhereUniqueInput']; // VoteWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}