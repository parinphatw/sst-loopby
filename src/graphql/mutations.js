/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      Firstname
      Lastname
      Address
      email
      OWN {
        items {
          id
          name
          categories
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      UserLovesShops {
        items {
          id
          userID
          shopID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      Firstname
      Lastname
      Address
      email
      OWN {
        items {
          id
          name
          categories
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      UserLovesShops {
        items {
          id
          userID
          shopID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      Firstname
      Lastname
      Address
      email
      OWN {
        items {
          id
          name
          categories
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      UserLovesShops {
        items {
          id
          userID
          shopID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createShop = /* GraphQL */ `
  mutation CreateShop(
    $input: CreateShopInput!
    $condition: ModelShopConditionInput
  ) {
    createShop(input: $input, condition: $condition) {
      id
      name
      categories
      userID
      users {
        items {
          id
          userID
          shopID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateShop = /* GraphQL */ `
  mutation UpdateShop(
    $input: UpdateShopInput!
    $condition: ModelShopConditionInput
  ) {
    updateShop(input: $input, condition: $condition) {
      id
      name
      categories
      userID
      users {
        items {
          id
          userID
          shopID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteShop = /* GraphQL */ `
  mutation DeleteShop(
    $input: DeleteShopInput!
    $condition: ModelShopConditionInput
  ) {
    deleteShop(input: $input, condition: $condition) {
      id
      name
      categories
      userID
      users {
        items {
          id
          userID
          shopID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUserShop = /* GraphQL */ `
  mutation CreateUserShop(
    $input: CreateUserShopInput!
    $condition: ModelUserShopConditionInput
  ) {
    createUserShop(input: $input, condition: $condition) {
      id
      userID
      shopID
      user {
        id
        Firstname
        Lastname
        Address
        email
        OWN {
          nextToken
          startedAt
        }
        UserLovesShops {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      shop {
        id
        name
        categories
        userID
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUserShop = /* GraphQL */ `
  mutation UpdateUserShop(
    $input: UpdateUserShopInput!
    $condition: ModelUserShopConditionInput
  ) {
    updateUserShop(input: $input, condition: $condition) {
      id
      userID
      shopID
      user {
        id
        Firstname
        Lastname
        Address
        email
        OWN {
          nextToken
          startedAt
        }
        UserLovesShops {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      shop {
        id
        name
        categories
        userID
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserShop = /* GraphQL */ `
  mutation DeleteUserShop(
    $input: DeleteUserShopInput!
    $condition: ModelUserShopConditionInput
  ) {
    deleteUserShop(input: $input, condition: $condition) {
      id
      userID
      shopID
      user {
        id
        Firstname
        Lastname
        Address
        email
        OWN {
          nextToken
          startedAt
        }
        UserLovesShops {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      shop {
        id
        name
        categories
        userID
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
