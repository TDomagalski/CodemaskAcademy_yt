import styled from "styled-components"

export const SelectLanguage = () => {
	return (
		<Select>
			<Option>
				Polish
			</Option>
			<Option>
				English
			</Option>
		</Select>
	)
}

const Select = styled.select`
	max-width: 140px;
  height: 24px;
  padding: 0 10px;
	margin-bottom: 10px;
	//-webkit-appearance: none;
	border: 0;
	font-size: 14px;
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.typography};
`;

const Option = styled.option``;