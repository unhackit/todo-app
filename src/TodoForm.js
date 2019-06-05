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
						className="form-control m-3"
					/>
					<button 
					onClick={submit}
					className="btn btn-light m-3"
					>ADD ITEM</button>
				</form>
			</div>
		</div>
	)

}

export default TodoForm