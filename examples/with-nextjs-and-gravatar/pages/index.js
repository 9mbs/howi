import { useEffect, useState } from 'react';
import Gravatar from '../components/Gravatar';
import GravatarChanger from '../components/GravatarChanger';
import LoadingIcon from '../components/LoadingIcon';

export default function Home() {
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateAvatar();
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAvatar();
  };

  const updateAvatar = async () => {
    setLoading(true);
    setAvatar('');
    const response = await fetch('/api/gravatar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    const { avatar } = await response.json();
    setAvatar(avatar);
    setLoading(false);
  };

  return (
    <div className='container'>
      <main>
        {loading && <LoadingIcon size={100} />}
        {avatar && <Gravatar email={email} avatar={avatar} size={100} />}

        <GravatarChanger
          disabled={loading}
          email={email}
          onChange={handleEmailChange}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
