import { setDocumentCustomStyles, } from '@cells-components/cells-lit-helpers/cells-lit-helpers.js';
import { css, } from 'lit-element';

setDocumentCustomStyles(css`
  #iframeBody {
    margin: 30px;
  }

  .box {
    padding:10px;
    border: 1px solid #e1e1e1;
    margin:10px 0px 30px 0px;
  }

  input {
    padding:10px;
    border:1px solid #e1e1e1;
    width:150px;
  }

`);
