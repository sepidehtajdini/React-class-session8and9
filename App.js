import Form from './8and9/Form/Form';
import Post from './8and9/Post/Post';
import { useState, useEffect } from 'react';
function App() {
  const [isPostSubmitted, setIsPostSubmitted] = useState(false);
  const [postContent, setPostContent] = useState(null);
  const [englishTitle, setEnglishTitle] = useState(null);
  const [persianTitle, setPersianTitle] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [date, setDate] = useState(null);
  const [age, setAge] = useState(null);
  const [category, setCategory] = useState(null);

  function handleOnPostSubmitted(newPersianTitle, newEnglishTitle, newCategory, newFullname, newAge, newDate, newPostContent) {
    setPersianTitle(newPersianTitle);
    setEnglishTitle(newEnglishTitle);
    setCategory(newCategory);
    setFullname(newFullname);
    setAge(newAge);
    setDate(newDate);
    setPostContent(newPostContent);
    setIsPostSubmitted(true);

    localStorage.setItem("Post1", JSON.stringify({
      persianTitle: newPersianTitle,
      englishTitle: newEnglishTitle,
      category: newCategory,
      fullname: newFullname,
      age: newAge,
      date: newDate,
      postContent: newPostContent
    }))
  }
  useEffect(() => {
    if (localStorage.getItem("post1")) {
      const values = JSON.parse(localStorage.getItem("post1"));
      setPersianTitle(values.persianTitle);
      setEnglishTitle(values.EnglishTitle);
      setCategory(values.Category);
      setFullname(values.Fullname);
      setAge(values.Age);
      setDate(values.Date);
      setPostContent(values.PostContent);
      setIsPostSubmitted(true);
    }
  }, [])
  return (
    <div className="container">
      {
        isPostSubmitted
          ? <Post
            persianTitle={persianTitle}
            englishTitle={englishTitle}
            category={category}
            fullname={fullname}
            age={age}
            date={date}
            postContent={postContent}
            setIsPostSubmitted={setIsPostSubmitted} />

          : <Form onPostSubmitted={handleOnPostSubmitted} />
      }
    </div>
  );
}

export default App;