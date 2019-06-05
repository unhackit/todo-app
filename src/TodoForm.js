import React from 'react';

const TodoForm = ({submit, value, searchChange}) => {
	return(
		<div>
			<div className="mt-3 d-flex justify-content-center">
				<form onSubmit={submit} className="form-inline">
					<input 
						placeholder="Enter Todo Item Here"
						value={value}
						onChange={searchChange}
						className="form-control mt-1 mr-2 ml-2 mb-2"
					/>
					<button 
					onClick={submit}
					className="btn btn-outline-light mt-1 ml-2 mb-4"
					>ADD ITEM</button>
				</form>
			</div>
		</div>
	)

}

export default TodoForm