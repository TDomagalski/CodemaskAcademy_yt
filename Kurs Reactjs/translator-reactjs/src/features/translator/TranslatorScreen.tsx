import React from "react";
import styled from "styled-components";
import { useTranslations } from "lib/hooks";

export const TranslatorScreen: React.FunctionComponent = () => {
	// Używanie hooka o nazwie useTranslation którego zaimportowaliśmy z kat. lib/hooks
	const T = useTranslations();

	return (
		// Komponent musi coś zwracać, można ustawić return null. W spanie za pomocą {} dostaje się do hooka useTranslations(), który jest w zmiennej o nazwie T
		<Container>
			<span>{T.appName}</span>
		</Container>
	);
};

const Container = styled.div`
	color: ${({ theme }) => theme.colors.typography};
`;
