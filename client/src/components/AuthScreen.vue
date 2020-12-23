<template>
  <div class="auth">
		<div class="form-side">
			<v-row>
				<h2>Login Screen</h2>
			</v-row>
			<v-row class="subtitle">
				<p>Seja bem vindo à tela de login! Informe o usuário e senha ou se cadastre para logar!</p>	
			</v-row>			
		</div>
		<div class="image-side">
			<h2>Here's the image side</h2>
		</div>
  </div>
</template>

<script>
export default {
	name: "LoginScreen"
};
</script>

<style>
.auth {
	display: flex;
}

.form-side {
	background-color: #dde9e9;
	padding: 60px 45px;
}

.subtitle {
	padding-top: 25px;
}
</style>