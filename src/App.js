import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {

  const costs = [
    {
      date: new Date(2018, 5, 15),
      description: 'Холодильник',
      amount: 574.25
    },

    {
      date: new Date(2017, 3, 17),
      description: 'Годинник',
      amount: 698.47
    },

    {
      date: new Date(2015, 4, 5),
      description: 'Свитер',
      amount: 54.28
    }
  ];


    return (
			<div>
				<NewCost/>
				<div className='costs'>
					<Costs costs = {costs}></Costs>
				</div>
			</div>
		)
}

export default App;
