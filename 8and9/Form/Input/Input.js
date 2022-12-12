import "./input.css";
function Input({ name, labelClassName, labelText, value, type, onChange, inputClassName, divClassName, divText }) {
    return (
        <div className="form_row">
            <label htmlFor={name} className={labelClassName}>{labelText}</label>
            <input name={name} value={value} type={type} onChange={onChange} className={inputClassName} autoFocus />
            <div className={divClassName}>{divText}</div>
        </div>
    )
}
export default Input