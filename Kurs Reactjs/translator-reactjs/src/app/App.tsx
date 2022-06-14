import styled, { ThemeProvider } from "styled-components";
import { theme } from "../lib/styles";
import { TranslatorScreen } from "../features/translator";

export const App = () => (
	<ThemeProvider theme={theme}>
		<AppContainer>
			<TranslatorScreen
				// TS Przekazywanie props z pliku TranslatorScreen.tsx
				title="Hello App"
				onClick={() => {}}
				isActive={false}
				onClick2={() => true}
				age={12}
			/>
		</AppContainer>
	</ThemeProvider>
);

// STYLED-COMPONENTS
const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
`;
