import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Highlight from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const statusToTypeMap = {
  success: 'success',
  failure: 'danger',
};

const Output = () => {
  const { t } = useTranslation();
  const { resultStatus, output } = useSelector((state) => state.checkResult);

  if (resultStatus === 'idle') {
    return null;
  }

  const message = t(`message.${resultStatus}`);

  const alertClassName = `${statusToTypeMap[resultStatus]}`;
  return (
    <div className="h-100">
      <Alert variant={alertClassName}>
        {message}
      </Alert>
      <Highlight language="vbnet" style={vs} showLineNumbers>
        {output}
      </Highlight>
    </div>
  );
};

export default Output;
