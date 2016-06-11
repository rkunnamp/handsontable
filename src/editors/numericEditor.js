import Handsontable from './../browser';
import {getEditor, registerEditor} from './../editors';
import {TextEditor} from './textEditor';

/**
 * @private
 * @editor NumericEditor
 * @class NumericEditor
 * @dependencies TextEditor
 */
class NumericEditor extends TextEditor {
  /**
   * @param {*} initialValue
   */
  beginEditing(initialValue) {
    if (typeof initialValue === 'undefined' && this.originalValue) {
      if (typeof this.cellProperties.formatter !== 'undefined') {
        if (typeof this.cellProperties.decimalSeparator !== 'undefined') {
          initialValue = ('' + this.originalValue).replace('.', this.cellProperties.decimalSeparator);
        }
      }
    }
    super.beginEditing(initialValue);
  }
}

export {NumericEditor};

registerEditor('numeric', NumericEditor);
