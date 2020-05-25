import styled from 'styled-components';

/*Mobile First*/

export const Wrapper = styled.section`
	text-align: center;
	background-color: #f9f9f9;
	font-family: Lato;
	display: grid;
	grid-template-columns: repeat(1, 1fr);

	@media screen and (min-width: 900px){
		grid-template-columns: repeat(1, 1fr);
	}
`
export const Principal = styled.div`

`

export const DivAvatar = styled.div`

`

export const SubPrincipal = styled.div`
    display: grid;
	grid-template-columns: repeat(1, 1fr);

	@media screen and (min-width: 900px){
		grid-template-columns: repeat(2, 1fr);
	}
`
export const Icons = styled.ul`
	display: flex;
`

export const Infos = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);

	@media screen and (min-width: 900px){
		grid-template-columns: repeat(2, 1fr);
	}

`
export const Avatar = styled.img`
	border-radius: 50%;
	width: 40%;
	height: 12rem;
	margin-left: auto;
	margin-right: auto;
` 
export const Name = styled.span `
	font-size: 1.5em;
	color: #939393;
   	font-weight: 300;
`
export const Info = styled.div`
		
`
export const Profession = styled.span`
	color: #F8BB10;
	text-transform: uppercase;
    font-weight: 700;
`
export const Title = styled.h4`
	color: gray;
`
export const Content = styled.p`
	color: gray;
`