import { Realm } from '@realm/react';

class Answer extends Realm.Object {
  static schema = {
    name: 'Answer',
    embedded: true,
    properties: {
      user: 'User',
      content: 'string',
      fileURL: 'string?',
      answeredAt: 'date',
    },
  };
}

export default Answer;
