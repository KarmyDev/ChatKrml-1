var _a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var _b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function numberToWord(num) 
{
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (_a[Number(n[1])] || _b[n[1][0]] + ' ' + _a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (_a[Number(n[2])] || _b[n[2][0]] + ' ' + _a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (_a[Number(n[3])] || _b[n[3][0]] + ' ' + _a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (_a[Number(n[4])] || _b[n[4][0]] + ' ' + _a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (_a[Number(n[5])] || _b[n[5][0]] + ' ' + _a[n[5][1]]) + '' : '';
    return str;
}