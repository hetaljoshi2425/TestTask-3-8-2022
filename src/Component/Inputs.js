import {CFormInput,CFormLabel} from "@coreui/react";

const InputFields = (props) => {
    const {htmlfor,label,type,id,placeholder,onChange,name,value} = props;
  return (
    <>
    <CFormLabel htmlFor={htmlfor}>{label}</CFormLabel>
    <CFormInput
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
    </>
  );
};

export default InputFields ;
