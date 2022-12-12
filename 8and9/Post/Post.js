import Button from "../Button/Button";
import Div from "./Div/Div";
import "./post.css";
function Post({ persianTitle, englishTitle, category, fullname, age, date, postContent, setIsPostSubmitted }) {
    function agePreview() {
        if (age === "") { return ("") }
        else { return (`<div>سن: ${age}</div>`) }
    }
    function newPost() {
        localStorage.clear();
        setIsPostSubmitted(false);
    }
    return (
        <div className="container">
            <Button className="purple-btn container-btn" text="ایجاد پست جدید" onClick={newPost} />
            <div className="container_post">
                <div className="postTitle">
                    <Div
                        className="postTitle_persian"
                        text={persianTitle} />
                    <Div
                        className="postTitle_english"
                        text={englishTitle}
                    />
                </div>
                <div>
                    <div className="postBody">
                        <div>موضوع پست: {category}</div>
                        <div>نام و نام خانوادگی: {fullname}</div>
                        <div dangerouslySetInnerHTML={{ __html: agePreview() }} />
                        <time>تاریخ: {date}</time>
                    </div>
                    <pre className="postBody_textArea" dangerouslySetInnerHTML={{ __html: postContent }} />
                </div>
            </div>
        </div>
    );
}

export default Post;