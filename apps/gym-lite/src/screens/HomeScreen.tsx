import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ExerciseCard } from '../components/ExerciseCard';
import { exercises } from '../data/exercises';

export const HomeScreen: React.FC = () => {
  const [weight, setWeight] = useState('80');
  const [history, setHistory] = useState<string[]>(['80 kg - Hoje']);
  const [wearableConnected, setWearableConnected] = useState(true);

  const todayHighlight = useMemo(() => history[0], [history]);

  const handleSave = () => {
    if (!weight.trim()) return;
    setHistory([`${weight} kg - Hoje`, ...history]);
    setWeight(weight);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Treinos guiados</Text>
        <Text style={styles.sectionSubtitle}>Demonstração em vídeo ou GIF para validar a execução</Text>
        {exercises.map(item => (
          <ExerciseCard key={item.title} exercise={item} />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Controle de peso</Text>
        <Text style={styles.sectionSubtitle}>Registre seu peso para acompanhar a evolução semanal</Text>
        <View style={styles.card}>
          <TextInput
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
            style={styles.input}
            placeholder="Ex: 79.5"
            placeholderTextColor="#6B7280"
          />
          <TouchableOpacity onPress={handleSave} style={styles.button}>
            <Text style={styles.buttonText}>Salvar peso</Text>
          </TouchableOpacity>
          <Text style={styles.meta}>Último registro: {todayHighlight}</Text>
          <View style={styles.history}>
            {history.map(item => (
              <Text key={item} style={styles.historyItem}>• {item}</Text>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Relógios e pulseiras</Text>
        <Text style={styles.sectionSubtitle}>Sincronize sua Mi Band ou outro smartwatch para importar batimentos, passos e sono</Text>
        <View style={styles.cardRow}>
          <View style={styles.cardRowText}>
            <Text style={styles.sectionTitle}>Mi Band conectada</Text>
            <Text style={styles.meta}>Sincronização automática de biometria</Text>
          </View>
          <Switch value={wearableConnected} onValueChange={setWearableConnected} thumbColor="#22C55E" trackColor={{ true: '#14532D', false: '#1F2937' }} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220'
  },
  content: {
    padding: 16
  },
  section: {
    marginBottom: 24
  },
  sectionTitle: {
    color: '#F9FAFB',
    fontSize: 18,
    fontWeight: 'bold'
  },
  sectionSubtitle: {
    color: '#9CA3AF',
    marginBottom: 12
  },
  card: {
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1F2937'
  },
  cardRow: {
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardRowText: {
    flex: 1,
    marginRight: 12
  },
  input: {
    backgroundColor: '#111827',
    color: '#F9FAFB',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#1F2937'
  },
  button: {
    marginTop: 12,
    backgroundColor: '#22C55E',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#052E16',
    fontWeight: 'bold'
  },
  meta: {
    color: '#9CA3AF',
    marginTop: 8
  },
  history: {
    marginTop: 8,
    gap: 4
  },
  historyItem: {
    color: '#D1D5DB'
  }
});
