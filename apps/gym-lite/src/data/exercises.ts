export type ExerciseMedia = {
  title: string;
  muscleGroup: string;
  equipment: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  videoUrl?: string;
  gifUrl?: string;
  tips: string[];
};

export const exercises: ExerciseMedia[] = [
  {
    title: 'Agachamento com barra',
    muscleGroup: 'Pernas e glúteos',
    equipment: 'Barra olímpica',
    difficulty: 'Intermediário',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-fitness-1637/1080p.mp4',
    gifUrl: 'https://raw.githubusercontent.com/andreseichi/fitness-gifs/main/barbell-squat.gif',
    tips: ['Mantenha o tronco firme e neutro', 'Empurre o chão com os calcanhares', 'Respire no topo do movimento']
  },
  {
    title: 'Supino reto',
    muscleGroup: 'Peito e tríceps',
    equipment: 'Barra ou halteres',
    difficulty: 'Intermediário',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-crossfit-training-1392/1080p.mp4',
    gifUrl: 'https://raw.githubusercontent.com/andreseichi/fitness-gifs/main/bench-press.gif',
    tips: ['Ative as escápulas antes de descer a barra', 'Controle na descida, acelere na subida', 'Pés firmes no chão para dar estabilidade']
  },
  {
    title: 'Prancha abdominal',
    muscleGroup: 'Core',
    equipment: 'Peso corporal',
    difficulty: 'Iniciante',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-the-hard-way-9263/1080p.mp4',
    gifUrl: 'https://raw.githubusercontent.com/andreseichi/fitness-gifs/main/plank.gif',
    tips: ['Alinhe ombros com cotovelos', 'Não deixe o quadril cair', 'Respire de forma controlada']
  }
];
