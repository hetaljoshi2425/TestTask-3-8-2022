import { CButton, CCard, CCardBody, CCol, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';
import React from 'react'
import InputFields from '../Component/Inputs';

const AllData = (props) => {
    const { info, columns, deleteModalClose, viewContactData, handleChange, addUserNavigate, deleteModalOpen, visible, deleteContactInfo, editModalClose, editModalOpen, editVisible, updateContactInfo } = props
    return (
        <>
            <div className="container mt-5">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            {columns?.map((item) => (<>
                                <th>{item.label}</th>
                            </>))}

                        </tr>
                    </thead>
                    <tbody>
                        {info?.map((item, index) => (
                            <>
                                <tr>
                                    <td>{item?.firstname}</td>
                                    <td>{item?.lastname}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.address}</td>
                                    <td>{item?.phone_number}</td>
                                    <td>
                                        <CButton color="info" onClick={() => editModalOpen(item?.id)}>Edit</CButton>
                                        <CButton color="danger" onClick={() => deleteModalOpen(item?.id)}>Delete</CButton>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
                <CModal visible={visible} onClose={deleteModalClose}>
                    <CModalHeader onClose={deleteModalClose}>
                        <CModalTitle>Delete Contact Detail</CModalTitle>
                    </CModalHeader>
                    <CModalBody>Are you sure you want to delete this Contact detail?</CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={deleteModalClose}>
                            Close
                        </CButton>
                        <CButton color="danger" onClick={deleteContactInfo}>Delete</CButton>
                    </CModalFooter>
                </CModal>
                <CModal visible={editVisible} onClose={editModalClose}>
                    <CModalHeader onClose={editModalClose}>
                        <CModalTitle>Update Contact Detail</CModalTitle>
                    </CModalHeader>
                    <div className="container mt-5">
                        <CRow>
                            <CCol xs={12}>
                                <CCard className="mb-4">
                                    <CCardBody>
                                        <CForm className="row g-3">
                                            <CCol md={6}>
                                                <InputFields
                                                    htmlfor="inputfname4"
                                                    label="Firstname"
                                                    name="fname"
                                                    value={viewContactData?.fname}
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
                                                    value={viewContactData?.lname}
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
                                                    value={viewContactData?.address}
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
                                                    value={viewContactData?.email}
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
                                                    value={viewContactData?.phNo}
                                                    id="inputPhonenumber4"
                                                    placeholder="Enter Phone number"
                                                    onChange={handleChange}
                                                />
                                            </CCol>
                                        </CForm>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                        </CRow>
                    </div>
                    <CModalFooter>
                        <CButton color="secondary" onClick={editModalClose}>
                            Close
                        </CButton>
                        <CButton color="primary" onClick={updateContactInfo}>Update</CButton>
                    </CModalFooter>
                </CModal>
                <CButton color="secondary" onClick={addUserNavigate}>
                    Add More User
                </CButton>
            </div>
        </>
    )
}

export default AllData;