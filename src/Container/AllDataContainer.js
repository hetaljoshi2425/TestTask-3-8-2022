import React, { useEffect, useState } from 'react'
import AllData from '../Screen/AllData'
import { updateDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { useNavigate } from "react-router-dom";

const AllDataContainer = () => {
    const navigate = useNavigate()
    const [info, setInfo] = useState([])
    const [visible, setVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [getContactKey, setGetContactKey] = useState(null)
    const [viewContactData, setViewContactData] = useState({
        fname: "",
        lname: "",
        address: "",
        email: "",
        phNo: "",
    });

    const Fetchdata = async () => {
        const ref = firebase
            .firestore()
            .collection("contactData");
        const snapshot = await ref.get();
        let data = []
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() })
        });
        setInfo(data)
    }

    const editModalOpen = (id) => {
        let userInfo = info.find((item) => item.id === id)
        setViewContactData({
            fname: userInfo.firstname,
            lname: userInfo.lastname,
            address: userInfo.address,
            email: userInfo.email,
            phNo: userInfo.phone_number,
        })
        setEditVisible(!visible)
        setGetContactKey(id)
    }

    const deleteModalOpen = (id) => {
        setVisible(!visible)
        setGetContactKey(id)
    }

    const editModalClose = () => {
        setEditVisible(false)
    }

    const deleteModalClose = () => {
        setVisible(false)
    }

    const deleteContactInfo = () => {
        firebase.firestore().collection("contactData").doc(`${getContactKey}`).delete()
        let toDelete = info.findIndex((item) => item.id === getContactKey)
        let temp = info
        temp.splice(toDelete, 1)
        setInfo(temp)
        setVisible(false)
    }

    const updateContactInfo = async () => {
        let toUpdate = info.findIndex((item) => item.id === getContactKey)
        let temp1 = info
        let data = {
            firstname: viewContactData.fname,
            lastname: viewContactData.lname,
            address: viewContactData.address,
            email: viewContactData.email,
            phone_number: viewContactData.phNo,
        }
        const docRef = firebase.firestore().collection("contactData").doc(`${getContactKey}`)
        await updateDoc(docRef, data)
            .then(docRef => {
                alert("Updated")
            })
            .catch(error => {
                console.log(error.message)
            })
        temp1.splice(toUpdate, 1, data)
        setInfo(temp1)
        setEditVisible(false)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setViewContactData((prevalue) => ({ ...prevalue, [name]: value }));
    };

    const addUserNavigate = () => {
        navigate('/')
    }

    const columns = [
        {
            key: 'firstname',
            label: 'First Name',
        },
        {
            key: 'lastname',
            label: 'Lastname',
        },
        {
            key: 'email',
            label: 'Email',
        },
        {
            key: 'address',
            label: 'Address',
        },
        {
            key: 'phone_number',
            label: 'Phone Number',
        },
        {
            key: 'Action',
            label: 'Action',
        }
    ]

    useEffect(() => {
        Fetchdata()
    }, [])

    return (
        <>
            <AllData
                info={info}
                columns={columns}
                deleteModalOpen={deleteModalOpen}
                deleteModalClose={deleteModalClose}
                visible={visible}
                editVisible={editVisible}
                editModalOpen={editModalOpen}
                editModalClose={editModalClose}
                deleteContactInfo={deleteContactInfo}
                handleChange={handleChange}
                viewContactData={viewContactData}
                updateContactInfo={updateContactInfo}
                addUserNavigate={addUserNavigate}
            />
        </>
    )
}

export default AllDataContainer