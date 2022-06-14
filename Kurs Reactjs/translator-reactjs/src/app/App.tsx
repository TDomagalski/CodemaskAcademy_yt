import styled, { ThemeProvider } from "styled-components";
import { theme } from "../lib/styles";

export const App = () => (
	<ThemeProvider theme={theme}>
		<AppContainer>
			<span>Hello World!!!</span>
		</AppContainer>
	</ThemeProvider>
);

// STYLED-COMPONENTS
const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
`;
