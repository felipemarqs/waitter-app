import React from "react";
import { Modal, TouchableOpacity , Platform} from "react-native";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { Overlay, ModalBody, Header, Form , Input } from "./styles";
import { Button } from "../Button";

export function TableModal() {
	return (
		<Modal transparent>
			<Overlay behavior={Platform.OS === "android" ? 'height' : 'padding' }>
				<ModalBody>
					<Header>
						<Text weight="600">Informe a mesa</Text>

						<TouchableOpacity>
							<Close color="#666" />
						</TouchableOpacity>
					</Header>
					<Form>
						<Input
							placeholder="Número da mesa"
							placeholderTextColor= '#666'
							keyboardType="number-pad"
						/>

						<Button onPress={() => alert('Salvou!')} >
							Salvar
						</Button>
					</Form>
				</ModalBody>
			</Overlay>
		</Modal>
	);
}
