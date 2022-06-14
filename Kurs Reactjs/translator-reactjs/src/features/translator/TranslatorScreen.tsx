import React from "react";
import styled from "styled-components";

// Typy w TypeScript
type TranslatorScreenProps = {
	isActive: boolean;
	age?: number; // znak ? = opcjonalnie (number && undefined)
	title: string;
	onClick(): void;
	onClick2(): boolean;
};

export const TranslatorScreen: React.FunctionComponent<
	TranslatorScreenProps
	// Argumentami są właściwości typu TranslatorScreenProps
> = ({ title, age }) => {
	return (
		<Container>
			<p>Title is: {title}</p>
			<p>Age is: {age}</p>
		</Container>
	);
};

const Container = styled.div`
	color: ${({ theme }) => theme.colors.typography};
`;
