const semestersRequired = (numCourses, prereqs) => {
    if (prereqs.length === 0) return 1;
    const graph = buildGraph(prereqs);
    const coursePrereqs = {};

    for (let course in graph) {
        if (graph[course].length === 0) coursePrereqs[course] = 1;
    }

    for (let course in graph) {
        traverseGraph(graph, course, coursePrereqs);
    }
    return Math.max(...Object.values(coursePrereqs));
};

const traverseGraph = (graph, course, coursePrereqs) => {
    if (course in coursePrereqs) return coursePrereqs[course];
    let maxSemesters = 1;
    for (let nextCourse of graph[course]) {
        let semester = traverseGraph(graph, nextCourse, coursePrereqs);
        if (semester > maxSemesters) maxSemesters = semester;
    }

    coursePrereqs[course] = 1 + maxSemesters;
    return coursePrereqs[course];
};

const buildGraph = (prereqs) => {
    const graph = {};
    for (let prereq of prereqs) {
        const [a, b] = prereq;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
    }
    return graph;
};

module.exports = {
    semestersRequired,
};

// p = # prereqs
// c = # courses
// Time: O(p)
// Space: O(c)