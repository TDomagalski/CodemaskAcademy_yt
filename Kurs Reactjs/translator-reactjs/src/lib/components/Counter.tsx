import React, {useState} from "react";
import styled from "styled-components";

type CounterProps = {
	initialValue: number,
	onAdd(): void,
	onSub(): void,
}

export const Counter: React.FunctionComponent<CounterProps> = ({
	// @TODO destructering - poczytać
	initialValue,
	onAdd
}) => {
	let [value, setValue] = useState(initialValue);
	const [name, setName] = useState("Tomasz");
	
	return (
		<CounterContainer>
			<Sub onClick={() => {
				setValue(value--);
			}}>-</Sub>
			<Result>
				{value}
			</Result>
			<Add onClick={() => {
				setValue(value++);
			}}>+</Add>
		</CounterContainer>
	)
}

const CounterContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Sub = styled.div`
  color: #000;
	font-size: 32px;
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Result = styled.div`
  color: ${({ theme }) => theme.colors.typography};
  margin: 0 15px;
  font-size: 32px;
`;

const Add = styled.div`
  color: #000;
	font-size: 32px;
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
