import React from 'react';

const NewPizzaForm = () => {
	return (
		<div>
			<h1>Craft-A-Pizza</h1>
			<form>
				<div>
          <div>
            <label htmlFor='method'>Pickup/Delivery:</label>
            <label htmlFor="size">SIZE:</label>
            <label htmlFor="toppings">TOPPINGS</label>
          </div>
        </div>
			</form>
		</div>
	);
};

export default NewPizzaForm;
