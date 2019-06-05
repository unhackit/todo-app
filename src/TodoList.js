import React from 'react';

const TodoList = ({list, index, deleteItem}) => {

	const style = {
		float: 'right',
		fontSize: '20px'
	}

	return(
		<div className="d-flex justify-content-center">
			<ul className="list-group w-50">
				<li className="list-group-item text-left mt-2">{list}<span><i className="far fa-trash-alt" style={style} onClick={() => deleteItem(index)}></i></span></li>
			</ul>
		</div>
	)
}


export default TodoList