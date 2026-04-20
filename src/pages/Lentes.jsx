import TreatmentPage from './TreatmentPage'

export default function Lentes() {
  return (
    <TreatmentPage
      name="Lentes de Contato Dental"
      label="ESTÉTICA DENTAL"
      description="Ultrafinas e naturais. A perfeição estética que transforma sorrisos com o mínimo de desgaste dental."
      image="/images/lentes.jpg"
      fullText={[
        'As lentes de contato dental são lâminas de porcelana de alta resistência com espessura inferior a 0,3mm, aplicadas sobre a face frontal dos dentes. São a opção mais conservadora e esteticamente refinada para transformação do sorriso.',
        'Permitem corrigir cor, forma, tamanho e pequenos desalinhamentos sem a necessidade de desgaste dental significativo — em muitos casos, nenhum desgaste é necessário (técnica no-prep). O resultado é um sorriso absolutamente natural, sofisticado e personalizado.',
        'Na Clínica Cipriano, trabalhamos com lentes de porcelana de última geração, confeccionadas por laboratórios de excelência. Cada peça é personalizada artesanalmente, com atenção à textura, transparência e tom que melhor harmonize com o rosto do paciente.',
      ]}
      faq={[
        { q: 'Qual a diferença entre lentes e facetas?', a: 'As lentes de contato dental são feitas de porcelana e geralmente não exigem desgaste dental. As facetas de resina são feitas diretamente na boca pelo dentista em uma única sessão. Ambas têm indicações específicas.' },
        { q: 'Quanto tempo duram?', a: 'Com os cuidados corretos, as lentes de porcelana duram de 10 a 20 anos, mantendo cor e forma originais.' },
        { q: 'Como é feita a manutenção?', a: 'A higiene é feita normalmente com escova, fio dental e enxaguante. Recomendamos revisões semestrais para avaliação das peças e da gengiva.' },
      ]}
    />
  )
}
