import { useTheme } from '@mui/system';
import type { ApexOptions } from 'apexcharts';

export default function BaseOptionChart(): ApexOptions {
  const theme = useTheme();

  const LABEL_TOTAL = {
    show: true,
    label: 'Total',
    color: theme.palette.text.secondary,
  };

  const LABEL_VALUE = {
    offsetY: 8,
    color: theme.palette.text.primary,
  };

  return {
    // Colors
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main,
      theme.palette.info.main,
      theme.palette.error.main,
      theme.palette.success.main,
    ],

    // Chart
    chart: {
      toolbar: { show: false },
      // animations: { enabled: false },
      foreColor: theme.palette.text.disabled,
    },

    // States
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88,
        },
      },
    },

    // Fill
    fill: {
      opacity: 1,
    },

    // Datalabels
    // dataLabels: { enabled: true },

    // Stroke
    stroke: {
      width: 3,
      // curve: '',
      // lineCap: 'round',
    },

    // Grid
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.divider,
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    // Markers
    markers: {
      size: 3,
      strokeColors: theme.palette.background.paper,
    },

    // Tooltip
    tooltip: {
      x: {
        show: false,
      },
    },

    // Legend
    legend: {
      show: true,
      fontSize: '13',
      position: 'bottom',
      horizontalAlign: 'right',
      markers: { radius: 12 },
      itemMargin: { horizontal: 12 },
      labels: {
        colors: theme.palette.text.primary,
      },
    },
  };
}
