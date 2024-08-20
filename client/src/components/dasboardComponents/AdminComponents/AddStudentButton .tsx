// AddStudentButton.tsx
type AddStudentButtonProps = {
  showInput: () => void;
};

function AddStudentButton({ showInput }: AddStudentButtonProps) {
  return (
    <div className="col-12 mt-3 text-center">
      <button className="btn btn-success addStdBtn" onClick={showInput}>
        Add New Student
      </button>
    </div>
  );
}

export default AddStudentButton;
