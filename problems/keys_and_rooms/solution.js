/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // let adj = {};

    // for (let room = 0; room < rooms.length; room++) {
    //     const keys = rooms[room];
    //     adj[room] = keys;
    // }

    const visited = new Set();
    dfs(0);
    return visited.size === rooms.length;

    function dfs(room) {
        if (visited.has(room)) return;
        visited.add(room);
        for (let key of rooms[room]) {
            dfs(key);
        }
        return;
    }

}