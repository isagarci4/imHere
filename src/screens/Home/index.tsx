import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from './styles'

export function Home() {
  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João']

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!")
  }

  function handleParticipantRemove() {
    console.log("Você clicou em remover um participante")
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2024.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant 
            key={participant}
            name={participant} 
            onRemove={handleParticipantRemove}
          />
        ))}
      </ScrollView>
    </View>
  )
}