function doTask(name, duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} completed in ${duration} ms`);
        }, duration);
    });
}

const tasks = [
    doTask('task1', 1000),
    doTask('task2', 3000),
    doTask('task3', 2000),
];
