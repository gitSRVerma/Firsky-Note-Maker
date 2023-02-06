import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
// import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  }); 



  const [isExpanded, setExpanded] = useState(false);





  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();  // prevents the entire reloading of the page
  }


  function expand(){
    setExpanded(true);
  }



  return (
    <div>
      <form>
        {isExpanded ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}   
        {/* if isExpanded is set to true then we render the inpur else it is set to null */}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          // rows="3"
          rows={isExpanded ? 3 : 1}
        />
        {/* <button onClick={submitNote}>Add</button> */}
        <button onClick={submitNote}>+</button>
        {/* <button onClick={submitNote}> */}

        {/* <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
        <AddIcon />
        </Fab>
        </Zoom> */}

      </form>
    </div>
  );
}

export default CreateArea;