import { File } from 'tabler-icons-react';
import IconButton from '../../common/components/IconButton';

export default function PGDASDataTableRows(data: any) {
  console.log(data?.data?.data);

  const rows: JSX.IntrinsicElements['tr'][] = [];
  for (let index = 0; index < data?.data?.data?.nfs?.length; index++) {
    const invoice = data?.data?.data?.nfs[index];

    rows.push(
      <tr>
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