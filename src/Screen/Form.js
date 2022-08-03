import React from "react";
import { CButton, CCard, CCardBody, CCol, CForm, CRow } from "@coreui/react";
import FormHeader from "../Component/FormHeader";
import InputFields from "../Component/Inputs";

const Form = (props) => {
  const { handleChange, handleSubmit, contactData, navigateAllContact } = props;
  return (
    <>
      <div className="container mt-5">
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <FormHeader />
              <CCardBody>
                <CForm className="row g-3">
                  <CCol md={6}>
                    <InputFields
                      htmlfor="inputfname4"
                      label="Firstname"
                      name="fname"
                      value={contactData?.fname}
                      type="text"
                      id="inputfname4"
                      placeholder="Enter Firstname"
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol md={6}>
                    <InputFields
                      htmlfor="inputlname4"
                      label="Lastname"
                      name="lname"
                      value={contactData?.lname}
                      type="text"
                      id="inputlname4"
                      placeholder="Enter Lastname"
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol xs={12}>
                    <InputFields
                      htmlfor="inputaddress4"
                      label="Address"
                      name="address"
                      value={contactData?.address}
                      type="text"
                      id="inputaddress4"
                      placeholder="Enter address"
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol md={6}>
                    <InputFields
                      htmlfor="inputEmail4"
                      label="Email"
                      type="email"
                      name="email"
                      value={contactData?.email}
                      id="inputEmail4"
                      placeholder="Enter Email"
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol md={6}>
                    <InputFields
                      htmlfor="inputPhonenumber4"
                      label="Phone number"
                      type="tel"
                      name="phNo"
                      value={contactData?.phNo}
                      id="inputPhonenumber4"
                      placeholder="Enter Phone number"
                      onChange={handleChange}
                    />
                  </CCol>

                  <CCol xs={12}>
                    <CButton type="submit" onClick={handleSubmit}>
                      Submit
                    </CButton>
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CButton color="dark" onClick={navigateAllContact} >View All Contact Data</CButton>
      </div>
    </>
  );
};

export default Form;
