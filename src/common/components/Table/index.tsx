import { Table as MantineTable } from '@mantine/core';
import useStyles from './styles';

export interface IObjects {
  value: string;
  label: string | JSX.Element;
}

interface ITable {
  header: IObjects[];
  rows: IObjects[];
}

export default function Table({ header, rows }: ITable) {
  const { classes } = useStyles();
  return (
    <MantineTable className={classes.component} striped>
      <thead className={classes.head}>
        <tr>
          {header &&
            header.map((header: IObjects, index: number) => (
              <td className={classes.td} key={index}>
                {header.label}
              </td>
            ))}
        </tr>
      </thead>
      <tbody className={classes.body}>
        {rows &&
          rows.map((row: IObjects, index: number) => (
            <th className={classes.th} key={index}>
              {row.label}
            </th>
          ))}
      </tbody>
    </MantineTable>
  );
}
