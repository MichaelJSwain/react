import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee({handleAddEmployee}) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    profilePic: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    console.log("handling change = ", e.target.value);
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    handleAddEmployee(formData.name, formData.role, formData.profilePic);
  }

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
        <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">+ Add Employee</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit} id="addEmployeeForm" className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                        Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" name="name" type="text" value={formData.name} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                        Role
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" name="role" type="text" value={formData.role} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="profilePic">
                        Profile picture
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="profilePic" name="profilePic" type="text" value={formData.profilePic} />
                </div>
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
        <button form="addEmployeeForm" className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={handleClose}>
                Close
            </button>
          <button form="addEmployeeForm" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Save
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;