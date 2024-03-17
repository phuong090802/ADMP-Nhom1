import { Realm } from '@realm/react';

class User extends Realm.Object {
  static schema = {
    name: 'User',
    embedded: true,
    properties: {
      _id: 'objectId',
      fullName: 'string',
      avatar: 'string?',
    },
  };
}

export default User;
