import React, { useEffect, useState, Fragment } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableH,
  TableHead,
  TableRow,
  TableTitle,
} from './styled';
import { getCapitals } from '../../services/weather';

const TableForecast = () => {
  const [capitals, setCapitals] = useState([]);

  useEffect(() => {
    getCapitals().then(setCapitals);
  }, []);

  return (
    <Table>
      <TableTitle>Capitais</TableTitle>
      <TableHead>
        <TableRow>
          <TableH>Min</TableH>
          <TableH>Máx</TableH>
          <TableH> {/* capital */} </TableH>
          <TableH>Min</TableH>
          <TableH>Máx</TableH>
          <TableH></TableH>
        </TableRow>
      </TableHead>
      <TableBody>
        {[0, 1, 2, 3, 4].map((index) => (
          <TableRow key={index}>
            {capitals.map((capital) => (
              <Fragment key={capital[index].city}>
                <TableCell>{capital[index].low}°</TableCell>
                <TableCell>{capital[index].high}°</TableCell>
                <TableCell>{capital[index].city}</TableCell>
              </Fragment>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableForecast;
