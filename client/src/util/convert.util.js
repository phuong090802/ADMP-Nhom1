function dateTimeToDate(dateTime) {
  let dateObject = new Date(dateTime);
  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1;
  let year = dateObject.getFullYear();
  return day + '/' + month + '/' + year;
}

export function transformDepartments(departments) {
  const retDepartments = departments.map((department) => ({
    value: department.departmentName,
    key: department._id,
  }));
  retDepartments.unshift({ key: 'null', value: 'Tất cả' });
  return retDepartments;
}

export function transformsFields(fields) {
  const retFields = fields.map((field) => ({
    value: field.fieldName,
    key: field._id,
  }));
  retFields.unshift({ key: 'null', value: 'Tất cả' });
  return retFields;
}

export { dateTimeToDate };
