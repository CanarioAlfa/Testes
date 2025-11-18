import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ExerciseCard } from '../components/ExerciseCard';
import { DashboardCard } from '../components/DashboardCard';
import { exercises } from '../data/exercises';

export const HomeScreen: React.FC = () => {
  const [weight, setWeight] = useState('79.4');
  const [history, setHistory] = useState<string[]>(['79.4 kg - Hoje', '79.9 kg - Ontem']);
  const [wearableConnected, setWearableConnected] = useState(true);
  const [autoSync, setAutoSync] = useState(true);

  const todayHighlight = useMemo(() => history[0], [history]);

  const handleSave = () => {
    if (!weight.trim()) return;
    setHistory([`${weight} kg - Hoje`, ...history]);
    setWeight(weight);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Gym Pro</Text>
      <Text style={styles.subtitle}>Assuma o controle do treino com métricas, vídeo e sensores</Text>

      <View style={styles.grid}>
        <DashboardCard title="Carga semanal" value="12.3 t" helper="Acima da semana passada em 8%" />
        <DashboardCard title="Sono" value="7h 45m" helper="Qualidade 86% via Mi Band" />
        <DashboardCard title="Batimentos" value="62 bpm" helper="Média de repouso hoje" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Treinos com feedback</Text>
        <Text style={styles.sectionSubtitle}>Vídeo ou GIF + dicas de sensor para corrigir técnica</Text>
        {exercises.map(item => (
          <ExerciseCard key={item.title} exercise={item} />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Peso e composição</Text>
        <Text style={styles.sectionSubtitle}>Registre peso, acompanhe tendência e sincronize balanças inteligentes</Text>
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
        <Text style={styles.sectionTitle}>Smartwatchs e sensores</Text>
        <Text style={styles.sectionSubtitle}>Mi Band, Apple Watch, Garmin e sensores de cadência</Text>
        <View style={styles.cardRow}>
          <View style={styles.cardRowText}>
            <Text style={styles.sectionTitle}>Mi Band conectada</Text>
            <Text style={styles.meta}>Passos, batimentos, HRV e sono enviados a cada sessão</Text>
          </View>
          <Switch value={wearableConnected} onValueChange={setWearableConnected} thumbColor="#22C55E" trackColor={{ true: '#14532D', false: '#1F2937' }} />
        </View>
        <View style={styles.cardRow}>
          <View style={styles.cardRowText}>
            <Text style={styles.sectionTitle}>Sincronização automática</Text>
            <Text style={styles.meta}>Coletar dados de treino, passos e calorias de fundo</Text>
          </View>
          <Switch value={autoSync} onValueChange={setAutoSync} thumbColor="#38BDF8" trackColor={{ true: '#0F172A', false: '#1F2937' }} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Planejamento diário</Text>
        <Text style={styles.sectionSubtitle}>Use o readiness para decidir se deve treinar pesado ou regenerativo</Text>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Readiness 82%</Text>
          <Text style={styles.meta}>Baseado em HRV, sono e fadiga de treino</Text>
          <Text style={styles.tip}>Sugestão: séries de força 4x8 RPE 7 + 10 min de hiit leve</Text>
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
    padding: 16,
    paddingBottom: 40
  },
  title: {
    color: '#F9FAFB',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#9CA3AF',
    marginBottom: 16
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16
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
    justifyContent: 'space-between',
    marginBottom: 10
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
    backgroundColor: '#38BDF8',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#082F49',
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
  },
  tip: {
    marginTop: 8,
    color: '#A5F3FC'
  }
});
