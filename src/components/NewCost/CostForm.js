import React, {useState} from 'react';
import './CostForm.css';

const CostForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('')
  
  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: ''
  // });
  const nameChangeHandler = (event) => {
    setName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   name: event.target.value
    // })
      //  setUserInput((previousState) => {
      //   return {
      //     ...previousState,
      //     name: event.target.value
      //   }

      //  })
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
		// 	...userInput,
		// 	amount: event.target.value,
		// })
  }

  const dateChangeHandler = event => {
		setDate(event.target.value)
    // setUserInput({
		// 	...userInput,
		// 	date: event.target.value,
		// })
	}

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: name,
      amount: amount,
      date: new Date(date)
    };
    console.log(costData);
    setName('');
    setAmount('');
    setDate('');
  };
  return (
		<form onSubmit={submitHandler}>
			<div className='new-cost__controls'>
				<div className='new-cost__control'>
					<label>Назва</label>
          
					<input type='text' value={name} onChange={nameChangeHandler} />
				</div>
				<div className='new-cost__control'>
					<label>Сума</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={amount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-cost__control'>
					<label>Дата</label>
					<input
						type='date'
						min='2022-02-24'
						max='2023-12-31'
						value={date}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className='new-cost__actions'>
					<button type='submit'>Добавити Витрату</button>
				</div>
			</div>
		</form>
	)
}
 
export default CostForm;