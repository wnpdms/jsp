// 비동기 방식. fetch();

async function asyncFunc() {
    let memAry = [];
    let promise = await fetch('./MOCK_DATA.json');
    let json = await promise.json();

    memAry = json;

    memAry.reduce((acc, mem, idx, ary) => {
        if (idx == 0) {
            let ul = document.createElement('ul');
            acc.append(ul);
        }
        let li = document.createElement('li');
        li.innerHTML = 'id: ' + mem.id + ', 이름: ' + mem.first_name;
        if (mem.gender == 'Female') {
            li.setAttribute('style', 'background-color:pink');
        } else if (mem.gender == 'Male') {
            li.setAttribute('style', 'background-color:skyblue');
        }
        if (idx < 5) acc.querySelector('ul').append(li);

        return acc;
    }, document.querySelector('#list'));

    // reduce 를 사용..
    // memAry.reduce((acc, mem, idx, ary) => {
    //     // 마지막 순번에서 document.querySelector('#list').innerHTML = acc;
    //     if (idx + 1 == ary.length) {
    //         document.querySelector('#list').innerHTML = acc;
    //     }
    //     let str = '';
    //     if (idx == 0) {
    //       str += '<ul>';
    //     }
    //     if (idx == 5) {
    //       str += '<ul>';
    //     }
    //       str += '<li> id: ' + mem.id + ', 이름: ' + mem.first_name + '</li>';
    //       return idx < 5 ? acc + str : acc;
    //     }
    // }, '');
}

asyncFunc();
