import axios from 'axios';

export interface ContributionResponse {
  count: number;
  date: string;
}
export const getGithubGrass = async (
  githubId: string
): Promise<ContributionResponse[]> => {
  const response = await axios.get(
    `https://github-contributions-api.jogruber.de/v4/${githubId}`
  );

  const contributions = response.data.contributions;

  const commitsData = contributions.map((data: any) => ({
    date: data.date,
    count: data.count,
  }));

  return commitsData;
};
