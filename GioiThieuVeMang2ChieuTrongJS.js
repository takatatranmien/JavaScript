
Giới thiệu về 2D Array – mảng 2 chiều trong JavaScript

https://quantrimang.com/gioi-thieu-ve-2d-array-%E2%80%93-mang-2-chieu-trong-javascript-83327
 Công nghệ Kiến thức cơ bản
 Lê Tuấn Anh 1 2 3 4 5 12.809 lượt xem
    
 
 
Quản Trị Mạng - Trong bài viết dưới đây, chúng tôi sẽ giới thiệu và hướng dẫn các bạn một số thao tác cơ bản để tạo và truy cập tới mảng 2 chiều – 2D array trong JavaScript. Về mặt bản chất, mảng 2 chiều là khái niệm về chuỗi các ma trận – matrix, được sử dụng để chứa thông tin. Mỗi 1 thành phần lại có chứa 2 chỉ số riêng biệt: row (y) – dòng và column (x) – cột. Ma trận sẽ tiến hành xử lý mỗi khi bạn nhập vào dòng và cột dữ liệu. Ví dụ: nếu bạn muốn hiển thị dữ liệu trên từng dòng với mỗi năm và từng cột với mỗi tháng, hoặc khi bạn thực hiện quá trình tạo báo cáo tài chính cho công ty, tổ chức, doanh nghiệp... thì việc sử dụng matrix là 1 giải pháp vô cùng hợp lý, tương ứng với tình hình kinh doanh và hiệu suất của từng phòng, ban ngành... hoặc đem so sánh với mức chỉ tiêu chung của toàn công ty.



Các bạn hãy liên tưởng tới 1 chiếc bàn cờ, có 8 dòng (được đánh dấu từ 0 > 7), 8 cột (cũng đánh dấu từ 0 > 7). Nếu muốn kiểm tra vị trí chính xác của ô phía trên góc trái thì hãy truy cập chessboard[0][0], ô tiếp theo sẽ là vị trí [0][1], và tiếp tục thay thế giá trị của x thành [0][7] để đi hết 1 cạnh từ trái sang phải của bàn cờ. Tương tự như vậy, thay đổi giá trị y nếu muốn di chuyển từ trên xuống dưới, ví dụ [6][1] là ô thứ 2 của cột thứ 7.

Ký hiệu chúng tôi đang sử dụng ở đây khá phù hợp với những biến trong JavaScript: [y][x], tất cả các mảng đều bắt đầu từ 0, do vậy có thể hiểu nôm na về dạng câu hỏi: “Khoảng cách bao nhiêu tính từ phía trái” hoặc “vị trí 0” sẽ chính xác là tọa độ đầu tiên từ bên trái.

Một trong những quy ước chung được sử dụng rộng rãi khi áp dụng với ma trận là dùng chung biến x và y, ví dụ x luôn luôn là chỉ số cột (khoảng cách, vị trí tính từ bên trái), và y là chỉ sổ dòng (khoảng cách từ trên xuống). Do vậy, tọa độ y,x tương ứng với [0][0] là thành phần đầu tiên ở góc trên bên trái, [0][1] là thành phần thứ 2 tiếp theo từ trên xuống, còn [1][n] là dòng thứ 2....

JavaScript và 2D Array:
Nhưng trên thực tế, JavaScript lại không hỗ trợ 2D Array. Và cách thường sử dụng để xử lý dữ liệu trong mảng 2 chiều là tạo đối tượng Array, bao gồm nhiều đối tượng Array bên trong.

Sử dụng mảng 1 chiều tương tự như mảng 2 chiều:
Trong nhiều trường hợp thực tế, chúng ta có thể dễ dàng “ép” mảng 1 chiều vào trong mảng 2 chiều bàng cách sử dụng toán tử lập trình logic. Ví dụ: chúng ta có 1 chuỗi các ký tự như sau:

var sData= "abcdefghijABCDEFGHIJäß©ÐëØ>½îÿ";

Tại đây, chúng ta có thể dễ dàng thấy 1 mô hình đơn giản, với 3 chuỗi liên tiếp của 10 ký tự, tương ứng với đó là ma trận 10 x 3:

