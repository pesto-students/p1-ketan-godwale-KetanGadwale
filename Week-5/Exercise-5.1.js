function doTask(name, duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name);
            console.log(`${name} completed in ${duration} ms`);
        }, duration);
    });
}

const tasks = [
    doTask('task1', 1000),
    doTask('task2', 3000),
    doTask('task3', 2000),
];

async function parallel(tasks) {
    const result = await Promise.all(tasks);
    console.log(`${result} ran parallelly!`);
}

parallel(tasks);
