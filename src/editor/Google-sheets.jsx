import { Box, createStyles, makeStyles } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';

const useStyles = makeStyles((theme) =>
  createStyles({
    uploadedFileBox: {
      marginLeft: '5px',
      boxSizing: 'border-box',
      height: '46px',
      border: '0.5px solid #DEDEDE',
      borderRadius: '6px',
      width: '95%'
    },
    uploadedFileTitle: {
      color: '#373A3C',
      fontFamily: 'Work Sans',
      fontSize: '12px',
      letterSpacing: 0,
      lineHeight: '14px',
      display: 'block'
    },
    uploadedFileSize: {
      color: '#888888',
      fontFamily: 'Work Sans',
      fontSize: '12px',
      letterSpacing: 0,
      lineHeight: '14px'
    },
    connectButton: {
      border: '0.5px solid #DEDEDE',
      borderRadius: '5px',
      background: '#fff'
    }
  })
);
export default function AddGraph() {
  const classes = useStyles();

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Box className={`mt-2 ${classes.uploadedFileBox}`}>
      <Row className="justify-content-start align-items-center">
        <Col sm={1} xs={1} md={1} lg={1} xl={1}>
          <img alt='upload' className={`${classes.uploadedFileIcon} mx-2`} src="./file-xls-icon-pdf.svg" />
        </Col>
        <Col sm={8}>google Sheets</Col>
        <Col sm={3}>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className={classes.connectButton}>
                connect
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Col>
      </Row>
    </Box>
  );
}