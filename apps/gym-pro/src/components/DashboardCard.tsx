import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  value: string;
  helper?: string;
};

export const DashboardCard: React.FC<Props> = ({ title, value, helper }) => (
  <View style={styles.card}>
    <Text style={styles.label}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
    {helper && <Text style={styles.helper}>{helper}</Text>}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1F2937'
  },
  label: {
    color: '#9CA3AF'
  },
  value: {
    color: '#F9FAFB',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 4
  },
  helper: {
    color: '#A5F3FC',
    marginTop: 6
  }
});
