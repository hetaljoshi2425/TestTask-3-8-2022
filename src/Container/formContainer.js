import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Form from "../Screen/Form";
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';

const FormContainer = () => {
  const navigate = useNavigate()
  const [contactData, setContactData] = useState({
    fname: "",
    lname: "",
    address: "",
    email: "",
    phNo: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactData((prevalue) => ({ ...prevalue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("contactData", contactData)
    await addDoc(collection(firebase.firestore(), "contactData"), {
      firstname: contactData.fname,
      lastname: contactData.lname,
      address: contactData.address,
      email: contactData.email,
      phone_number: contactData.phNo,
    })
      .then(() => {
        alert("Data submitted 👍");
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const navigateAllContact = () => {
    navigate('/view')
  }

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        contactData={contactData}
        navigateAllContact={navigateAllContact}
      />
    </>
  );
};

export default FormContainer;
