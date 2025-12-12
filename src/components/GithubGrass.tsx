import { useEffect, useState } from 'react';
import { ContributionResponse, getGithubGrass } from '../model/getGithubGrass';
import { ContributionGraph } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

function GithubGrass() {
  const [contributions, setContributions] = useState<ContributionResponse[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGithubGrass('rhehfl');
      setContributions(data);
    };

    fetchData();
  }, []);

  if (!contributions) return null;

  return (
    <ContributionGraph
      values={contributions as any}
      endDate={new Date()}
      style={{}}
      numDays={105}
      width={Dimensions.get('window').width}
      height={220}
      chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity) => `rgba(0, 0, 0, ${opacity})`,
      }}
      getMonthLabel={(monthIndex) => {
        return `${monthIndex + 1}월`;
      }}
      squareSize={20}
      gutterSize={3}
      tooltipDataAttrs={(value) => {
        const data = value as unknown as ContributionResponse;
        const count = data.count || 0;

        let color = '#d1d5da';
        let stroke = 'transparent';
        let strokeWidth = '0';

        if (count > 0) {
          color = '#90CAF9';
        }
        if (count >= 3) {
          color = '#42A5F5';
        }
        if (count >= 5) {
          color = '#1E88E5';
        }
        if (count >= 8) {
          color = '#1565C0';
        }

        return {
          fill: color,
          rx: '4',
          ry: '4',
          stroke: stroke,
          strokeWidth: strokeWidth,
        };
      }}
    />
  );
}

export default GithubGrass;
