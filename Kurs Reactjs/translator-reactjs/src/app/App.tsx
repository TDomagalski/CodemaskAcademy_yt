import styled, { ThemeProvider } from "styled-components";
import { theme } from "lib/styles";
import { TranslatorScreen } from "features/translator";
import { Header, Footer } from "lib/components";

export const App = () => (
	<ThemeProvider theme={theme}>
		<AppContainer>
			<Header />
			<TranslatorScreen />
			<Footer />
		</AppContainer>
	</ThemeProvider>
);

// STYLED-COMPONENTS
const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
