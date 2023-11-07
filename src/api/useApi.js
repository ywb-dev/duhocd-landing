import { API } from "aws-amplify";
import { createDuhocsinh, updateDuhocsinh} from '../graphql/mutations';
import { listDuhocsinhs, getDuhocsinh } from "../graphql/queries";

// const data = {
//   name: this.formData?.name,
//   dob: this.formData?.dob,
//   sex: this.formData?.sex,
//   phone: this.formData?.phone,
//   email: this.formData?.email,
//   // residence: this.formData,
//   // hometown: this.formData,
//   degree: this.formData?.degree,
//   averageScoreC3: this.formData?.averageScoreC3,
//   scoreGPA: this.formData?.scoreGPA,
//   universityWant: this.formData?.universityWant,
//   timeStudyAbort: this.formData?.timeStudyAbort,
//   question: this.formData?.question
// }

const newDuhocsinh = async(data) => {
    await API.graphql({
      query: createDuhocsinh,
      variables: {
        input: data
      }
    })
}

const updatesDuhocsinh = async(data) => {
    await API.graphql({
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
