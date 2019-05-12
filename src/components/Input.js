import React from 'react'

export default function Input(props) {
  return (

        <form className="form-inline" onSubmit={props.onSubmit}>
            <div className="input-group mb-3 mx-auto">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter TODO" 
                    size="80"
                    value={props.input}
                    onChange={props.onChange}
                />
            <div className="input-group-append">
                <button className="btn btn-primary" type="submit">Submit TODO</button>
            </div>
            </div>
        </form>



  )
}
