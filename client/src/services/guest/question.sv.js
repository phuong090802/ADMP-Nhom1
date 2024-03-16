import API from '../api';

const getQuestionsSv = (params) => {
  return API.get('questions', {
    params: params,
  });
};

export { getQuestionsSv };
