import { useState } from "react";
import "./form.css";
import Button from "../Button/Button";
import Input from "./Input/Input";
function Form({ onPostSubmitted }) {
    const [valuePersianTitle, setValuePersianTitle] = useState('');
    const [valueEnglishTitle, setValueEnglishTitle] = useState('');
    const [valueFullname, setValueFullname] = useState("");
    const [valueAge, setValueAge] = useState("");
    const [valueDate, setValueDate] = useState('');
    const [valueCategory, setValueCategory] = useState('انتخاب موضوع پست');
    const [valueTextArea, setValueTextArea] = useState("");
    const [invalidPersianTitle, setInvalidPersianTitle] = useState("validated");
    const [invalidEnglishTitle, setInvalidEnglishTitle] = useState("validated");
    const [invalidFullname, setInvalidFullname] = useState("validated");
    const [invalidAge, setInvalidAge] = useState("validated");
    const [invalidDate, setInvalidDate] = useState("validated");
    const [invalidCategory, setInvalidCategory] = useState("validated");
    const [invalidTextArea, setInvalidTextArea] = useState("validated");
    const [borderPersianTitle, setBorderPersianTitle] = useState("");
    const [borderEnglishTitle, setBorderEnglishTitle] = useState("");
    const [borderFullname, setBorderFullname] = useState("");
    const [borderAge, setBorderAge] = useState("");
    const [borderDate, setBorderDate] = useState("");
    const [borderTextArea, setBorderTextArea] = useState("");
    const [labelPersianTitle, setLabelPersianTitle] = useState("");
    const [labelEnglishTitle, setLabelEnglishTitle] = useState("");
    const [labelFullname, setLabelFullname] = useState("");
    const [labelAge, setLabelAge] = useState("");
    const [labelDate, setLabelDate] = useState("");
    const [labelCategory, setLabelCategory] = useState("");
    const [labelTextArea, setLabelTextArea] = useState("");
    const [categoryContent, setCategoryContent] = useState("category-content hide");
    function handleSubmit(e) {
        e.preventDefault();
        if (valuePersianTitle === "") {
            setInvalidPersianTitle("invalidFeedback");
            setBorderPersianTitle("redBorder");
            setLabelPersianTitle("redLabel");
            return;
        }
        if (valueEnglishTitle === "") {
            setInvalidEnglishTitle("invalidFeedback");
            setBorderEnglishTitle("redBorder");
            setLabelEnglishTitle("redLabel");
            return;
        }
        if (valueCategory === "انتخاب موضوع پست") {
            setInvalidCategory("invalidFeedback");
            setLabelCategory("redLabel");
            return;
        }
        if (valueFullname.length < 5) {
            setInvalidFullname("invalidFeedback");
            setBorderFullname("redBorder");
            setLabelFullname("redLabel");
            return;
        }
        if (valueAge !== "" && valueAge < 18) {
            setInvalidAge("invalidFeedback");
            setBorderAge("redBorder");
            setLabelAge("redLabel");
            return;
        }
        else if (valueAge === "") {
            setValueAge("");
            setInvalidAge("validated");
            setBorderAge("");
            setLabelAge("");
        }
        if (valueDate === "") {
            setInvalidDate("invalidFeedback");
            setBorderDate("redBorder");
            setLabelDate("redLabel");
            return;
        }
        if (valueTextArea.length < 100) {
            setInvalidTextArea("invalidFeedback");
            setBorderTextArea("redBorder");
            setLabelTextArea("redLabel");
            return;
        }
        onPostSubmitted(valuePersianTitle, valueEnglishTitle, valueCategory, valueFullname, valueAge, valueDate, valueTextArea)
    }

    function handlePersianTitleChange(e) {
        const regExp = /^[ا-ی 0-9]*$/.test(e.target.value)
        if (regExp) {
            setValuePersianTitle(e.target.value);
            setInvalidPersianTitle("validated");
            setBorderPersianTitle("greenBorder");
            setLabelPersianTitle("greenLabel");
        }
    }
    function handleEnglishTitleChange(e) {
        const regExp = /^[a-z 0-9]*$/i.test(e.target.value);
        if (regExp) {
            setValueEnglishTitle(e.target.value);
            setInvalidEnglishTitle("validated");
            setBorderEnglishTitle("greenBorder");
            setLabelEnglishTitle("greenLabel");
        }
    }

    function handleFullnameChange(e) {
        const regExp = /^[ا-ی a-z]*$/i.test(e.target.value);
        if (regExp) {
            setValueFullname(e.target.value);
            setInvalidFullname("validated");
            setBorderFullname("greenBorder");
            setLabelFullname("greenLabel");
        }
    }
    function handleAgeChange(e) {
        if ((e.target.value.length) < 3 || e.target.value === "") {
            setValueAge(e.target.value);
            setInvalidAge("validated");
        }
    }
    function handleDateChange(e) {
        const today =
            `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;

        if (e.target.value >= today) {
            setValueDate(e.target.value);
            setInvalidDate("validated");
            setBorderDate("greenBorder");
            setLabelDate("greenLabel");
        }
    }
    function handleCategoryChange(e) {
        setCategoryContent("category-content show");
        if (valueCategory !== "انتخاب موضوع پست") {
            setInvalidCategory("validated");
            setLabelCategory("greenLabel");
        }
    }
    function selectCategory1(e) {
        setValueCategory("سیاسی");
        setCategoryContent("category-content hide");
        setInvalidCategory("validated");
        setLabelCategory("greenLabel");
    }
    function selectCategory2(e) {
        setValueCategory("فرهنگی");
        setCategoryContent("category-content hide");
        setInvalidCategory("validated");
        setLabelCategory("greenLabel");
    }
    function selectCategory3(e) {
        setValueCategory("اجتماعی");
        setCategoryContent("category-content hide");
        setInvalidCategory("validated");
        setLabelCategory("greenLabel");
    }
    function selectCategory4(e) {
        setValueCategory("مذهبی");
        setCategoryContent("category-content hide");
        setInvalidCategory("validated");
        setLabelCategory("greenLabel");
    }
    function selectCategory5(e) {
        setValueCategory("طنز و سرگرمی");
        setCategoryContent("category-content hide");
        setInvalidCategory("validated");
        setLabelCategory("greenLabel");
    }
    function handleTextAreaChange(e) {
        setValueTextArea(e.target.value);
        if (e.target.value.length <= 1000 && e.target.value.length >= 100) {
            setInvalidTextArea("validated");
            setBorderTextArea("greenBorder");
            setLabelTextArea("greenLabel");
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form" dir="rtl">
            تکمیل موارد ستاره دار الزامی است *
            <Input
                name="persiantitle"
                labelClassName={labelPersianTitle}
                labelText="عنوان پست (فارسی): *"
                value={valuePersianTitle}
                type="text"
                onChange={handlePersianTitleChange}
                inputClassName={borderPersianTitle}
                divClassName={invalidPersianTitle}
                divText="عنوان پست را وارد نمایید"
            />

            <Input
                name="englishtitle"
                labelClassName={labelEnglishTitle}
                labelText="عنوان پست (انگلیسی): *"
                value={valueEnglishTitle}
                type="text"
                onChange={handleEnglishTitleChange}
                inputClassName={borderEnglishTitle}
                divClassName={invalidEnglishTitle}
                divText="عنوان پست را وارد نمایید"
            />
            <div className="form_row category">
                <label htmlFor="category" className={labelCategory}>موضوع پست: *</label>
                <Button onClick={handleCategoryChange} name="category" className="purple-btn category-btn"
                    text={valueCategory} />
                <div className={categoryContent}>
                    <Button onClick={selectCategory1} className="violet-btn" text="سیاسی" />
                    <Button onClick={selectCategory2} className="violet-btn" text="فرهنگی" />
                    <Button onClick={selectCategory3} className="violet-btn" text="اجتماعی" />
                    <Button onClick={selectCategory4} className="violet-btn" text="مذهبی" />
                    <Button onClick={selectCategory5} className="violet-btn" text="طنز و سرگرمی" />
                </div>
                <div className={invalidCategory}>موضوع پست را انتخاب نمایید</div>
            </div>
            <Input
                name="fullname"
                labelClassName={labelFullname}
                labelText="نام و نام خانوادگی: *"
                value={valueFullname}
                type="text"
                onChange={handleFullnameChange}
                inputClassName={borderFullname}
                divClassName={invalidFullname}
                divText="حداقل باید ۵ کاراکتر باشد"
            />
            <Input
                name="age"
                labelClassName={labelAge}
                labelText="سن:"
                value={valueAge}
                type="number"
                onChange={handleAgeChange}
                inputClassName={borderAge}
                divClassName={invalidAge}
                divText="باید بین  ۱۹ و  و ۹۹ باشد"
            />
            <Input
                name="date"
                labelClassName={labelDate}
                labelText="تاریخ: *"
                value={valueDate}
                type="date"
                onChange={handleDateChange}
                inputClassName={borderDate}
                divClassName={invalidDate}
                divText="تاریخ را وارد نمایید"
            />
            <div className="form_row">
                <label htmlFor="text area" className={labelTextArea}>متن پست: *</label>
                <textarea value={valueTextArea} onChange={handleTextAreaChange} name="text area"
                    className={borderTextArea} />
                <span>{valueTextArea.length} / 1000</span>
                <div className={invalidTextArea}>باید بین ۱۰۰  تا ۱۰۰۰ کاراکتر باشد</div>
            </div>
            <Button className="purple-btn" type="submit" text="ثبت" />
        </form >
    );
}
export default Form;