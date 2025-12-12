import { useState } from 'react';
import { TextInput } from 'react-native';

function GithubIdInput() {
  const [githubId, setGithubId] = useState<string>('');
  return <TextInput value={githubId} onChangeText={setGithubId}></TextInput>;
}

export default GithubIdInput;
