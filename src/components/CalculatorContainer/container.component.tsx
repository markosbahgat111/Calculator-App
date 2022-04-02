import React, { useEffect, useState } from "react";
import "./style.scss";
import Calc from "components/calc/calc.component";
import Total from "components/totalContainer/total.component";
import { ETYPES } from "../../models/process.enum";

interface Props {
	theme: number;
	setTheme: (theme: number) => void;
}

const Container: React.FC<Props> = ({ theme, setTheme }) => {
	const [total, setTotal] = useState<number | null>(null);
	const [processType, setProcessType] = useState<string | null>(null);
	const [numbersBefore, setNumbersBefore] = useState<string>("");
	const [numbersAfter, setNumbersAfter] = useState<string>("");
	const changeTheme = () => {
		if (theme === 1) setTheme(2);
		else if (theme === 2) setTheme(3);
		else setTheme(1);
	};
	useEffect(() => {
		if (numbersBefore.length === 0) setProcessType(null);
	}, [numbersBefore]);
	const handleAddingNumber = (number: number) => {
		if (!processType) {
			setNumbersBefore((numbersBefore) => numbersBefore + String(number));
		} else {
			setNumbersAfter((numbersAfter) => numbersAfter + String(number));
		}
	};
	const handleDel = () => {
		if (!processType || numbersAfter.length === 0) {
			setNumbersBefore((numbersBefore) => numbersBefore.slice(0, numbersBefore.length - 1));
		} else {
			setNumbersAfter((numbersAfter) => numbersAfter.slice(0, numbersAfter.length - 1));
		}
	};
	const handleAddingSympols = (process: string) => {
		if (numbersBefore.length > 0) {
			switch (process) {
				case ETYPES.MINUS:
					setProcessType(ETYPES.MINUS);
					setNumbersBefore((numbersBefore) => numbersBefore + "-");
					break;
				case ETYPES.PLUS:
					setProcessType(ETYPES.PLUS);
					setNumbersBefore((numbersBefore) => numbersBefore + "+");
					break;
				case ETYPES.MULTIPLE:
					setProcessType(ETYPES.MULTIPLE);
					setNumbersBefore((numbersBefore) => numbersBefore + "*");
					break;
				case ETYPES.DIVISION:
					setProcessType(ETYPES.DIVISION);
					setNumbersBefore((numbersBefore) => numbersBefore + "/");
					break;
				case ".":
					if (!processType) setNumbersBefore((numbersBefore) => numbersBefore + ".");
					else setNumbersAfter((numbersAfter) => numbersAfter + ".");
					break;
				default:
					alert("you didn't enter a valid value");
					break;
			}
		}
	};
	const handleProcess = () => {
		const parsedNumbersBefore = parseFloat(numbersBefore);
		const parsedNumbersAfter = parseFloat(numbersAfter);
		switch (processType) {
			case ETYPES.PLUS:
				setTotal(parsedNumbersBefore + parsedNumbersAfter);
				break;
			case ETYPES.MINUS:
				setTotal(parsedNumbersBefore - parsedNumbersAfter);
				break;
			case ETYPES.MULTIPLE:
				setTotal(parsedNumbersBefore * parsedNumbersAfter);
				break;
			case ETYPES.DIVISION:
				setTotal(parsedNumbersBefore / parsedNumbersAfter);
				break;
			default:
				alert("This is A Bad Choice");
				break;
		}
	};
	const handleReset = () => {
		setTotal(null);
		setNumbersAfter("");
		setNumbersBefore("");
		setProcessType(null);
	};
	return (
		<div
			className="main_container w-[400px] min-h-[80vh] flex flex-col justify-around items-center"
			id={"theme" + theme}>
			<div className="w-full flex flex-row justify-between px-1 items-center text-white text-sm">
				<h1 className="text-2xl">Calc</h1>
				<div className="flex flex-row justify-between items-center w-1/3">
					<p className="text-xs">THEME</p>
					<div className="w-1/2">
						<div className="flex flex-row justify-between items-center">
							<span onClick={() => setTheme(1)} className="cursor-pointer">
								1
							</span>
							<span onClick={() => setTheme(2)} className="cursor-pointer">
								2
							</span>
							<span onClick={() => setTheme(3)} className="cursor-pointer">
								3
							</span>
						</div>
						<div className="w-full rounded-full toggle">
							<i
								className="transition-all duration-300 ease-in-out delay-150 fa-solid fa-circle text-xs cursor-pointer h-full w-full"
								id={`theme${theme}`}
								onClick={changeTheme}></i>
						</div>
					</div>
				</div>
			</div>
			<Total theme={theme} numbers={numbersBefore + numbersAfter} total={total} />
			<Calc
				theme={theme}
				handleAddingNumber={handleAddingNumber}
				handleAddingSympols={handleAddingSympols}
				handleDel={handleDel}
				handleProcess={handleProcess}
				handleReset={handleReset}
			/>
		</div>
	);
};

export default Container;
