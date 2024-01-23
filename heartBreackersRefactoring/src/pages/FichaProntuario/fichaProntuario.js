
//importando bibliotecas que serão utilizadas no código, talvez seja necessário baixa-las
//No terminal do vs redirecione para a pasta que o seu projeto esta alocado e instale as bibliotecas 
//npm install react-native-picker-select
//npm install react-native-masked-text
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';

//criando especificações para as máscaras nos inputs
const MaskedInput = ({ type, options, placeholder, onChangeText, value }) => {
  return (
    <TextInputMask
      style={styles.input}
      type={type}
      options={options}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const prontuarioFicha = () => {
  //pega o que foi inserido no input e filtra na máscara e depois seta no input
  const [nome, setNome] = useState('');
  const [dataNascimento, setdataNascimento] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [sexo, setSexo] = useState(null);
  const [sangue, setSangue] = useState(null);

  //adiciona opções nos inputs
  const sexoOpções = [
    {label: 'Masculino', value: 'M'},
    {label: 'Feminino', value: 'F'},
    {label: 'Outro', value: 'O'},
  ];

  const sangueOpções =[
    {label: 'A+', value: '1'},
    {label: 'A-', value: '2'},
    {label: 'B+', value: '3'},
    {label: 'B-', value: '4'},
    {label: 'AB+', value: '5'},
    {label: 'AB-', value: '6'},
    {label: 'O+', value: '7'},
    {label: 'O-', value: '8'},
  ]
  //marcação da página
  return (
    <ScrollView>
      <View style={styles.pai}>
        <View style={styles.containerPaiFichadopaciente}>
          <Text style={styles.tituloFicha}>
            FICHA DO PACIENTE
          </Text>
          <View style={styles.containerFilho1}>
            <Image source={require("./imagens/perfil.png")} style={styles.imagemPerfil}></Image>
            <TouchableOpacity style={styles.botaoTrocarImagem}>
              <Text style={styles.botaoTrocarImagemTexto}>Trocar foto</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerFilho2}>
            <View style={styles.containerInf}>
              <Text style={styles.nomeInf}>Nome:</Text>
              <TextInput style={styles.inserirInf} 
              placeholder="Digite o nome do paciente"
              type={'custom'}
              value= {nome}
              onChangeText={(input) => setNome(input.replace(/[^a-zA-Z]/g, ''))}/>
            </View>
            <View style={styles.containerInf}>
              <Text style={styles.nomeInf}>CPF:</Text>
              <TextInputMask style={styles.inserirInf} 
              type={'cpf'}
              value={cpf}
              onChangeText={(formatted, extracted) => setCpf(extracted)}
              placeholder="Digite o CPF do paciente"/>
            </View>
            <View style={styles.containerInf}>
              <Text style={styles.nomeInf}>RG:</Text>
              <TextInputMask style={styles.inserirInf} 
                placeholder="Digite o RG do paciente"
                type={'custom'}
                options={{
                  mask: 'AA-99.999.999',
                }}
                value={rg}
                onChangeText={(extracted) => {setRg(extracted);}}
              />
            </View>
            <View style={styles.containerInf}>
              <Text style={styles.nomeInf}>Endereço:</Text>
              <TextInput style={styles.inserirInf} 
              placeholder="Digite o endereço do paciente"/>
            </View>
            <View style={styles.containerInf}>
              <Text style={styles.nomeInf}>Data de nascimento:</Text>
              <TextInputMask style={styles.inserirInf} 
              placeholder="Selecione a data de nascimento do paciente"
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              value={dataNascimento}
              onChangeText={(formatted, extracted) => setdataNascimento(extracted)}/>
            </View>
          </View>
          <View style={styles.containerFilho3}>
            <View style={styles.containerInf2}>
              <Text style={styles.nomeInf}>Peso(KG)</Text>
              <TextInput style={styles.inserirInf2}
              placeholder="Digite o peso" 
              type={'custom'}
              keyboardType="numeric"
              value={peso}
              onChangeText={(input) => setPeso(input.replace(/[^0-9,]/g, ''))}/>
            </View>
            <View style={styles.containerInf2}>
              <Text style={styles.nomeInf}>Altura(metros)</Text>
              <TextInput style={styles.inserirInf2} 
              placeholder="Digite a altura"
              type={'custom'}
              keyboardType="numeric"
              value={altura}
              onChangeText={(input) => setAltura(input.replace(/[^0-9,]/g, ''))}/>
            </View>
          </View>
          <View style={styles.containerFilho3}>
            <View style={styles.containerInf2}>
              <Text style={styles.nomeInf}>Sexo</Text>
              <RNPickerSelect style={styles}
              value={sexo}
              items={sexoOpções}
              onValueChange={(value) => setSexo(value)}
              placeholder={{ label: 'Selecione...', value: null}}/>
            </View>
            <View style={styles.containerInf2}>
              <Text style={styles.nomeInf}>Tipo sanguíneo</Text>
              <RNPickerSelect style={styles} 
              value={sangue}
              items={sangueOpções}
              onValueChange={(value) => setSangue(value)}
              placeholder={{ label: 'Selecione...', value: null}}/>
            </View>
          </View>
        </View>
        <View style={styles.containerPaiProntuariodopaciente}>
          <Text style={styles.tituloProntuario}>
            PRONTUARIO
          </Text>
          <View style={styles.containerAnotacoes}>
            <Text style={styles.tituloAnotacoes}>Queixa Principal</Text>
            <TextInput style={styles.inserirAnotacoes}
            multiline={true}/>
            <Text style={styles.tituloAnotacoes}>Histórico</Text>
            <TextInput style={styles.inserirAnotacoes}
            multiline={true}/>
            <Text style={styles.tituloAnotacoes}>Alergias</Text>
            <TextInput style={styles.inserirAnotacoes}
            multiline={true}/>
            <Text style={styles.tituloAnotacoes}>CID</Text>
            <TextInput style={styles.inserirAnotacoes}
            multiline={true}/>
            <Text style={styles.tituloAnotacoes}>Exame Físico</Text>
            <TextInput style={styles.inserirAnotacoes}
            multiline={true}/>
            <Text style={styles.tituloAnotacoes}>Conduta</Text>
            <TextInput style={styles.inserirAnotacoes}
            multiline={true}/>
            <Text style={styles.tituloAnotacoes}>Hipótese de Diagnóstico</Text>
            <TextInput style={styles.inserirAnotacoes}
            multiline={true}/>
            <Text style={styles.tituloAnotacoes}>Diagnóstico</Text>
            <TextInput style={styles.inserirAnotacoes}
            multiline={true}/>
            <Text style={styles.tituloAnotacoes}>Resultado dos Exames</Text>
            <TextInput style={styles.inserirAnotacoes}
            multiline={true}/>
            <TouchableOpacity style={styles.botaoAnexo}>
              <Text style={styles.botaoAnexarTexto}>
                Baixar Anexo
              </Text>
            </TouchableOpacity>
          </View>
        </View> 
        <View style={styles.footerbotoes}>
          <TouchableOpacity style={styles.botaoFooter}>
            <Text style={styles.botaoFooterText}>
                Salvar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoFooter}>
            <Text style={styles.botaoFooterText}>
                Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoFooter}>
            <Text style={styles.botaoFooterText}>
                Excluir
            </Text>
          </TouchableOpacity>
        </View>
      </View>  
    </ScrollView >
  )
}

