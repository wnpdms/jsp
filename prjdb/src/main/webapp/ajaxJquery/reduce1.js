let memberAry = [];
fetch('./MOCK_DATA.json')
    .then((resolve) => resolve.json())
    .then((result) => {
        memberAry = result;
        console.log(memberAry);
        let str = '';
        memberAry.forEach((member, idx, ary) => {
            if (idx == 0) {
                str += '<ul>';
            }
            if (idx < 5) {
                str += '<li>id: ' + member.id + ', 이름: ' + member.first_name + '</li>';
            }
            if (idx + 1 == memberAry.length) {
                str += '</ul>';
            }
        }); // end of memberAry;
        // document.querySelector('#list').innerHTML = str;

        let ary5 = memberAry.filter((member, idx, ary) => {
            // console.log(member, idx, ary);
            return idx < 5;
        });
        console.log(ary5);

        ary5.reduce((acc, member, idx, ary) => {
            console.log(acc, member, idx, ary);
            return member;
        }, 0);

        result = [3, 2, 6, 9, 5].reduce((acc, num, idx, ary) => {
            console.log(acc, num, idx);
            if (idx + 1 == ary.length) {
                return (acc + num) / ary.length;
            }
            return acc + num;
        }, 0);

        console.log('평균: ' + result);
    });
