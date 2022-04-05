import "./Write.css"

const Write = () => {
    return (
        <div className="write">
            <img
            className="writeImg"
            src="https://images.unsplash.com/photo-1501425359013-96058e410cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80" alt="" />
        <form className="writeForm">

            <div className="writeFormGroup">
                <label htmlFor="fileInput">

                <i className="writeIcon fa-solid fa-file-circle-plus"></i>
                </label>
              <input type="file"  id="fileInput" style={{display:"none"}} />
              <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your Story......" type="text" className="writeInput writeText "></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
        </div>
    );
};

export default Write;