import TreatmentPage from './TreatmentPage'

export default function Clareamento() {
  return (
    <TreatmentPage
      name="Clareamento Dental"
      label="ESTÉTICA DENTAL"
      description="O sorriso mais branco da sua vida. Tecnologia LED de última geração com resultados em uma única sessão."
      image="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=85"
      fullText={[
        'O clareamento dental é um dos procedimentos estéticos mais buscados e eficazes da odontologia moderna. Na Clínica Cipriano, oferecemos clareamento de consultório com tecnologia LED de alta potência, que potencializa a ação do gel clareador e reduz drasticamente o tempo de tratamento.',
        'Realizamos também o clareamento caseiro supervisionado, com moldeiras personalizadas e géis de concentração adequada para cada paciente, garantindo segurança e resultados duradouros.',
        'O resultado varia de acordo com a coloração inicial dos dentes e o tipo de pigmentação. Em média, os pacientes alcançam de 6 a 8 tons de clareamento, com resultado que pode durar de 1 a 2 anos com os cuidados adequados.',
      ]}
      faq={[
        { q: 'O clareamento causa sensibilidade?', a: 'Em alguns casos pode ocorrer sensibilidade transitória durante ou após o tratamento. Utilizamos géis dessensibilizantes antes e depois da aplicação para minimizar ao máximo o desconforto.' },
        { q: 'Quanto tempo dura o resultado?', a: 'De 1 a 2 anos, dependendo dos hábitos alimentares e de higiene. Evitar café, vinho tinto e alimentos com corante nos primeiros dias prolonga o resultado.' },
        { q: 'Funciona em próteses e restaurações?', a: 'O clareamento age apenas sobre os dentes naturais. Restaurações e próteses não clareiam, mas podem ser substituídas após o tratamento para harmonizar o sorriso.' },
      ]}
    />
  )
}
