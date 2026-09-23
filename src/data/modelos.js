// ============================================
// MODELOS DE AUTOPROPELIDOS — FICHA TÉCNICA
// Adicione/edite modelos aqui.
// Este arquivo é usado por:
//   - src/pages/ficha-tecnica.astro
//   - src/pages/buscar.astro
// ============================================

export const modelos = [
  {
    nome: 'Jet Max',
    marca: 'MotoChefe',
    imagem: 'https://guia-do-autopropelido.vercel.app/moto-modelo/jetmax_motochefe.webp',
    descricao: 'Veículo Autopropelido.',
    especificacoes: [
     { label: 'Marca', valor: 'Moto Chefe' },
      { label: 'Modelo', valor: 'Scooter' },
      { label: 'Bateria', valor: 'Lítio 60V 30A' },
      { label: 'Potência', valor: '1000W' },
      { label: 'Tempo de carga médio', valor: '6 horas' },
      { label: 'Velocidade', valor: '32KM' },
      { label: 'Autonomia Média', valor: '40KM' },
      { label: 'Carga máxima', valor: '180Kg' },
      { label: 'Resistência a água ', valor: 'IP64' },
    ],
  },
  {
    nome: 'Jet',
    marca: 'MotoChefe',
    imagem: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200',
    descricao: 'Veiculo Autopropelido',
    especificacoes: [
     { label: 'Marca', valor: 'Moto Chefe' },
      { label: 'Modelo', valor: 'Scooter' },
      { label: 'Bateria', valor: 'Lítio 60V 20A' },
      { label: 'Potência', valor: '1000W' },
      { label: 'Tempo de carga médio', valor: '7 horas' },
      { label: 'Velocidade', valor: '32KM' },
      { label: 'Autonomia Média', valor: '50KM' },
      { label: 'Carga máxima', valor: '150Kg' },
      { label: 'Resistência a água ', valor: 'IP64' },
    ],
  },
  {
    nome: 'VoltRide City',
    marca: 'VoltRide',
    imagem: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200',
    descricao: 'Compacto pensado para centros urbanos densos, com foco em manobrabilidade e baixo consumo.',
    especificacoes: [
      { label: 'Autonomia', valor: '90 km' },
      { label: 'Velocidade máxima', valor: '60 km/h' },
      { label: 'Tempo de recarga', valor: '35 min (80%)' },
      { label: 'Nível de autonomia', valor: '3' },
      { label: 'Sensores', valor: 'LiDAR 180°, câmeras HD, radar traseiro' },
      { label: 'Conectividade', valor: '4G, Wi-Fi, Bluetooth' },
      { label: 'Capacidade', valor: '2 passageiros' },
      { label: 'Peso', valor: '780 kg' },
    ],
  },
];
