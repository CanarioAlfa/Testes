export type ExerciseMedia = {
  title: string;
  muscleGroup: string;
  equipment: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  videoUrl?: string;
  gifUrl?: string;
  tips: string[];
  sensorHints?: string[];
};

export const exercises: ExerciseMedia[] = [
  {
    title: 'Levantamento terra',
    muscleGroup: 'Posterior e core',
    equipment: 'Barra olímpica',
    difficulty: 'Avançado',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-urban-workout-8078/1080p.mp4',
    gifUrl: 'https://raw.githubusercontent.com/andreseichi/fitness-gifs/main/deadlift.gif',
    tips: ['Barra próxima à canela', 'Ative o core antes de subir', 'Mantenha a coluna neutra'],
    sensorHints: ['Inclinação do tronco', 'Velocidade da barra', 'Batimento durante a série']
  },
  {
    title: 'Remada curvada',
    muscleGroup: 'Costas',
    equipment: 'Barra ou halteres',
    difficulty: 'Intermediário',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-workout-1404/1080p.mp4',
    gifUrl: 'https://raw.githubusercontent.com/andreseichi/fitness-gifs/main/barbell-row.gif',
    tips: ['Umbigo apontando para o banco', 'Puxe com cotovelos colados', 'Pare a barra na linha do umbigo'],
    sensorHints: ['Rotação de punho', 'Amplitude do cotovelo', 'Fadiga pelo HRV']
  },
  {
    title: 'Afundo alternado',
    muscleGroup: 'Pernas',
    equipment: 'Halteres',
    difficulty: 'Iniciante',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-home-workout-4261/1080p.mp4',
    gifUrl: 'https://raw.githubusercontent.com/andreseichi/fitness-gifs/main/lunge.gif',
    tips: ['Passo firme mantendo joelho alinhado', 'Queda controlada', 'Ative glúteo na subida'],
    sensorHints: ['Equilíbrio do tornozelo', 'Tempo sob tensão por perna']
  }
];
