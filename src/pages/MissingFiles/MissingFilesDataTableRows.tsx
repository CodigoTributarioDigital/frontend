import { File } from 'tabler-icons-react';
import IconButton from '../../common/components/IconButton';

export default function MissingFilesDataTableRows(data: any) {
  const rows: JSX.IntrinsicElements['tr'][] = [];
  console.log(data);

  for (let index = 0; index < data?.data?.length; index++) {
    const invoice = data?.data[index];

    rows.push(
      <tr style={{ color: 'red' }}>
        <td>{invoice.key}</td>
        <td>{new Date(invoice.date).toLocaleDateString()}</td>
        <td>{invoice.emit}</td>
        <td>{invoice.dest}</td>
        <td>
          {Number(invoice.value).toLocaleString('pr-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </td>
        <td>
          <IconButton tooltip="Gerar DANFE" Icon={File} />
        </td>
      </tr>
    );
  }
  return <>{rows}</>;
}
