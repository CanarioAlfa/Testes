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
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.meta}>{exercise.muscleGroup} · {exercise.equipment} · {exercise.difficulty}</Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#111827',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1F2937'
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
    color: '#D1D5DB',
    lineHeight: 20
  }
});
