import styled from "styled-components";
import { Images } from "assets";

export const ExchangeLanguage = () => {
	
	return (
		<Exchange src={Images.Exchange} />
	)
}

const Exchange = styled.img`
	width: 40px;
  height: 40px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.thypography};
`