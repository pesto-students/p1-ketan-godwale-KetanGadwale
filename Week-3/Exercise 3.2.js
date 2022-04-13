//Call, Apply and Bind Exercise

//call


//apply


//bind

const fn = () => {
    console.log(this)
}.bind(globalThis);

function fn1() {
    console.log(this)
}

fn();
fn1();