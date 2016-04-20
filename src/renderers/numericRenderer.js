import numbro from 'numbro';
import {addClass} from './../helpers/dom/element';
import {getRenderer, registerRenderer} from './../renderers';
import {isNumeric} from './../helpers/number';

/**
 * Numeric cell renderer
 *
 * @private
 * @renderer NumericRenderer
 * @dependencies numbro
 * @param {Object} instance Handsontable instance
 * @param {Element} TD Table cell where to render
 * @param {Number} row
 * @param {Number} col
 * @param {String|Number} prop Row object property name
 * @param value Value to render (remember to escape unsafe HTML before inserting to DOM!)
 * @param {Object} cellProperties Cell properties (shared by cell renderer and editor)
 */
function numericRenderer(instance, TD, row, col, prop, value, cellProperties) {
  if (isNumeric(value)) {
    if (typeof cellProperties.culture !== 'undefined') {
      numbro.culture(cellProperties.culture);
    }
    value = numbro(value).format(cellProperties.format || '0'); //docs: http://numbrojs.com/
    addClass(TD, 'htNumeric');
  }
  getRenderer('text')(instance, TD, row, col, prop, value, cellProperties);
}

export {numericRenderer};

registerRenderer('numeric', numericRenderer);