// column:  0123456789 
var sData= "abcdefghij"  // row 0 (starts at offset 0)
          +"ABCDEFGHIJ"  // row 1 (starts at offset 10)
          +"äß©ÐëØ>½îÿ"  // row 2 (starts at offset 20)

Mỗi dòng tại đây sẽ chứa 10 cột, chúng ta có thể dễ dàng tính toán và xác định vị trí đầu tiên của bất kỳ dòng nào bằng cách nhân số dòng với 10. Công thức tổng quát tại đây sẽ có dạng:

(y * row_length) + x

với y là số dòng, x là số cột, row_length là số cột trong mỗi dòng.



Với dữ liệu như ví dụ trên, chúng ta có thể dựng cấu trúc mảng 2 chiều như sau:

// assumes data is a string, sData and rows have 10 columns
function GetCellValue(y,x) {
nRowStart= y*10;
nOffset = nRowStart+ x;
sElementValue= sData.substr(nOffset,1); // access one element 
return( sElementValue ); 
}
....
// y,x (row, column)
alert( GetCellValue(0,0) ); // displays a
alert( GetCellValue(0,1) ); // displays b
alert( GetCellValue(0,2) ); // displays c
alert( GetCellValue(1,2) ); // displays C
alert( GetCellValue(2,2) ); // displays ©
alert( GetCellValue(0,9) ); // displays j
alert( GetCellValue(1,9) ); // displays J
alert( GetCellValue(2,9) ); // displays ÿ

Sau đó, chúng ta đã có thể truy cập chuỗi dữ liệu tương tự như mảng 2 chiều với từng ký tự riêng biệt. Và tiếp tục như vậy, chúng ta hoàn toàn làm được việc ép cấu trúc mảng 2 chiều vào mảng 1 chiều bằng cách gán thêm chức năng truy cập dữ liệu đặc biệt. Nhưng đây cũng không phải là cách làm phổ biến trong JavaScript.

Sử dụng mảng của mảng:
Trên thực tế, cách sử dụng thường xuyên mảng 2 chiều trong JavaScript là tạo mảng 1 chiều, sau đó gán từng đối tượng bên trong đó với 1 mảng 1 chiều khác. Nếu đi vào việc phân tích cụ thể, chức năng dưới đây là 1 trong những cách đơn giản để tạo và cố định mảng 2 chiều:

as2D= new Array(); // an array of "whatever"
as2D[0]= new Array("a","b","c","d","e","f","g","h","i","j" );
as2D[1]= new Array("A","B","C","D","E","F","G","H","I","J" );
as2D[2]= new Array("ä","ß","©","Ð","ë","Ø",">","½","î","ÿ" );

Khi đó, chúng ta đã có thể xây dựng và xác định được mảng dữ liệu với 3 đối tượng, mỗi đối tượng có 10 chuỗi ký tự khác nhau. Và bây giờ, tiếp tục sử dụng cú pháp JavaScript để truy cập như bình thường:

alert( as2D[0][0] ); // displays a
alert( as2D[2][2] ); // displays ©
alert( as2D[2][9] ); // displays ÿ



Sử dụng […]:
Cú pháp:

var a= [ item0, item1, item2, ... ];

là cách viết tắt của:

var a= new Array( item0, item1, item2, ... );

Qua đó, chúng ta có thể hiểu nôm na rằng:

[] tương tự với mảng mới và không có dữ liệu

["a"] tương tự với mảng mới với 1 chuỗi dữ liệu

["a","b"] tương tự với mảng mới với 2 chuỗi dữ liệu

và tiếp tục như vậy. Do đo, các bạn có thể xác định và xây dựng mảng dữ liệu như trên bằng cú pháp:

var as2D = [ 
    ["a","b","c","d","e","f","g","h","i","j"], 
    ["A","B","C","D","E","F","G","H","I","J"], 
    ["ä","ß","©","Ð","ë","Ø",">","½","î","ÿ"] 
];

Với cú pháp như vậy, JavaScript có thể dễ dàng xây dựng được biến theo dạng mảng, tương tự như cú pháp:

as2D[n]= new Array( a,b,c,... )

đã được sử dụng trước đó. Và cách truy cập dữ liệu cũng không có gì khác.

