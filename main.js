let usuario = prompt("ingrese su palaba: ");

function rot13(){
	const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
	let codifiacion = []
	let arrUsuario = usuario.split("");
	let encode = "";

	for (let i = 0; i < arrUsuario.length; i++){
		const index = alfabeto.indexOf(arrUsuario[i])
		encode += output[index];
	}
	return encode;
}

alert(rot13("abc"));