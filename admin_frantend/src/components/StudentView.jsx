import React from 'react'
import style from '../style/StudentView.module.css'
function StudentView({view}) {
  // Check if view is provided
  if (!view) return null;

  return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container d-flex justify-content-center align-items-center ">
                <div className={`card ${style.studentCard} shadow-lg border-0`}>
                 <div className={`${style.cardHeader} text-center `}>
                    <h3 className="card-title mb-2 mt-2">Student Details</h3>
                  </div>  
                  <ul className="list-group list-group-flush">
                    <li className={`${style.listGorupItem} list-group-item d-flex justify-content-between align-items-center`}>
                      <strong>Full Name:</strong>
                      <span>{view.fullName}</span>
                    </li>
                    <li className={`${style.listGorupItem} list-group-item d-flex justify-content-between align-items-center`}>
                      <strong>Email:</strong>
                      <span>{view.email}</span>
                    </li>
                    <li className={`${style.listGorupItem} list-group-item d-flex justify-content-between align-items-center`}>
                      <strong>Phone Number:</strong>
                      <span>{view.phone_no}</span>
                    </li>
                    <li className={`${style.listGorupItem} list-group-item d-flex justify-content-between align-items-center`}>
                      <strong>College Name:</strong>
                      <span>{view.collage_name}</span>
                    </li>
                    <li className={`${style.listGorupItem} list-group-item d-flex justify-content-between align-items-center`}>
                      <strong>Course:</strong>
                      <span>{view.current_course}</span>
                    </li>
                    <li className={`${style.listGorupItem} list-group-item d-flex justify-content-between align-items-center`}>
                      <strong>Qualification:</strong>
                      <span>{view.qualification}</span>
                    </li>
                    <li className={`${style.listGorupItem} list-group-item d-flex justify-content-between align-items-center`}>
                      <strong>Reference By:</strong>
                      <span>{view.reference_by}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary w-25"
                data-bs-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default StudentView