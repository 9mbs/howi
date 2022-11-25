export default function GravatarChanger({
  email = '',
  disabled = false,
  onChange,
  onSubmit
}) {
  return (
    <form onSubmit={onSubmit}>
      <label>Gravatar Tester</label>
      <span>Try your email address to see your Gravatar</span>
      <input 
        type="email" 
        value={email}
        onChange={onChange}
        placeholder="Enter your email address"
      />
      <button 
        type="submit" 
        disabled={disabled}
      >
        Change Gravatar
      </button>
    </form>
  )
}