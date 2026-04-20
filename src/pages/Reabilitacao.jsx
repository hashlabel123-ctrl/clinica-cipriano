import TreatmentPage from './TreatmentPage'

export default function Reabilitacao() {
  return (
    <TreatmentPage
      name="Reabilitação Oral"
      label="REABILITAÇÃO"
      description="Restauração completa da estética e função bucal com planejamento digital e materiais de excelência."
      image="https://images.unsplash.com/photo-1588776814546-1ffbb172d4bc?auto=format&fit=crop&w=900&q=85"
      fullText={[
        'A reabilitação oral é o conjunto de procedimentos que tem como objetivo restaurar a função mastigatória, a estética e a saúde bucal em sua totalidade. É indicada para pacientes com perda de múltiplos dentes, desgaste severo, má oclusão ou problemas funcionais complexos.',
        'Na Clínica Cipriano, o planejamento de reabilitação é feito com tecnologia digital — utilizamos modelos 3D, análise facial e planejamento virtual para que o paciente visualize o resultado antes mesmo de começar o tratamento.',
        'Cada caso é tratado de forma multidisciplinar, integrando implantodontia, prótese, periodontia e estética para entregar um resultado funcional, duradouro e esteticamente impecável. Seu novo sorriso começa com um plano sob medida.',
      ]}
      faq={[
        { q: 'Quanto tempo leva uma reabilitação completa?', a: 'Depende da complexidade do caso. Reabilitações simples podem ser concluídas em algumas semanas; casos complexos com implantes podem levar de 3 a 6 meses.' },
        { q: 'É necessário extrair todos os dentes?', a: 'Não necessariamente. Preservamos ao máximo os dentes naturais saudáveis. A extração é indicada apenas quando o dente não tem condição de ser recuperado.' },
      ]}
    />
  )
}
