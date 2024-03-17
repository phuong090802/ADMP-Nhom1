import { Realm } from '@realm/react';

class Department extends Realm.Object {
  static schema = {
    name: 'Department',
    properties: {
      _id: 'objectId',
      departmentName: 'string',
    },
    primaryKey: '_id',
  };
}

export default Department;
