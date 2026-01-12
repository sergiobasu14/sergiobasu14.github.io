import Hero from './components/Hero';
import ExperienceList from './components/ExperienceList';
import ContactSection from './components/ContactSection';

const experiences = [
  {
    role: 'Científico de Datos',
    org: 'Capgemini Engineering',
    period: 'Octubre 2022 - Actualidad',
    detail:
      'Diseño y despliego soluciones de ciencia de datos e IA generativa; lidero arquitecturas en la nube con Python y modelos de machine learning construidos con scikit-learn.',
  },
  {
    role: 'Ingeniero de Datos',
    org: 'Teleperformance',
    period: 'Marzo 2019 - Octubre 2022 (3.6 años)',
    detail:
      'Encabecé iniciativas de ingeniería de datos, business intelligence y automatización (RPA), construyendo dashboards ejecutivos, procesos ETL/ELT y modelos consistentes para decisiones globales.',
  },
  {
    role: 'Analista de Información',
    org: 'Coca Cola FEMSA',
    period: 'Marzo 2016 - Marzo 2018 (2 años)',
    detail:
      'Consolidé análisis de información, administré tableros de business intelligence y automatizé reportes ejecutivos para unidades regionales.',
  },
];

function App() {
  return (
    <div className="app">
      <Hero />
      <ExperienceList experiences={experiences} />
      <ContactSection />
    </div>
  );
}

export default App;
