import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';
import { ExerciseMedia } from '../data/exercises';

type Props = {
  exercise: ExerciseMedia;
};

export const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>{exercise.title}</Text>
          <Text style={styles.meta}>{exercise.muscleGroup} · {exercise.equipment} · {exercise.difficulty}</Text>
        </View>
        <View style={styles.tag}><Text style={styles.tagText}>Sensor +</Text></View>
      </View>
      <View style={styles.mediaContainer}>
        {exercise.videoUrl ? (
          <Video
            source={{ uri: exercise.videoUrl }}
            useNativeControls
            style={styles.video}
            resizeMode="cover"
            isLooping
          />
        ) : (
          <Image source={{ uri: exercise.gifUrl }} style={styles.video} />
        )}
      </View>
      <View style={styles.tips}>
        {exercise.tips.map(tip => (
          <Text key={tip} style={styles.tip}>• {tip}</Text>
        ))}
        {exercise.sensorHints && (
          <Text style={styles.sensor}>Sugestão de métricas: {exercise.sensorHints.join(', ')}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#0F172A',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1F2937'
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color: '#F9FAFB',
    fontWeight: 'bold',
    fontSize: 18
  },
  meta: {
    color: '#9CA3AF',
    marginTop: 4
  },
  tag: {
    backgroundColor: '#22C55E',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999
  },
  tagText: {
    color: '#052E16',
    fontWeight: 'bold'
  },
  mediaContainer: {
    marginVertical: 12,
    height: 200,
    overflow: 'hidden',
    borderRadius: 10
  },
  video: {
    width: '100%',
    height: '100%'
  },
  tips: {
    gap: 4
  },
  tip: {
    color: '#E5E7EB',
    lineHeight: 20
  },
  sensor: {
    marginTop: 6,
    color: '#A5F3FC'
  }
});
