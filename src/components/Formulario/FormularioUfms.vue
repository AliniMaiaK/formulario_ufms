<template>
  <v-container>
    <div class="bodyformulario">
      <h1>Formulário</h1>

      <form action="pagina_ficticia" method="POST">
        <!-- Dados Pessoais -->

        <fieldset>
          <legend>Dados Pessoais</legend>
          <br />

          <div class="mx-6">
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" required />
            <br />
            <br />

            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" maxlength="11" required />
            <br />
            <br />

            <label for="data-nascimento">Data de Nascimento:</label>
            <input
              type="date"
              id="data-nascimento"
              name="data-nascimento"
              required
            />
            <br />
            <br />

            <label for="estado-civil">Estado Civil:</label>
            <select id="estado-civil" name="estado-civil" required>
              <br />
              <br />
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
                <input class="mx-2" type="radio" id="masculino" name="sexo" value="M" required />
                </div>
                
                <div class="d-flex">
                <label for="feminino">Feminino</label><br />
                <input class="mx-2" type="radio" id="feminino" name="sexo" value="F" />
          
              </div>
            </div>
          </div>
       

        </fieldset>
        <br/>

        <!-- Dados de Contato -->

        <fieldset>
          <legend>Dados de Contato</legend>

          <div class="mx-6">
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <br />

            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required />
            <br />
            <br />

            <label for="bairro">Bairro:</label>
            <input type="text" id="bairro" name="bairro" required />
            <br />
            <br />

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" required />
            <br />
            <br />

            <label for="uf">UF:</label>
            <select id="uf" name="uf" required>
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
            <br />
            <br />

            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" maxlength="8" required />
            <br />
            <br />

            <label for="celular">Celular:</label>
            <input type="tel" id="celular" name="celular" required />
            <br />
            <br />
          </div>
        </fieldset>
        <br />

        <!-- Dados de Cadastro -->

        <fieldset>
          <legend>Dados de Cadastro</legend>
          <br />

          <div class="mx-6">
            <label for="login">Login:</label>
            <input type="text" id="login" name="login" required />
            <br />
            <br />

            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required />
            <br />
            <br />

            <label>Deseja receber informações sobre:</label>
            <br />
            <br />

                    <div class="d-flex">
            <div class="checkbox-group">
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="tecnologia"
                  name="interesses"
                  value="tecnologia"
                />
                <label for="tecnologia">Tecnologia</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="esportes" name="interesses" value="esportes" />
                <label for="esportes">Esportes</label>
              </div>
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="automoveis"
                  name="interesses"
                  value="automoveis"
                />
                <label for="automoveis">Automoveis</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="culinaria" name="interesses" value="culinaria" />
                <label for="culinaria">Culinária</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="politica" name="interesses" value="politica" />
                <label for="politica">Política</label>
              </div>
            </div>

            <div class="checkbox-group">
              <div class="checkbox-item">
                <input type="checkbox" id="policial" name="interesses" value="policial" />
                <label for="policial">Policial</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="tempo" name="interesses" value="tempo" />
                <label for="tempo">Tempo</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="cultura" name="interesses" value="cultura" />
                <label for="cultura">Cultura</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="economia" name="interesses" value="economia" />
                <label for="economia">Economia</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="jogos" name="interesses" value="jogos" />
                <label for="jogos">Jogos</label>
              </div>
            </div>

            <div class="checkbox-group">
              <div class="checkbox-item">
                <input type="checkbox" id="educacao" name="interesses" value="educacao" />
                <label for="educacao">Educação</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="viagem" name="interesses" value="viagem" />
                <label for="viagem">Viagem</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="emprego" name="interesses" value="emprego" />
                <label for="emprego">Emprego</label>
              </div>
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="moda-estilo"
                  name="interesses"
                  value="moda-e-estilo"
                />
                <label for="moda-estilo">Moda e estilo</label>
              </div>
           </div>
          </div>
              <br />
              <br />

            <input type="checkbox" id="termo" name="termo" value="termo"/>
            <label for="termos">Li as regras de cadastro e autorizo a criação do usuário</label><br/>
            
            </div>
            </fieldset>

            <br/>
          <button type="submit">Confirmar</button>
        <button type="reset">Retornar</button>

      </form>
    </div>
  </v-container>
</template>

<script setup>
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
  gap: 5px;
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

</style>
