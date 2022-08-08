function BasicInput({label, type, value, onChange}) {
    return (
        <div className="my-5">
            <label htmlFor="QrCode" className="block mb-2">{label}</label>
            <input 
            type={type}
            value={value}
            onChange={onChange} 
            className="border-2 border-black"
            />
        </div>
    );
}

export default BasicInput;