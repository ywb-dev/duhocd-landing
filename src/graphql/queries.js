/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDuhocsinh = /* GraphQL */ `
  query GetDuhocsinh($email: String!) {
    getDuhocsinh(email: $email) {
      id
      name
      dob
      sex
      phone
      email
      residenceAddress
      hometownAddress
      degree
      averageScoreC3
      scoreGPA
      universityWant
      timeStudyAbort
      question
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDuhocsinhs = /* GraphQL */ `
  query ListDuhocsinhs(
    $email: String
    $filter: ModelDuhocsinhFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDuhocsinhs(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        dob
        sex
        phone
        email
        residenceAddress
        hometownAddress
        degree
        averageScoreC3
        scoreGPA
        universityWant
        timeStudyAbort
        question
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
