import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { styled as MUIstyled } from '@mui/material/styles';

interface ConfirmProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  handlePerfume: (deleteIdx: number) => void;
  deleteIdx: number;
}

export const ConfirmAlert = ({
  open,
  setOpen,
  handlePerfume,
  deleteIdx,
}: ConfirmProps) => {
  console.log(`alert 성공 ${open}`);
  const handleClose = () => {
    setOpen(false);
  };

  const deletePerfume = (deleteIdx: number) => {
    handlePerfume(deleteIdx);
    setOpen(false);
  };

  return (
    <CustomDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'정말 삭제하시겠습니까?'}
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => deletePerfume(deleteIdx)} autoFocus>
          삭제하기
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

const CustomDialog = MUIstyled(Dialog)`
  .MuiPaper-root{
    padding : 9px 30px 20px;
  }  
  h2{
    font-size : 16px;;
    font-weight : 400;
  }
  button {
    color: var(--white-color);
    font-weight : 400;
    font-size : 14px;
    margin  : 0;
  }
  .MuiDialogActions-root {
    text-align : center;
    align-items: center;
    justify-content: center;
    background-color : var(--primary-color);
    border-radius : 5px;
    height : 15px;
    border : none;
    width : 90%;
    margin : auto;
  }
`;