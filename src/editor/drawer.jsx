import { Box, Button, createStyles, Divider, Drawer, makeStyles, Typography,IconButton } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
const useStyles = makeStyles((theme) =>
  createStyles({
    drawerStyle: (props) => ({
      width: 460,
      fontFamily: 'Work Sans, Roboto, Poppins, Arial !important',
      ...props.drawerStyle,
      '& .MuiDrawer-paper': {
        width: 460,
        boxSizing: 'border-box',
        background: '#fff',
        ...props.drawerStyle
      },
      '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }
    }),
    container: {
      overflowY: 'hidden',
      paddingBottom: '3.75rem',
      position: 'relative',
      minHeight: '100vh'
    },

    formFooter: {
      width: (props) => props.formFooterWidth ?? '100%',
      position: (props) => 'absolute',
      bottom: '0px',
      right: '-7px',
      zIndex: 2
    },
    content: {
      overflowY: 'auto',
      height: 'calc(100vh - 128px)'
    },
    footerButton: {
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'flex-end',
      padding: 9,
      backgroundColor: '#fff'
    },
    cancelBtn: {
      width: 127,
      height: 32,
      borderRadius: 8,
      backgroundColor: '#fff',
      fontSize: 14,
      fontWeight: 'normal',
      textTransform: 'lowercase',
      color: '#888',
      paddingTop: 6,
      cursor: 'pointer',
      marginRight: '-2rem'
    },
    submitBtn: {
      width: 127,
      height: 32,
      borderRadius: 8,
      backgroundColor: '#15b9a9',
      fontSize: 14,
      fontWeight: 'normal',
      textTransform: 'lowercase',
      color: '#fff',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: '#44D7B6'
      }
    },
    closeIcon: {
      marginRight: '10px'
    },
    customClass: {
      height: 'calc(100vh - 128px)',
      overflowY: 'auto'
    }
  })
);
const CustomDrawer = (props) => {
  const {
    openDrawer,
    setOpenDrawer,
    children,
    title,
    header,
    isFormFooter,
    formName,
    handleSubmit,
    upload,
    customContentClass
  } = props;
  const classes = useStyles(props);
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#373a3c',
    margin: 'auto 0px'
  }));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <Drawer className={classes.drawerStyle} anchor="right" open={openDrawer}>
      <Box className={classes.container}>
        <Box display="flex" justifyContent="space-between" alignItems="start" paddingLeft={4} minHeight={77}>
          {title && <Title>{title}</Title>}
          {header && (
            <Box paddingTop={1.5} paddingBottom={1.5}>
              <Typography style={{ fontSize: 18, color: '#373a3c', fontWeight: 500 }}>{header.title}</Typography>
              <Typography style={{ fontSize: 12, color: '#888' }}>{header.subtitle}</Typography>
            </Box>
          )}
          <IconButton className={classes.closeIcon} onClick={toggleDrawer(false)}>
            <CloseSharpIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box>
          <div className={customContentClass ? classes.customClass : classes.content}>{children}</div>
          {isFormFooter && (
            <div className={classes.formFooter}>
              <Divider />
              <div className={classes.footerButton}>
                <Typography className={classes.cancelBtn} onClick={() => setOpenDrawer(false)}>
                  cancel
                </Typography>
                <Button
                  className={classes.submitBtn}
                  form={formName}
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                >
                  {upload ? 'upload' : 'save'}
                </Button>
              </div>
            </div>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
