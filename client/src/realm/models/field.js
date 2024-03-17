import { Realm } from '@realm/react';

class Field extends Realm.Object {
  static schema = {
    name: 'Field',
    properties: {
      _id: 'objectId',
      fieldName: 'string',
    },
    primaryKey: '_id',
  };
}

export default Field;
