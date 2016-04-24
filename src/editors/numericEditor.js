import Handsontable from './../browser';
import numbro from 'numbro';
import {getEditor, registerEditor} from './../editors';
import {TextEditor} from './textEditor';

/**
 * @private
 * @editor NumericEditor
 * @class NumericEditor
 * @dependencies TextEditor numbro
 */
class NumericEditor extends TextEditor {
  /**
   * @param {*} initialValue
   */
  beginEditing(initialValue) {
    if (typeof initialValue === 'undefined' && this.originalValue) {
      if (typeof this.cellProperties.culture !== 'undefined') {
        if (typeof this.cellProperties.cultureDef !== 'undefined') {
                numbro.culture(this.cellProperties.culture, this.cellProperties.cultureDef);
        }
        else {
          numbro.culture(this.cellProperties.culture);
        }
      }
      let decimalDelimiter = numbro.cultureData().delimiters.decimal;
      initialValue = ('' + this.originalValue).replace('.', decimalDelimiter);
    }
    super.beginEditing(initialValue);
  }
}

export {NumericEditor};

registerEditor('numeric', NumericEditor);
