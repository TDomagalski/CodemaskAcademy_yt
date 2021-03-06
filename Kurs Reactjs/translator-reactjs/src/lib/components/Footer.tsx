import { APP_CONFIG } from "lib/config";
import { useTranslations } from "lib/hooks";
import styled from "styled-components";

export const Footer = () => {
	const T = useTranslations();

	//POBIERAMY ROK W JS
	const year = new Date().getFullYear();

	return (
		<FooterContainer>
			<CodemaskAcademy>
				&copy; {year} {T.companyName}
			</CodemaskAcademy>
			<LinkContainer>
				<Link href={APP_CONFIG.FLAT_ICON_URL} target="_blank">
					{T.components.footer.flatIcon}
				</Link>
				<Link href={APP_CONFIG.LIBRE_TRANSLATE_URL} target="_blank">
					{T.components.footer.libreTranslate}
				</Link>
			</LinkContainer>
		</FooterContainer>
	);
};

// STYLED-COMPONENTS
const FooterContainer = styled.div`
	height: 60px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
	background-color: ${({ theme }) => theme.colors.foreground};
`;

const CodemaskAcademy = styled.div`
	color: ${({ theme }) => theme.colors.typography};
`;

const LinkContainer = styled.div``;

const Link = styled.a`
	color: ${({ theme }) => theme.colors.typography};
	text-decoration: underline;
	cursor: pointer;
	padding: 0 10px;
`;
