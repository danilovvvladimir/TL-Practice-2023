import { FC } from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { DictionaryPair } from "../../types/words";
import MenuIcon from "@mui/icons-material/Menu";
import { capitalizeWord } from "../../utils/capitalizeWord";

interface WordsTableProps {
  rows: DictionaryPair[];
}

const WordsTable: FC<WordsTableProps> = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#DFE4EC" }}>
          <TableRow>
            <TableCell>Слово на русском языке</TableCell>
            <TableCell>Перевод на английский язык</TableCell>
            <TableCell align="right">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{capitalizeWord(row.russianWord)}</TableCell>
              <TableCell>{capitalizeWord(row.englishWord)}</TableCell>
              <TableCell align="right">
                <Button variant="inverted" sx={{ width: "36px", height: "36px", padding: 0 }}>
                  <MenuIcon width={18} height={18} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WordsTable;
