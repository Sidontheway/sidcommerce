import React, { useState, useEffect } from 'react';

const name = ["Days", "Hours", "Minutes", "Seconds"];

const CountdownTimer = ({ targetDate }) => {
	const calculateTimeRemaining = () => {
		const now = new Date().getTime();
		const targetTime = new Date(targetDate).getTime();
		const timeRemaining = targetTime - now;

		const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
		const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

		return [days, hours, minutes, seconds];
	};

	const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeRemaining(calculateTimeRemaining());
		}, 1000);

		// Clear the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className = "mt-3">
			<p>Expires In :</p>


			<div className='grid grid-cols-4'>
				{
					timeRemaining.map((time, key) => {
						return (
							<div>
								<div className=" p-2 border-2 border-gray-200 w-16 h-14 text-2xl text-[#fc0303] font-bold flex gap-5 ">
									{(() => {
										if (time < 10) {
											return "0" + time;
										} else {
											return time;
										}
									})()}
									<span className='text-gray-600 p-0 border-none justify-center text-3xl ml-2'>
										{(() => {
											if (key == 3) {
												return null
											} else {
												return ":";
											}
										})()}
									</span>
								</div>
								<h1 className='font-semibold text-normal text-left'>{name[key]}</h1>
							</div>
						)
					})
				}
			</div>
		</div>

	);
};

export default CountdownTimer;
