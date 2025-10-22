
export default function Image({ src, alt, style, ...props }) {
  return (
    <img src={src} alt={alt} style={style} {...props} />
  )
}
