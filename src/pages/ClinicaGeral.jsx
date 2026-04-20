import TreatmentPage from './TreatmentPage'

export default function ClinicaGeral() {
  return (
    <TreatmentPage
      name="Clínica Geral"
      label="SAÚDE BUCAL"
      description="Prevenção, diagnóstico e cuidado completo para toda a família. A base de uma saúde bucal duradoura."
      image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85"
      fullText={[
        'A clínica geral é a base de toda odontologia de excelência. Na Clínica Cipriano, o atendimento clínico geral vai muito além da consulta de rotina — realizamos diagnósticos precisos, tratamentos preventivos e restauradores com os mais altos padrões de qualidade.',
        'Oferecemos consultas de avaliação, radiografias digitais, limpeza e profilaxia, tratamento de cáries, extrações, tratamento de canal (endodontia), periodontia e muito mais — tudo em um ambiente acolhedor e com equipe altamente qualificada.',
        'Nossa abordagem preventiva prioriza a preservação dos dentes naturais e a saúde bucal a longo prazo. Acreditamos que a melhor intervenção é aquela que se antecipa ao problema.',
      ]}
      faq={[
        { q: 'Com que frequência devo visitar o dentista?', a: 'Recomendamos consultas a cada 6 meses para avaliação, limpeza profissional e radiografias de rotina. Pacientes com maior risco de cárie ou doença periodontal podem necessitar de visitas mais frequentes.' },
        { q: 'A clínica atende crianças?', a: 'Sim, atendemos pacientes de todas as idades. O acompanhamento odontopediátrico é fundamental desde a erupção dos primeiros dentes.' },
      ]}
    />
  )
}
