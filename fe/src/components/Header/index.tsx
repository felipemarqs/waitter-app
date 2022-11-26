import {Container, Content} from './styles';

import logo from '../../assets/images/logo.svg'


export function Header() {
	return (
		<Container>
			<Content>
				<div className="page-details">
					<h1>Pedidos</h1>
					<h2>Acompanhe os pedidos do clientes</h2>
				</div>
				<img src={logo} alt="LOGO" />
			</Content>
		</Container>
	)
}