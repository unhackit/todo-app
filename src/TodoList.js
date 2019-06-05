import React from 'react';

const TodoList = ({list, index, deleteItem}) => {

	const style = {
		float: 'right',
		fontSize: '20px'
	}

	return(
		<div>
			<div className="d-flex justify-content-center">
				<ul className="list-group w-70">
					<li className="list-group-item text-left mt-2">{list}<span><i className="far fa-trash-alt" style={style} onClick={() => deleteItem(index)}></i></span></li>
				</ul>
			</div>
		</div>
	)
}


export default TodoList