<template>
  <v-container>
    <h1>Relatório de Cadastro</h1>
    <div v-if="formData && Object.keys(formData).length">
      <p><strong>Nome:</strong> {{ formData.nome }}</p>
      <p><strong>CPF:</strong> {{ formData.cpf }}</p>
      <p><strong>Data de Nascimento:</strong> {{ formData.dataNascimento }}</p>
      <p><strong>Estado Civil:</strong> {{ formData.estadoCivil }}</p>
      <p><strong>Sexo:</strong> {{ formData.sexo }}</p>
      <p><strong>E-mail:</strong> {{ formData.email }}</p>
      <p><strong>Endereço:</strong> {{ formData.endereco }}</p>
      <p><strong>UF:</strong> {{ formData.uf }}</p>
      <p><strong>Celular:</strong> {{ formData.celular }}</p>
    </div>
    <div v-else>
      <p>Os dados do formulário não foram encontrados.</p>
    </div>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        formData: {},
      }
    },
    mounted() {
      const storedData = localStorage.getItem("formData")
      if (storedData) {
        this.formData = JSON.parse(storedData)
      } else {
        this.$router.push({ name: "FormularioUfms" })
      }
    },
  }
</script>
