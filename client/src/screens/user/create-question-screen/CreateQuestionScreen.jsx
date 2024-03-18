import CreateQuestionContent from "./CreateQuestionContent";
import CreateQuestionStore from "./CreateQuestionStore";

const CreateQuestionScreen = () => {
  return (
    <CreateQuestionStore>
      <CreateQuestionContent />
    </CreateQuestionStore>
  );
};

export default CreateQuestionScreen;
