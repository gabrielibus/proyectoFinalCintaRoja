import React from "react"
import "./ColorCards.css"


function NewTask(props) {
    const title = props.title
    const task = props.task
    const priority = props.priority
    const responsible = props.responsible
    return (
        <div>
            <div className="row">
                <div className="col s12 m6 l3" >
                    <div className="card" >
                        <div className="card-colorRed" >
                        </div>
                        <div className="title" >
                            <span className="card-title" > <b>{title}</b>  </span>


                        </div>
                        <div className="priority" >
                            
                            <br></br>
                        </div>
                        <div className="task" >
                            <span > <b>{task}</b> </span>
                        </div>
                        <div className="responsible" >
                            <span > {responsible} </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewTask;