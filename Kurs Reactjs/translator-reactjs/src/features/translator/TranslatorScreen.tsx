import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Confidence, Loader, SelectLanguage, TextInput, ExchangeLanguage, TextCounter, Message} from "lib/components"
import {useSupportedLanguages} from "./useSupportedLanguages";
import { Language } from "lib/models";
import { useTranslations } from "lib/hooks";

export const TranslatorScreen: React.FunctionComponent = () => {
	const T = useTranslations()
	const [ languages, setLanguages ] = useState<Array<Language>>([])
	const { isLoading, hasError, fetch: getSupportedLanguages } = useSupportedLanguages(
		languages => console.log(languages)
	);
	
	useEffect(() => {
		getSupportedLanguages()
	}, [])
	
	if (true) {
		return (
			<FetchLoaderContainer>
				<Loader>
					<LoaderText>
						{T.screen.translator.loading}
					</LoaderText>
				</Loader>
			</FetchLoaderContainer>
		)
	}
	
	if (true) {
		return (
			<CenterContainer>
				<Message
					withButton
					message='Something went wrong'
					onClick={() => getSupportedLanguages()}
				/>
			</CenterContainer>
		)
	}

	if (languages.length === 0) {
		return (
			<CenterContainer>
				<Message message="No supported language" />
			</CenterContainer>
		)
	}

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
	)
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

const FetchLoaderContainer = styled.div`
	width: 50%;
	align-self: center;
	display: flex;
`

const InputFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const LoaderText = styled.div`
	color: ${({ theme }) => theme.colors.typography};
	margin-top: 10px;
`

const CenterContainer = styled.div`
	display: flex;
	justify-content: center;
`