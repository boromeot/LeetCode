/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const visited = new Set();
    const adj = {};

    for (let employee of employees) {
        adj[employee.id] = new yuh(employee.importance, employee.subordinates);
    }
    
    let sum = 0;
    dfs(id);
    return sum;
    function dfs(id) {
        if (visited.has(id)) return;
        visited.add(id);
        sum += adj[id].importance;
        for (let subId of adj[id].subordinates) {
            dfs(subId);
        }
        return;
    }
};

class yuh {
    constructor(i, s) {
        this.importance = i;
        this.subordinates = s;
    }
}