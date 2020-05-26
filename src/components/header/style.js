import styled from 'styled-components';

/*Mobile First*/

export const Wrapper = styled.section`
	text-align: center;
	background-color: white;
	font-family: Lato;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
`
export const DivAvatar = styled.div`
`
export const Avatar = styled.img`
	width: 40%;
	margin: 5% auto 5% auto; /*TRBL*/
` 
export const Principal = styled.div`

`

export const SubPrincipal = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
`
export const TitlePrincipal = styled.div`

	display: grid;
	grid-template-columns: repeat(1, 1fr);

`
export const Name = styled.span `
	font-size: 1.5em;
	color: #939393;
   	font-weight: 300;
`
export const Profession = styled.span`
	color: #F8BB10; 
	text-transform: uppercase;
    font-weight: 700;
    font-size: 25px;

`
export const Icons = styled.ul`
	margin-top: 5%;
`
export const Ancora = styled.a`
	color: gray;
	padding-left: 3%;

	.ancora:hover {
		color: #F8BB10; 
	}
`
export const Infos = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);

`
export const Info = styled.div`
		
`
export const Title = styled.h4`
	color: gray;
	font-weight: bold;
`
export const Content = styled.p`
	color: gray;
`