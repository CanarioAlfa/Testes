# Especificações do App de Academia

## Objetivo
Criar um aplicativo mobile completo para acompanhamento de treinos, com guia em vídeo/GIF dos exercícios, registro manual de peso e métricas corporais, além de integração com smartwatches como Mi Band para consolidar dados de saúde.

## Stack recomendada
- **Front-end mobile**: Flutter ou React Native (permite Android/iOS e boa performance com mídia).
- **Back-end**: API REST/GraphQL (Node.js, NestJS ou Django), banco PostgreSQL e Redis para cache.
- **Infra**: CDN para vídeos/GIFs, armazenamento em nuvem (S3) e push notifications (Firebase/FCM).
- **Integrações wearable**: Google Fit / Health Connect (Android) e Apple HealthKit (iOS) para sincronizar dados da Mi Band e de outros dispositivos.

## Navegação com painel de abas
Todo o app é organizado em um painel fixo de 4–6 abas (bottom navigation) para manter tudo separado e fácil de acessar:

| Aba | Versão Essencial | Versão Premium | Conteúdo/ações |
| --- | --- | --- | --- |
| **Home** | ✅ | ✅ | Resumo do dia, CTA de iniciar treino, alertas de sincronização e lembretes. |
| **Treinos** | ✅ | ✅ | Catálogo filtrável, playlist de exercícios com vídeo/GIF e botão de pré-download. |
| **Execução** | ✅ | ✅ | Player com timer/repetições, modo espelhado, passo a passo e marcação de séries concluídas. |
| **Progresso** | ✅ | ✅ | Gráficos de peso/cargas, histórico de calorias e passos trazidos do wearable. |
| **Dispositivos** | ✅ | ✅ | Vincular Google Fit/HealthKit/Mi Band, status de permissões e última sincronização. |
| **Nutrição** | ➖ | ✅ | Diário alimentar simplificado, macros sugeridos e sincronização opcional com apps externos. |
| **Comunidade** | ➖ | ✅ | Ranking, desafios semanais, feed de conquistas. |

Regras de UX para as abas:
- Labels curtas e ícones claros; indicar versão Premium com badge em abas exclusivas.
- Cada aba guarda seu estado (scroll, filtros, séries iniciadas) ao alternar.
- Atalhos rápidos na Home para abrir Treinos, Progresso e Dispositivos em um toque.

## Versão 1 – Essencial
- **Autenticação e onboarding**: cadastro com e-mail/social, questionário rápido de objetivos e restrições físicas.
- **Catálogo de treinos**: lista de treinos recomendados por objetivo (hipertrofia, emagrecimento, resistência) com filtros por nível e equipamento.
- **Exercícios com mídia**: cada exercício inclui vídeo curto + GIF em loop, passo a passo, músculos trabalhados e erros comuns.
- **Player com orientação**: controle de tempo/repetições, contagem regressiva, opção de espelhar vídeo, download prévio para uso offline.
- **Registro de progresso**: input manual de peso corporal, medidas e carga usada por exercício; gráficos simples semanais/mensais.
- **Integração básica com wearables**: importação de frequência cardíaca média, calorias e passos via Google Fit/HealthKit; sincronização em segundo plano diária.
- **Notificações**: lembretes de treino e de pesagem semanal.
- **Acessibilidade**: alto contraste, legendas no player, feedback tátil e suporte a screen readers.

### Principais telas
1. **Home**: resumo diário, botão de iniciar treino e cards de progresso.
2. **Treinos**: busca/filtros e lista de treinos; tela de detalhes do treino.
3. **Execução**: player vídeo/GIF com timer, lista de séries e marcação de concluído.
4. **Progresso**: gráficos de peso, calorias e cargas recentes.
5. **Perfil/Dispositivos**: conexão com Google Fit/HealthKit e ajustes de privacidade.
6. **(Opcional) Atalhos na Home**: cartões que levam direto às abas Execução, Progresso e Dispositivos.

### Dados e sincronização
- **Modelo local**: SQLite para cache de treinos/exercícios e registros offline.
- **Sincronização**: fila de eventos (ex.: conclusão de exercício, novo peso) enviada quando online.
- **Mídia**: baixa apenas thumbnails por padrão; vídeo/GIF completo sob demanda ou via pré-download para treino salvo.

## Versão 2 – Premium/Avançada
Inclui tudo da versão essencial e adiciona:
- **Planos personalizados com IA**: ajuste dinâmico de volume/descanso com base no histórico e meta semanal.
- **Técnica assistida**: análise de vídeo do usuário (camera) para checar amplitude e postura, com feedback textual e score por repetição.
- **Wearable avançado**: leitura contínua de FC durante o treino, zonas de intensidade, variabilidade da FC (HRV) e estimativa de VO₂máx quando disponível.
- **Recuperação e sono**: ingestão de dados de sono do wearable para sugerir carga reduzida em dias de baixa recuperação.
- **Biblioteca multimídia expandida**: vídeos em 4K com múltiplos ângulos e GIFs otimizados; download automático de treinos da semana.
- **Social e desafios**: ranking entre amigos, desafios semanais e compartilhamento de conquistas.
- **Nutrição**: diário alimentar simplificado, macros automáticos sugeridos e integração opcional com apps de dieta via API.
- **Relatórios inteligentes**: resumos semanais com PRs, volume por grupo muscular e alertas de estagnação.

### Arquitetura adicional
- **Serviço de recomendação**: microserviço dedicado (Python) com modelo de personalização e regras de negócio.
- **Fila/eventos**: Kafka ou RabbitMQ para processar dados de sensores e análises de vídeo de forma assíncrona.
- **Modelos de visão**: executados no back-end ou on-device (TensorFlow Lite/MediaPipe) para feedback de técnica.

### Considerações de UX
- Modo claro/escuro, tema de cores customizável e widgets de progresso na tela inicial do sistema.
- Fluxo de vinculação do wearable guiado por passo a passo e checagem de permissões granulares.
- Indicação visual de sincronização e última atualização dos dados do smartwatch.

## Métricas e análises
- **Engajamento**: treinos iniciados/concluídos, vídeos assistidos, downloads de treinos.
- **Saúde**: variação de peso, consistência semanal, minutos em zona de FC alvo.
- **Qualidade técnica**: taxa de repetições corretas e replays de instrução.
- **Retenção**: notificações tocadas, streaks de treino e adesão a planos.

## Roadmap sugerido
1. Lançar **Versão 1** com mídia, progressos básicos e integração passiva com wearables.
2. Adicionar IA de plano e técnica assistida em **Versão 2**, junto com social e nutrição.
3. Expandir integrações de smartwatch (Mi Band, Garmin, Polar) e habilitar relatórios inteligentes.

