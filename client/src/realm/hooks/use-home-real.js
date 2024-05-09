import Realm from "realm";

import HomeRealmContext from "../context/home-realm-context";
import Department from "../models/department";
import Field from "../models/field";
import Question from "../models/question";

export function useHomeRealm() {
  const { useRealm, useQuery } = HomeRealmContext;

  const realm = useRealm();

  function deleteAllQuestions() {
    realm.write(() => {
      const allQuestions = realm.objects("Question");
      realm.delete(allQuestions);
    });
  }

  function saveAllQuestions(questions) {
    deleteAllQuestions();
    realm.write(() => {
      questions.forEach((question) => {
        realm.create("Question", {
          _id: Realm.BSON.ObjectId(question._id),
          title: question.title,
          content: question.content,
          createdAt: new Date(question.createdAt),
          fileURL: question.fileURL,
          views: question.views,
          user: {
            _id: Realm.BSON.ObjectId(question.user._id),
            fullName: question.user.fullName,
            avatar: question.user.avatar,
          },
          answer: {
            user: {
              _id: Realm.BSON.ObjectId(question.answer.user._id),
              fullName: question.answer.user.fullName,
              avatar: question.answer.user.avatar,
            },
            content: question.answer.content,
            fileURL: question.answer.fileURL,
            answeredAt: question.answer.answeredAt,
          },
        });
      });
    });
  }

  function deleteAllDepartments() {
    realm.write(() => {
      const allDepartments = realm.objects("Department");
      realm.delete(allDepartments);
    });
  }

  function saveAllDepartments(departments) {
    deleteAllDepartments();
    realm.write(() => {
      departments.forEach((department) => {
        realm.create("Department", {
          _id: Realm.BSON.ObjectId(department._id),
          departmentName: department.departmentName || "Unknow department",
        });
      });
    });
  }

  function deleteAllFields() {
    realm.write(() => {
      const allFields = realm.objects("Field");
      realm.delete(allFields);
    });
  }

  function saveAllFields(fields) {
    deleteAllFields();
    realm.write(() => {
      fields.forEach((field) => {
        realm.create("Field", {
          _id: Realm.BSON.ObjectId(field._id),
          fieldName: field.fieldName,
        });
      });
    });
  }

  const departments = useQuery(Department);
  const fields = useQuery(Field);
  const questions = useQuery(Question);

  return {
    deleteAllDepartments,
    saveAllDepartments,
    deleteAllFields,
    saveAllFields,
    deleteAllQuestions,
    saveAllQuestions,
    departments,
    fields,
    questions,
  };
}
