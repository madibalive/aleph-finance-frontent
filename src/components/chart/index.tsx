import { FC, useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { merge } from 'lodash';
import { Box, CardHeader, IconButton, Tooltip } from '@mui/material';
import BaseOptionChart from '../../utils/baseOptionChart';

export const AnalysisChart: FC = (props) => {
  const CHART_DATA = {
    data: [
      { name: 'Asset ', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
      { name: 'Rewards ', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
      { name: 'Claimable ', data: [12, 43, 123, 88, 22, 45, 36, 59, 69] },
    ],
  };

  let chartOptions = merge(BaseOptionChart(), {
    legend: { position: 'top', horizontalAlign: 'right' },
    xaxis: {
      categories: ['0', '10', '20', '30', '40', '50', '60', '70', '80'],
    },
    // colors: chartColor.value,
  });

  const [seriesData, setSeriesData] = useState(CHART_DATA);

  useEffect(() => {
    setSeriesData(CHART_DATA);
  }, []);

  return (
    <Box
      sx={{
        // height: 436,
        width: '100%',
      }}
    >
      <Box sx={{ mt: 3, mx: 3 }}>
        <ReactApexChart
          type="line"
          series={seriesData.data}
          options={chartOptions}
          // height={364}
        />
      </Box>
    </Box>
  );
};
