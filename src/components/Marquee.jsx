export default function Marquee({ text, className = '' }) {
  const repeated = Array(8).fill(text).join(' · ')
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="marquee-inner inline-block">
        <span>{repeated}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>{repeated}&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  )
}
