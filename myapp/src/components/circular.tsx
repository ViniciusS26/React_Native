import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CircularProgress = ({ percentage = 85, size = 76, strokeWidth = 8 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} style={styles.svg}>
        {/* Círculo de Fundo (Trilho) */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#7B61FF" // Roxo claro do fundo
          strokeWidth={strokeWidth}
          fill="none"
          strokeOpacity={0.3}
        />
        {/* Círculo de Progresso */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F1F0FF" // Branco/Lilás bem claro da imagem
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round" // Isso faz as pontas ficarem redondas
          rotation="-90" // Rotaciona para começar do topo
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      {/* Texto Centralizado */}
      <View style={[StyleSheet.absoluteFillObject, styles.textContainer]}>
        <Text style={styles.text}>{percentage}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    transform: [{ rotateZ: '0deg' }],
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CircularProgress;