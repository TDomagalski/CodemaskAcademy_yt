import React from "react";
import styled from "styled-components";
import {Confidence, Loader, SelectLanguage, TextInput, ExchangeLanguage, TextCounter, Counter} from "lib/components"
// import { useTranslations } from "lib/hooks";

export const TranslatorScreen: React.FunctionComponent = () => {
	// Używanie hooka o nazwie useTranslation którego zaimportowaliśmy z kat. lib/hooks
	// const T = useTranslations();

	return (
		// Komponent musi coś zwracać, można ustawić return null. W spanie za pomocą {} dostaje się do hooka useTranslations(), który jest w zmiennej o nazwie T
		<Container>
			<Counter initialValue={0} />
			<Container2>
				<TranslatorContainer>
					<InputContainer>
						<SelectLanguage />
						<TextInput />
						<LoaderContainer>
							<Loader />
						</LoaderContainer>
						<InputFooter>
							<Confidence />
							<TextCounter />
						</InputFooter>
					</InputContainer>
					<ExchangeLanguage />
					<InputContainer>
						<SelectLanguage />
						<TextInput />
						<LoaderContainer>
							<Loader />
						</LoaderContainer>
						<InputFooter>
							<Confidence />
							<TextCounter />
						</InputFooter>
					</InputContainer>
				</TranslatorContainer>
			</Container2>
		</Container>
	);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const Container2 = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	color: ${({ theme }) => theme.colors.typography};
`;

const TranslatorContainer = styled.div`
	display: flex;
  	justify-content: space-around;
  	margin-top: 50px;
  	flex-wrap: wrap;
`

const InputContainer = styled.div`
	display: flex;
  	flex-direction: column;
`

const LoaderContainer = styled.div`
	padding: 0 10px;
`

const InputFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

