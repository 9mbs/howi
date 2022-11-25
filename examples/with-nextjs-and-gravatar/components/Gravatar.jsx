export default function Avatar({
  email = '',
  avatar = '',
  size = 80,
}) {
  return (
    <div>
      {avatar && (
        <img 
          className='gravatar' 
          src={avatar} 
          alt={email} 
          width={size}
          height={size}
        />
      )}
    </div>
  )
}