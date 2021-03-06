/**
 * Determines if an element is a native select element
 * @method isNativeSelect
 * @memberof axe.commons.forms
 * @param {Element} node Node to determine if select
 * @returns {Bool}
 */
function isNativeSelect(node) {
	const nodeName = node.nodeName.toUpperCase();
	return nodeName === 'SELECT';
}

export default isNativeSelect;
