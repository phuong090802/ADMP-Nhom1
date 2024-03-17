import { Realm } from '@realm/react';

class Question extends Realm.Object {
  static schema = {
    name: 'Question',
    properties: {
      _id: 'objectId',
      title: 'string',
      content: 'string',
      createdAt: 'date',
      fileURL: 'string?',
      views: 'int',
      user: 'User',
      answer: 'Answer',
    },
    primaryKey: '_id',
  };
}

export default Question;
