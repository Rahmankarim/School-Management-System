// CloseStudentInputButton.tsx

type CloseStudentInputButtonProps = {
  closeInput: () => void;
};

function CloseStudentInputButton({ closeInput }: CloseStudentInputButtonProps) {
  return (
    <div className="col-12 mt-3 text-center">
      <button className="btn btn-danger closeStdBtn" onClick={closeInput}>
        Close Student Input
      </button>
    </div>
  );
}

export default CloseStudentInputButton;
