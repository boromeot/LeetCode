/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    
    let l = 0,
        r = 1;
    while (r < path.length) {
        if (path[r] === '/') {
            let directory = path.slice(l + 1, r);
            l = r;
            if (directory === '..') {
                stack.pop();
            } else if (directory === '.') {
                continue;
            } else if (directory.length > 0){
                stack.push(directory);
            }
        }
        r++;
    }
    let directory = path.slice(l + 1, r);
    l = r;
    if (directory === '..') {
        stack.pop();
    } else if (directory === '.') {
    } else if (directory.length > 0){
        stack.push(directory);
    }
    return '/' + stack.join('/');
};