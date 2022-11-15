import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text){
            alert ('pls add task')
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
        
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label> Task</label>
            <input type="text" placeholder="add task" value={text} 
            onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label> day & Time </label>
            <input type="text" placeholder="add day and time" value={day} 
            onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label> set reminder</label>
            <input type="checkbox" checked={reminder} placeholder="add task" className='align-center' value={reminder} 
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value= 'save task' className="btn btn-block bg-dark text-white"/>

    </form>
  )
}

export default AddTask
