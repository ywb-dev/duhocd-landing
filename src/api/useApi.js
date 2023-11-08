import { API } from "aws-amplify";
import { createDuhocsinh, updateDuhocsinh} from '../graphql/mutations';
import { listDuhocsinhs, getDuhocsinh } from "../graphql/queries";

const newDuhocsinh = async(data) => {
   return await API.graphql({
      query: createDuhocsinh,
      variables: {
        input: data
      }
    })
}

const updatesDuhocsinh = async(data) => {
  return await API.graphql({
      query: updateDuhocsinh,
      variables: {
        input: data
      }
    })
}

// List all items
const getAllDuhocsinhs = async() => {
   return await API.graphql({
        query: listDuhocsinhs
    });
}

// Get a specific item
const getOneDuhocsinh = async(email) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await API.graphql({
        query: getDuhocsinh,
        variables: { email: email }
      })
      return response.data
    } catch (error) {
      throw error
    }
}

export {
  newDuhocsinh,
  updatesDuhocsinh,
  getOneDuhocsinh,
  getAllDuhocsinhs
} 
