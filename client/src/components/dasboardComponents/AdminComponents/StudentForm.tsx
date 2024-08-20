// StudentForm.tsx
import { ChangeEvent } from "react";
import { StudentData } from "../../../@types/StudentData";

type StudentFormProps = {
  formData: StudentData;
  handleChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  saveData: () => void;
  cancelData: ()=> void;
};

function StudentForm({ formData, handleChange, saveData, cancelData }: StudentFormProps) {
  return (
    <div className="col-12 mt-3">
      <section className="studentsSection">
        <header></header>
        <section>
          <div className="container-fluid">
            <table className="table table-striped table-hover mt-5 text-center">
              <thead>
                <tr>
                  <th scope="col" className="bg-success text-light">Roll No</th>
                  <th scope="col" className="bg-success text-light">Name</th>
                  <th scope="col" className="bg-success text-light">Email</th>
                  <th scope="col" className="bg-success text-light">Phone Number</th>
                  <th scope="col" className="bg-success text-light">Department</th>
                  <th scope="col" className="bg-success text-light">Semester</th>
                  <th scope="col" className="bg-success text-light">Section</th>
                  <th scope="col" className="bg-success text-light">CGPA</th>
                  <th scope="col" className="bg-success text-light">Attendance</th>
                  <th scope="col" className="bg-success text-light">Action</th>
                </tr>
              </thead>
              <tbody id="student-input-table-body">
                <tr>
                  <td className="p-2">
                    <input
                      type="text"
                      name="rollNum"
                      id="rollNum"
                      className="form-control"
                      placeholder="Year-Dept-Rollno"
                      value={formData.rollNum}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="form-control"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="p-2">
                    <select
                      name="department"
                      id="department"
                      className="form-select"
                      value={formData.department}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Department</option>
                      <option value="Computer-Science">Computer Science</option>
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Computer Engineering">Computer Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Bio Technology">Bio Technology</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="Environmental Sciences">Environmental Sciences</option>
                      <option value="International Relations">International Relations</option>
                      <option value="Electrical Engineering">Electrical Engineering</option>
                    </select>
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      name="semester"
                      id="semester"
                      className="form-control"
                      placeholder="Sem"
                      min={1}
                      max={8}
                      value={formData.semester}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      name="section"
                      id="section"
                      className="form-control"
                      placeholder="Section"
                      value={formData.section}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      name="cgpa"
                      id="cgpa"
                      className="form-control"
                      placeholder="CGPA"
                      min={0}
                      max={4}
                      value={formData.cgpa}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      name="attendance"
                      id="attendance"
                      className="form-control"
                      placeholder="Attendance"
                      min={0}
                      max={100}
                      value={formData.attendance}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="p-2 d-flex">
                    <a
                      className="btn btn-success saveBtn me-2"
                      onClick={saveData}
                    >
                      Save
                    </a>
                    <a className="btn btn-danger cancelBtn"
                    onClick={cancelData}
                    >Cancel</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
}

export default StudentForm;
