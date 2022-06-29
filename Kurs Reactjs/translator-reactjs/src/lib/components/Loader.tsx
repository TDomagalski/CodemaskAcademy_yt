import React from "react"
import styled from "styled-components"

// Na funkcji Loader używamy React.FunctionComponent. Dzięki temu z pliku features/translator/TranslatorScreen między znacznikami Loader wpadają jako props do zmiennej children
// @ts-ignore
export const Loader: React.FunctionComponent = ({ children }) => {
	
	return (
		<LoaderContainer>
			<ActivityIndicator />
			{/* @TODO - Conditional render - do poczytania */}
			{/* Conditional render */}
			{children && (
				<ChildrenContainer>
					{children}
				</ChildrenContainer>
			)}
		</LoaderContainer>
	)
}

const ActivityIndicator = styled.div`
	width: 100%;
  height: 2px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  animation: loading 1s linear infinite alternate;
  
  @keyframes loading {
		0% {
			width: 0;
		}
		100% {
			width: 100%;
		}
  }
`

const ChildrenContainer = styled.div`
  text-align: center;
`

const LoaderContainer = styled.div`
  width: 100%;
`