import styled from "styled-components";
import { useTranslations } from "lib/hooks";
import { Images } from "assets";
import { APP_CONFIG } from "lib/config";

export const Header = () => {
	const T = useTranslations();

	return (
		<HeaderContainer>
			<LogoContainer>
				<Logo src={Images.Logo} />
				{/* Te wartości pobieramy z utworzonego Hooka o nazwie T, natomiast hook pobiera wartości z pliku locale/en_GB.ts */}
				<Title>{T.components.header.title}</Title>
			</LogoContainer>
			<LinkContainer>
				{/* Te wartości pobieramy z utworzonego Hooka o nazwie T, natomiast hook pobiera wartości z pliku locale/en_GB.ts */}
				<Link href={APP_CONFIG.GITHUB_URL} target="_blank">
					{T.components.header.github}
				</Link>
				{/* Te wartości pobieramy z utworzonego Hooka o nazwie T, natomiast hook pobiera wartości z pliku locale/en_GB.ts */}
				<Link href={APP_CONFIG.LINKEDIN_URL} target="_blank">
					{T.components.header.linkedin}
				</Link>
			</LinkContainer>
		</HeaderContainer>
	);
};

// Tworzenie własnych znaczników za pomocą pluginu styled-components i przypisywanie im palety kolorów stworzonej wcześniej
const HeaderContainer = styled.div`
	height: 60px;
	background-color: ${({ theme }) => theme.colors.foreground};
	padding: 0 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Logo = styled.img`
	width: 36px;
	height: 36px;
	margin-right: 10px;
`;

const Title = styled.h1`
	display: inline;
	font-size: 20px;
	color: ${({ theme }) => theme.colors.typography};
`;

const LinkContainer = styled.div``;

const Link = styled.a`
	color: ${({ theme }) => theme.colors.typography};
	text-decoration: underline;
	cursor: pointer;
	padding: 0 10px;
`;
