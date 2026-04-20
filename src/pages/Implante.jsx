import TreatmentPage from './TreatmentPage'

const FAQ = [
  {
    q: 'Qualquer pessoa pode realizar o tratamento?',
    a: 'Sim, desde que finalizado o processo de formação óssea (aproximadamente aos 18 anos). Pacientes cardíacos, hipertensos ou diabéticos precisam de acompanhamento médico especializado para avaliação prévia ao procedimento.',
  },
  {
    q: 'O organismo pode rejeitar um implante?',
    a: 'Não. Os implantes são fabricados em titânio — um material biocompatível e aceito pelo organismo de qualquer pessoa. A taxa de sucesso dos implantes dentários supera 97% quando realizados por profissionais qualificados.',
  },
  {
    q: 'Causa dor?',
    a: 'A dor é praticamente inexistente durante o procedimento, realizado sob anestesia local. Com Sedação Consciente é possível realizar todo o procedimento sem qualquer desconforto — muitos pacientes dormem durante a cirurgia.',
  },
  {
    q: 'Precisa de manutenção?',
    a: 'O implante requer visita a cada 6 meses para controle clínico, avaliação e limpeza profissional. No dia a dia, a higienização é feita da mesma forma que um dente natural — escova, fio dental e enxaguante.',
  },
  {
    q: 'Causa mau hálito?',
    a: 'Apenas com má higiene. Com os cuidados corretos, os implantes não causam mau hálito. Os cuidados de higiene são exatamente os mesmos do dente natural.',
  },
]

export default function Implante() {
  return (
    <TreatmentPage
      name="Implantes Dentários"
      label="IMPLANTODONTIA"
      description="A solução mais definitiva e natural para substituir dentes perdidos. Tecnologia de ponta com resultados que duram uma vida inteira."
      image="https://odontologiacipriano.com.br/wp-content/uploads/2022/02/implantodontia.jpg"
      fullText={[
        'O implante dentário é um parafuso de titânio biocompatível que é inserido no osso da mandíbula ou maxila, funcionando como a raiz de um dente artificial. Sobre ele é fixada uma coroa que imita com perfeição a aparência e a função de um dente natural.',
        'Na Clínica Cipriano, utilizamos os melhores sistemas de implantes disponíveis no mercado, com planejamento digital 3D para máxima precisão e segurança. Realizamos desde implantes unitários até reabilitações totais (All-on-4 e All-on-6), devolvendo ao paciente a função mastigatória e a estética que merece.',
        'O procedimento é realizado com anestesia local ou sedação consciente, garantindo total conforto durante toda a cirurgia. Com planejamento e técnica adequados, os implantes têm durabilidade de décadas — muitas vezes por toda a vida do paciente.',
      ]}
      faq={FAQ}
      relatedIndexes={[1, 2, 3]}
    />
  )
}
