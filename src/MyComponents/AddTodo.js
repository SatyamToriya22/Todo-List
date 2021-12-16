import React,{useState} from 'react';

export default function AddTodo({addTodo}) {
    // let style={width:'600px'}

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')

    const OnSubmit= (e) => {
        e.preventDefault()
        if (title==='' || content==='')
        {
            alert('Title and Content are Not Filled Correctly')
        }
        else{
               console.log(`title - ${title}  content - ${content}`)
               
               addTodo(title,content)
               setTitle('')
               setContent('')
        }
        
    }

    return <>
        <div className='container my-5 text-light' >
            <form onSubmit={OnSubmit}>
                <h2>Add Todo</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} id="title" aria-describedby="textHelp" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputContent" className="form-label">Content</label>
                    <input type="text" className="form-control" value={content} id="content" onChange={(e) => setContent(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    </>
}