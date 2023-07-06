// function Solve(val) {
//     var v = document.getElementById('res');
//     if (val === 'sin' || val === 'cos' || val === 'tan') {
//         var expr = math.parse(val + '(' + Math.PI / 180 + ')');
//         v.value += math.evaluate(expr);
//     } else {
//         v.value += math.evaluate(val);
//     }
// }
// function Result() {
//     var num1 = document.getElementById('res').value;
//     var num2 = eval(num1);
//     document.getElementById('res').value = num2;
// }
// function Clear() {
//     var inp = document.getElementById('res');
//     inp.value = '';
// }
// function Back() {
//     var ev = document.getElementById('res');
//     ev.value = ev.value.slice(0, -1);
// }

function Solve(val) {
    var v;
    if (document.getElementById('color_mode').checked) {
        v = document.getElementById('resScientific');
    } else {
        v = document.getElementById('resSimple');
    }
    v.value += val;
}

function Result() {
    var expr;
    var res;
    if (document.getElementById('color_mode').checked) {
        expr = document.getElementById('resScientific').value;
        res = document.getElementById('resScientific');
    } else {
        expr = document.getElementById('resSimple').value;
        res = document.getElementById('resSimple');
    }

    try {
        var result = math.evaluate(expr);
        res.value = result;
    } catch (error) {
        console.error(error);
        res.value = 'Error!';
    }
}

function Clear() {
    if (document.getElementById('color_mode').checked) {
        var inp = document.getElementById('resScientific');
    } else {
        var inp = document.getElementById('resSimple');
    }
    inp.value = '';
}

function Back() {
    if (document.getElementById('color_mode').checked) {
        var ev = document.getElementById('resScientific');
    } else {
        var ev = document.getElementById('resSimple');
    }
    ev.value = ev.value.slice(0, -1);
}

function toggleMode() {
    var checkbox = document.getElementById('color_mode');
    var simpleTable = document.getElementById('simpleTable');
    var scientificTable = document.getElementById('scientificTable');
    var resSimple = document.getElementById('resSimple');
    var resScientific = document.getElementById('resScientific');

    if (checkbox.checked) {
        simpleTable.style.display = 'none';
        scientificTable.style.display = '';
        resSimple.value = '';
    } else {
        simpleTable.style.display = '';
        scientificTable.style.display = 'none';
        resScientific.value = '';
    }
}
