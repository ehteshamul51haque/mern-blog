import { useState } from 'react';
import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.snow.css';
export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];
    return (
        <form>
            <input type="title" placeholder={"Title"}
                value={title}
                onChange={ev => setTitle(ev.target.value)} />
            <input type="summary" placeholder={'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)} />
            <input type="file" />
            <ReactQuill
                value={content}
                onChange={newValue => setContent(newValue)}
                modules={modules} formats={formats} />
            <button style={{ marginTop: '5px' }}>Create Post</button>
        </form>
    );
}