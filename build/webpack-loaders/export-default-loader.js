/**
 * Translate:
 * export default from './path';
 *
 * Into:
 * import X[N] from './path';
 * export default X[N];
 */

module.exports = function (source) {
    let ind = 0;
    return source
        .replace(/export\s+default\s+from\s+(.+)(?:\n|$)/g, (match, path) => {
            return `import X${++ind} from ${path}\nexport default X${ind};`;
        });
};