Sử dụng chức năng Array.push():
Hàm push() khi được áp dụng vào các đối tượng sẽ thực hiện chức năng gán đối tượng (hoặc chuỗi) mới tới vị trí cuối cùng. Cách này thường được dùng để xác định 1 mảng nào đó từ khởi đầu, chúng ta có thể sử dụng cú pháp:

var as2D = new Array();
as2D[0] = new Array();
as2D[0].push( "a" );
as2D[0].push( "b" );
as2D[0].push( "c","d","e","f","g","h","i" );
as2D[0].push( "j" );
as2D.push( new Array( "A","B","C","D","E","F","G","H","I","J" ) );
as2D.push( [ "ä","ß","©","Ð","ë","Ø",">","½","î","ÿ" ] );

Cú pháp trên được dùng để tạo đối tượng có dạng mảng trong mảng, và cách thức hoạt động tương tự như ví dụ trên. Tuy nhiên, các bạn cần lưu ý rằng hàm push() cho phép người dùng dồn các phần dữ liệu đơn (như dòng 3,4 và 6) hoặc dữ liệu kép (dòng 5), còn dòng 7 và 8 sẽ dồn toàn bộ các dữ liệu vào vị trí top của mảng. Chúng ta có thể thấy sự khác biệt so với ví dụ trên khi không có minh họa:

var as2D= []; // or: new Array();
as2D.push( ["a","b","c","d","e","f","g","h","i","j"] );
as2D.push( ["A","B","C","D","E","F","G","H","I","J"] );
as2D.push( ["ä","ß","©","Ð","ë","Ø",">","½","î","ÿ"] );

Sử dụng chức năng String.split():
Hàm split() của đối tượng String trong JavaScript sẽ trả về đối tượng Array, và rất được sử dụng thường xuyên trong việc cố định Array với các biến đã được khởi tạo trước:

var sData1= "a,b,c,d,e,f,g,h,i,j";
var sData2= "A,B,C,D,E,F,G,H,I,J";
var sData3= "ä,ß,©,Ð,ë,Ø,>,½,î,ÿ";
var as2D= []; // or: new Array();
as2D[0]= sData1.split(",");
as2D[1]= sData2.split(",");
as2D[2]= sData3.split(",");

Tham số thứ 2 trong hàm split() có chức năng xác nhận tất cả các ký tự phân cách, trong trường hợp này chúng tôi sử dụng dấu phẩy. Có 1 quy luật như sau: nếu ký tự phân cách có dạng rỗng (“”), thì kết quả trả về sẽ là mảng dữ liệu cá ký tự riêng biệt.

var sData1= "abcdefghij";
var sData2= "ABCDEFGHIJ";
var sData3= "äß©ÐëØ>½îÿ";
var as2D= []; // or: new Array();
as2D[0]= sData1.split("");
as2D[1]= sData2.split("");
as2D[2]= sData3.split("");

hoặc:

var as2D= []; 
as2D[0]= "abcdefghij".split("");
as2D[1]= "ABCDEFGHIJ".split("");
as2D[2]= "äß©ÐëØ>½îÿ".split("");

hoặc:

var as2D= "abcdefghij,ABCDEFGHIJ,äß©ÐëØ>½îÿ".split(",")
as2D[0]=as2D[0].split("");
as2D[1]=as2D[1].split("");
as2D[2]=as2D[2].split("");

hoặc thậm chí là:

var as2D= [
    "abcdefghij".split(""),
    "ABCDEFGHIJ".split(""),
    "äß©ÐëØ>½îÿ".split("")
];

Nếu đem so sánh đoạn mã cuối cùng với C++ thì JavaScript có một chút khác biệt: việc khai báo var chỉ là 1 phần của thủ tục được thực hiện trong quá trình thực thi.

Tạo mảng 2 chiều:
Sử dụng lệnh lặp for:
Lý do chính để tạo và sử dụng mảng 2 chiều là tại một thời điểm hoặc vị trí nào đó trong toàn bộ chương trình, chúng ta bắt buộc phải dùng các cấu trúc lệnh lặp nhau. Ví dụ:

