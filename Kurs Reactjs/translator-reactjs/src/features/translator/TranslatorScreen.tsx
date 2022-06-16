import React from "react";
import styled from "styled-components";
import { TextInput } from "lib/components"
// import { useTranslations } from "lib/hooks";

export const TranslatorScreen: React.FunctionComponent = () => {
	// Używanie hooka o nazwie useTranslation którego zaimportowaliśmy z kat. lib/hooks
	// const T = useTranslations();

	return (
		// Komponent musi coś zwracać, można ustawić return null. W spanie za pomocą {} dostaje się do hooka useTranslations(), który jest w zmiennej o nazwie T
		<Container>
			<TranslatorContainer>
				<TextInput />
				<TextInput />
			</TranslatorContainer>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	color: ${({ theme }) => theme.colors.typography};
`;

const TranslatorContainer = styled.div`
	display: flex;
  	justify-content: space-around;
  	margin-top: 50px;
  	
`