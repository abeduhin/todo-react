import './CostItem.css';
import Card from '../UI/Card';
import CostDate from './CostDate';
import React, {useState} from 'react';

const CostItem = (props) => {

	const [description, setDescription] = useState(props
		.description);
  
	const changeDescriptionHandler = () => {
		setDescription('СЛАВА УКРАЇНІ');
	};
  
  return (
		<Card className='cost-item'>
			<CostDate date={props.date} />
			<div className='cost-item__description'>
				<h2>{description}</h2>
				<div className='cost-item__price'>₴{props.amount}</div>
			</div>
			<button onClick={changeDescriptionHandler}>Змінити Опис</button>
		</Card>
	)
}
export default CostItem;