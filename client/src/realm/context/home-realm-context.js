import { createRealmContext } from '@realm/react';

import Question from '../models/question.js';
import Field from '../models/field.js';
import Department from '../models/department.js';
import User from '../models/user.js';
import Answer from '../models/answer.js';

const HomeRealmContext = createRealmContext({
  schema: [Department, Field, User, Answer, Question],
});

export default HomeRealmContext;
