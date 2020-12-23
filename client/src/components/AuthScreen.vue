<template>
  <div class="auth">
    <div class="form-side">
      <v-row>
        <v-col class="title">
          <h2>Login Screen</h2>
        </v-col>
      </v-row>
      <v-row class="subtitle">
        <v-col>
          <p>
            Seja bem vindo à tela de login! Informe o usuário e senha ou se
            cadastre para logar!
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="9" class="text-field">
          <v-text-field placeholder="Informe seu email" solo></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="9" class="text-field">
          <v-text-field type="password" placeholder="Informe sua senha" solo></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn cols="12" sm="9" id="login-button" large color="primary">
            Entrar
          </v-btn></v-col
        >
      </v-row>
    </div>
    <div class="image-side">
      <h2>Here's the image side</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginScreen",
};
</script>

<style>
.auth {
  display: flex;
	height: 100vh;
}

.title{
	color: #2237ac;
}

.form-side {
  background-color: #dde9e9;
  padding: 60px 45px;
}

.subtitle {
  padding-top: 25px;
}

.text-field {
  padding-bottom: 0px !important;
}

@media only screen and (min-width: 600px) {
  #login-button {
    width: 74%;
  }
}
</style>