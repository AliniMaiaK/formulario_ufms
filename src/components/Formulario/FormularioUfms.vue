<template>
  <v-container>
    <div class="bodyformulario">
      <h1>Relatório de Cadastro</h1>

      <form @submit.prevent="submitForm">
        <!-- Dados Pessoais -->

        <fieldset>
          <legend>Dados Pessoais</legend>
          <br />

          <div class="mx-6">
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" v-model="formData.nome" required />
            <br />
            <br />

            <label for="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              v-model="formData.cpf"
              maxlength="11"
              required
            />
            <br />
            <br />

            <label for="data-nascimento">Data de Nascimento:</label>
            <input
              type="date"
              id="data-nascimento"
              v-model="formData.dataNascimento"
              required
            />
            <br />
            <br />

            <label for="estado-civil">Estado Civil:</label>
            <select id="estado-civil" v-model="formData.estadoCivil" required>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="viuvo">Viúvo</option>
              <option value="divorciado">Divorciado</option>
            </select>

            <br />
            <br />

            <label>Sexo:</label>
            <div class="d-flex">
              <div class="d-flex">
                <label for="masculino">Masculino</label>
                <input
                  class="mx-2"
                  type="radio"
                  id="masculino"
                  v-model="formData.sexo"
                  value="M"
                  required
                />
              </div>

              <div class="d-flex">
                <label for="feminino">Feminino</label><br />
                <input
                  class="mx-2"
                  type="radio"
                  id="feminino"
                  v-model="formData.sexo"
                  value="F"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <br />

        <!-- Dados de Contato -->

        <fieldset>
          <legend>Dados de Contato</legend>

          <div class="mx-6">
            <label for="email">E-mail:</label>
            <input type="email" id="email" v-model="formData.email" required />
            <br />
            <br />

            <label for="endereco">Endereço:</label>
            <input
              type="text"
              id="endereco"
              v-model="formData.endereco"
              required
            />
            <br /><br />

            <label for="bairro">Bairro:</label>
            <input type="text" id="bairro" v-model="formData.bairro" required />
            <br /><br />

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" v-model="formData.cidade" required />
            <br /><br />

            <label for="uf">UF:</label>
            <select id="uf" v-model="formData.uf" required>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MG">MG</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="PR">PR</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="RS">RS</option>
              <option value="SC">SC</option>
              <option value="SE">SE</option>
              <option value="SP">SP</option>
              <option value="TO">TO</option>
            </select>
            <br /><br />

            <label for="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              v-model="formData.cep"
              maxlength="8"
              required
            />
            <br /><br />

            <label for="celular">Celular:</label>
            <input
              type="tel"
              id="celular"
              v-model="formData.celular"
              required
            />
            <br /><br />
          </div>
        </fieldset>
        <br />

        <!-- Dados de Cadastro -->
        <fieldset>
          <legend>Dados de Cadastro</legend>
          <br />

          <div class="mx-6">
            <label for="login">Login:</label>
            <input type="text" id="login" v-model="formData.login" required />
            <br /><br />

            <label for="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              v-model="formData.senha"
              required
            />
            <br /><br />

            <label>Deseja receber informações sobre:</label>
            <br /><br />

            <div class="checkbox-group">
              <div
                v-for="interesse in interessesDisponiveis"
                :key="interesse.value"
              >
                <input
                  type="checkbox"
                  :id="interesse.value"
                  :value="interesse.value"
                  v-model="formData.interesses"
                />
                <label :for="interesse.value">{{ interesse.label }}</label>
              </div>
            </div>
            <br /><br />

            <div class="d-flex">
              <div class="d-flex align-items-start">
                <input
                  type="checkbox"
                  id="termo"
                  v-model="formData.termo"
                  class="me-2 input-term"
                />
                <label for="termo"
                  >Li as regras de cadastro e autorizo a criação do
                  usuário</label
                >
              </div>
            </div>
          </div>
        </fieldset>
        <br />

        <div class="d-flex">
          <div>
            <button type="submit">Confirmar</button>
          </div>
          <div class="mx-5">
            <button type="reset">Retornar</button>
          </div>
        </div>
      </form>
    </div>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          nome: "",
          cpf: "",
          dataNascimento: "",
          estadoCivil: "",
          sexo: "",
          email: "",
          endereco: "",
          bairro: "",
          cidade: "",
          uf: "",
          cep: "",
          celular: "",
          login: "",
          senha: "",
          interesses: [],
          termo: false,
        },
        interessesDisponiveis: [
          { label: "Tecnologia", value: "tecnologia" },
          { label: "Esportes", value: "esportes" },
          { label: "Automóveis", value: "automoveis" },
          { label: "Culinária", value: "culinaria" },
          { label: "Política", value: "politica" },
          { label: "Policial", value: "policial" },
          { label: "Tempo", value: "tempo" },
          { label: "Cultura", value: "cultura" },
          { label: "Economia", value: "economia" },
          { label: "Jogos", value: "jogos" },
          { label: "Educação", value: "educacao" },
          { label: "Viagem", value: "viagem" },
          { label: "Emprego", value: "emprego" },
          { label: "Moda e estilo", value: "moda-e-estilo" },
        ],
      }
    },
    methods: {
      submitForm() {
        localStorage.setItem("formData", JSON.stringify(this.formData))

        this.$router.push({ name: "Relatorio" })
      },
    },
  }
</script>

<style scoped>
  .bodyformulario {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f9f9f9;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  form {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  fieldset {
    margin-bottom: 15px;
    border: 1px solid #ccc;
    padding: 10px;
  }

  legend {
    font-weight: bold;
  }

  label {
    display: block;
    margin: 5px 0;
  }

  input,
  select,
  button {
    width: 100%;
    padding: 8px;
    margin: 5px 0 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  input:required:invalid {
    border-color: red;
  }

  input:focus {
    border-color: blue;
  }

  .d-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 10px;
    width: 100%;
  }

  .checkbox-item {
    display: flex;
    align-items: center;
    flex: 0 0 10%;
    justify-content: flex-start;
  }

  .checkbox-item input {
    margin-right: 0px;
  }

  .input-term {
    width: 13px !important;
  }
  .label-width {
    width: 200px !important;
    margin-left: -20%;
  }
</style>
