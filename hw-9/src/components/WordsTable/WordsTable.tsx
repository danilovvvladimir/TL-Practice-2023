import { FC, useState } from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Fade } from "@mui/material";
import { DictionaryPair } from "../../types/words";
import MenuIcon from "@mui/icons-material/Menu";
import { capitalizeWord } from "../../utils/capitalizeWord";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useWordsStore } from "../../store/state";
import { useNavigate } from "react-router-dom";

interface WordsTableProps {
  rows: DictionaryPair[];
}

const WordsTable: FC<WordsTableProps> = ({ rows }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    setSelectedId(id);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSelectedId(null);
    setAnchorEl(null);
  };

  const removeDictionaryPair = useWordsStore(state => state.removeDictionaryPair);

  const handleRemovePair = (id: string) => {
    handleClose();
    removeDictionaryPair(id);
  };

  const handleUpdatePair = (id: string) => {
    handleClose();
    navigate(`/dictionary/edit-word/${id}`);
  };

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
                <Button
                  data-word-id={row.id}
                  variant="inverted"
                  sx={{ width: "36px", height: "36px", padding: 0 }}
                  onClick={event => handleClick(event, row.id)}
                >
                  <MenuIcon width={18} height={18} />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open && row.id === selectedId}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: -136 }}
                  TransitionComponent={Fade}
                >
                  <div className="menu">
                    <MenuItem onClick={() => handleUpdatePair(row.id)}>
                      <div className="menu__item">
                        <div className="menu__item-icon">
                          <EditOutlinedIcon />
                        </div>
                        <div className="menu__item-title">Редактировать</div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={() => handleRemovePair(row.id)}>
                      <div className="menu__item">
                        <div className="menu__item-icon">
                          <DeleteOutlineOutlinedIcon />
                        </div>
                        <div className="menu__item-title">Удалить</div>
                      </div>
                    </MenuItem>
                  </div>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WordsTable;