//estilização da página
const styles = StyleSheet.create({
  pai: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  containerPaiFichadopaciente: {
    //backgroundColor: '#DCDCDC',
    //justifyContent: 'center',
    alignItems: 'center',
    //flex: 1,
    paddingTop: 80,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerPaiProntuariodopaciente: {
    backgroundColor: '#A9A9A9',
    //justifyContent: 'center',
    alignItems: 'center',
    //flex: 1,
    paddingTop: 80,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerFilho1: {
    alignItems: 'center',
    width: '80%',
    marginTop: 80,
    marginBottom: 50,
  },
  containerFilho2: {
    flex: 1,
    flexDirection: 'column',
    width: '80%',
  },
  containerFilho3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 5,
    marginTop: 5,
  },
  tituloFicha: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#808080',
  },
  tituloProntuario: {
    color: '#DCDCDC',
    fontSize: 40,
    fontWeight: 'bold',
  },
  imagemPerfil: {
    width: '60%',
    height: 180,
  },
  botaoTrocarImagem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#B22222',
    width: '50%',
    height: 30,
    borderRadius: 5,
  },
  botaoTrocarImagemTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  botaoAnexo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B22222',
    width: '50%',
    height: 30,
    borderRadius: 5,
  },
  botaoAnexarTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  inserirInf: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '100%',
    paddingLeft: 5,
    fontSize: 12,
  },
  containerInf: {
    marginBottom: 5,
    marginTop: 5,
    width: '100%',
  },
  nomeInf: {
    width: '100%',
    color: '#808080',
  },
  containerInf2: {
    width: '45%',
  },
  inserirInf2: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 5,
    fontSize: 12,
  },
  inputAndroid: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 5,
    fontSize: 12,
  },
  inputIOS: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 5,
    fontSize: 12,
  },
  containerAnotacoes: {
    alignItems: 'center',
    alignItems: 'center',
    width: '80%',
    marginTop: 80,
    marginBottom: 50,
  },
  tituloAnotacoes: {
    fontSize: 20,
    color: '#DCDCDC',
  },
  inserirAnotacoes: {
    borderRadius: 5,
    marginBottom: 30,
    width: '70%',
    backgroundColor: 'white',
    height: 80,
    paddingLeft: 5,
    paddingRight: 5,

  },
  footerbotoes: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#A9A9A9',
  },
  botaoFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B22222',
    width: '30%',
    height: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  botaoFooterText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default prontuarioFicha;
