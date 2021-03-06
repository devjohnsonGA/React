import React, { Component } from 'react'
// import FaPencil from 'react-icons/lib/fa/pencil'
// import FaTrash from 'react-icons/lib/fa/trash'

class Note extends Component {
    constructor(props){
        super(props)
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
    }
    edit() {
        alert('editing note')
    }
    remove(){
        alert('removing note')
    }
    render() {
        return (
            <div className="note">
                <p>Learn React Dev</p>
                <span>
                    <button onClick={this.edit} id="edit">Edit</button>
                    <button onClick={this.remove} id="remove">Delete </button>
                 </span>   
            </div>
        )
    }
}

export default Note