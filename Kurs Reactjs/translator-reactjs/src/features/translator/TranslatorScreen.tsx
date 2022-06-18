import React, {useEffect} from "react";
import styled from "styled-components";
import {Confidence, Loader, SelectLanguage, TextInput, ExchangeLanguage, TextCounter} from "lib/components"
import {useSupportedLanguages} from "./useSupportedLanguages";

export const TranslatorScreen: React.FunctionComponent = () => {
	const { isLoading, hasError, fetch: getSupportedLanguages } = useSupportedLanguages(
		languages => console.log(languages)
	);
	
	useEffect(() => {
		getSupportedLanguages()
	}, [])

	return (
		// Komponent musi coś zwracać, można ustawić return null. W spanie za pomocą {} dostaje się do hooka useTranslations(), który jest w zmiennej o nazwie T
		// Conditional rendering
		<Container>
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