for ( var y=0; y<3; y++ ) {
    for ( var x=0; x<10; x++ ) { 
       // do something with myArray[y][x]
    }
}

Và quá trình này để phục vụ chương trình khi đi qua từng dòng và cột để truy cập dữ liệu tại những vị trí tương ứng. Ví dụ:

var sOut="<table border=2>";
for (var y=0; y<as2D.length; y++ ) {        // for each row
    sOut += "<tr>";
    for (var x=0; x<as2D[y].length; x++ ) { // for each clm
        sOut += "<td>" + as2D[y][x] + "</td>";
    }
    sOut += "</tr>";
}
sOut += "</table>";

sẽ tạo ra trang HTML có dạng như hình dưới:



Và nếu thay đổi vị trí của dòng và cột cho nhau:

var nClmsPerRow= as2D[0].length;      // assume same length
for ( var x=0; x<nClmsPerRow; x++ ) {  // for each row
    sOut += "<tr>";
    for ( var y=0; y<as2D.length; y++ ) { // for each clm
       sOut += "<td>" + as2D[y][x] + "</td>";
    }
    sOut += "</tr>";
}

Thì bảng của chúng ta sẽ có 10 dòng và 3 cột:



Sử dụng lệnh lặp for...in:
Bên cạnh đó, JavaScript còn cung cấp cho người sử dụng cấu trúc lặp lệnh khá đặc biệt thông qua mảng dữ liệu, đó là hàm for... in. Việc sử dụng chức năng này khá đơn giản khi đã biết rõ về điều kiện kết thúc vòng lặp (phần cuối cùng trong mảng dữ liệu). Và nó được sử dụng cùng với Collection và Array. Với Array thì cú pháp chung sẽ có dạng:

for ( nIdxVar in aArray )

Mỗi 1 vòng lặp sẽ thiết lập nIdxVar thành chỉ số lặp đi lặp lại (0, 1, 2,...), và quy trình này sẽ kết thúc khi tới vị trí cuối cùng trong mảng. Dưới đây là 1 vài đoạn mã có chức năng truy cập tới tất cả các thành phần trong ví dụ mảng 2 chiều bên trên:

for ( y in as2D ) {
   for ( x in as2D[y] ) {
       // do something with as2D[y][x];
   }
}

Phần giá trị thực của for...in sẽ xuất hiện khi chúng ta có sparse array ; cụ thể là trường hợp một số thành phần chưa được xác định rõ. Ví dụ như sau:

var aSparse= new Array;
aSparse[0]= ["zero",  "one",       "two"      ];
aSparse[4]= [      ,  "forty-one",            ];
aSparse[5]= ["fifty", "fifty-one", "fifty-two"];
for ( y in aSparse ) {
   for ( x in aSparse[y] ) {
       alert("y,x=(" +y+ "," +x+ ") = " + aSparse[y][x] );
   }
}

sẽ bỏ qua các dòng từ 1 > 3, cột 0 và 2 của dòng 4, toàn bộ giá trị trong đây sẽ không được xác định. Và kết quả trả về tại đây sẽ có dạng:

y,x=(0,0) = 0
y,x=(0,1) = 1
y,x=(0,2) = 2
y,x=(4,1) = 40 – 1 
y,x=(5,0) = 50
y,x=(5,1) = 50 – 1 
y,x=(5,2) = 50 – 2

So sánh mảng 2 chiều và bộ tổ hợp đối tượng:
Trên thực tế, mảng 2 chiều rất phù hợp trong việc “đại diện” cho 1 ma trận với các đối tượng đã được xác định sẵn. Ví dụ: 1 bàn cờ có 8 x 8 ô, 1 màn hình sẽ có 1680 x 1050 ma trận điểm ảnh... Và do vậy, công thức x – y ma trận thường xuyên được sử dụng trong những chương trình nâng cao được viết bằng JavaScript.

Những trường hợp phổ biến hơn là mảng 1 chiều chính là danh sách các nhóm của nhiều đối tượng, thành phần khác nhau. Và cấu trúc này thường được áp dụng trong bộ tổ hợp cơ sở dữ liệu, danh sách các đối tượng <input> trên 1 trang web, các dữ liệu có liên quan tới quy trình shopping cart... Chúc các bạn thành công!