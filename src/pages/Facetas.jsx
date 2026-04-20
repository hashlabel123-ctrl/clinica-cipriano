import TreatmentPage from './TreatmentPage'

export default function Facetas() {
  return (
    <TreatmentPage
      name="Facetas de Resina"
      label="ESTÉTICA DENTAL"
      description="Transformação completa do sorriso em uma única sessão. Dentes perfeitamente alinhados, brancos e naturais."
      image="https://odontologiacipriano.com.br/wp-content/uploads/2022/02/facetas-de-resina.jpg"
      fullText={[
        'As facetas de resina são lâminas ultrafinas de resina composta aplicadas diretamente sobre a superfície dos dentes, corrigindo imperfeições de cor, forma, tamanho e posicionamento em uma única sessão clínica.',
        'Diferente das facetas de porcelana, as facetas de resina são realizadas em uma única visita, com resultado imediato e custo mais acessível. Com a técnica correta e materiais de alto padrão, o resultado é extremamente natural e esteticamente impecável.',
        'Na Clínica Cipriano, cada faceta é esculpida manualmente pelo especialista, que considera a harmonia do rosto, o tom de pele e a personalidade do paciente para criar um sorriso único — não apenas bonito, mas autenticamente seu.',
      ]}
      faq={[
        { q: 'Quanto tempo duram as facetas de resina?', a: 'Com os cuidados adequados, as facetas de resina duram de 5 a 8 anos. Evitar morder alimentos duros e usar protetor bucal à noite prolonga significativamente a durabilidade.' },
        { q: 'É necessário lixar o dente?', a: 'Na maioria dos casos, o desgaste é mínimo ou inexistente (técnica no-prep), preservando ao máximo a estrutura dental natural.' },
        { q: 'O resultado é natural?', a: 'Sim. As resinas de última geração permitem reproduzir com fidelidade a textura, a translucidez e o brilho dos dentes naturais.' },
      ]}
    />
  )
}
