import { Table as MantineTable } from '@mantine/core';
import useStyles from './styles';

export interface IObjects {
  value: string;
  label: string | JSX.Element;
}

interface ITable {
  header: JSX.Element;
  rows: JSX.Element;
}

export default function Table({ header, rows }: ITable) {
  const { classes } = useStyles();
  return (
    <MantineTable className={classes.component} striped>
      <thead className={classes.head} id="dashboard-table-header">
        <tr>{header}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </MantineTable>
  );
}
