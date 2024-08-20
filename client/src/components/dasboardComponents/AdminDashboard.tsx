import { useState, ChangeEvent } from "react";
import Header from "./AdminComponents/Header";
import AddStudentButton from "./AdminComponents/AddStudentButton ";
import CloseStudentInputButton from "./AdminComponents/CloseStudentInputButton";
import StudentForm from "./AdminComponents/StudentForm";
import { StudentData } from "../../@types/StudentData";
import { FilterStdData } from "./AdminComponents/FilterStdData";

const apiBaseUrl = "http://localhost:800/api";

function AdminDashboard() {
  const [showStdInput, setShowStdInput] = useState(false);
  const [formData, setFormData] = useState<StudentData>({
    rollNum: "",
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    semester: "",
    section: "",
    cgpa: "",
    attendance: "",
  });

  function showInput() {
    setShowStdInput(true);
  }

  function closeInput() {
    setShowStdInput(false);
    setFormData({
      rollNum: "",
      name: "",
      email: "",
      phoneNumber: "",
      department: "",
      semester: "",
      section: "",
      cgpa: "",
      attendance: "",
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async function saveData() {
    let isValid = true;

    // Validation check for empty fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) {
        isValid = false;
        document.getElementById(key)?.classList.add("border-danger");
      } else {
        document.getElementById(key)?.classList.remove("border-danger");
      }
    });

    if (!isValid) {
      alert("Please fill in all the required fields.");
      return;
    }

    const studentData = {
      rollNum: formData.rollNum,
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      department: formData.department,
      semester: parseInt(formData.semester, 10),
      section: formData.section,
      cgpa: parseFloat(formData.cgpa),
      attendance: formData.attendance,
    };

    try {
      const response = await fetch(`${apiBaseUrl}/saveStdData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (response.ok) {
        alert('Your Data has been Saved');
        setFormData({
          rollNum: "",
          name: "",
          email: "",
          phoneNumber: "",
          department: "",
          semester: "",
          section: "",
          cgpa: "",
          attendance: "",
        });
      } else {
        const errorText = await response.text();
        alert(`Error ${response.status}: ${response.statusText} ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during saving the data');
    }
  }

  async function cancelData() {
    setFormData({
      rollNum: "",
      name: "",
      email: "",
      phoneNumber: "",
      department: "",
      semester: "",
      section: "",
      cgpa: "",
      attendance: "",
    });
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <hr />
        {!showStdInput && <AddStudentButton showInput={showInput} />}
        {showStdInput && <CloseStudentInputButton closeInput={closeInput} />}
        {showStdInput && (
          <StudentForm
            formData={formData}
            handleChange={handleChange}
            saveData={saveData}
            cancelData={cancelData}
          />
        )}
        <FilterStdData />
      </div>
    </div>
  );
}

export { AdminDashboard };
