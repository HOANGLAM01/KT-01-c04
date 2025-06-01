/*1 Các cách khai báo biến:
    - var
    - let
    - const
  2 Các kiểu dữ liệu đã được học:
    - Chuỗi
    vd: let name='Lam';
    - Số
    vd: let number=0;
    - Boolean
    vd: let isCute= false;
  3 Làm sai để quy định kiểu dữ liệu cho 1 biến:
    Trong JavaScript, việc quy định kiểu dữ liệu cho một biến được thực hiện thông qua việc gán giá trị cho biến đó.
  4 Có những cách nào để hiển thị chữ hello ra từ js:
        <!-- Cách 1: Dùng trực tiếp thẻ Js -->
        <!-- <script>
            alert("Hello");
        </script> -->

        <!-- Cách 2: Tạo file Js bên ngoài -->
        <!-- <script src="inđex.js"></script> -->

        <!-- Import thư viện từ bên ngoài -->
        
  5 Có những cách nào để nhập vào biến a với js:
    1.prompt:
        let a=prompt("nhập a vào");
    2.input:
        <input id="data" type="text" placeholder="Nhập a vào">
        <script>
            let a;
            document.getElementById("data").value=a;
        </script>
  6  In ra giao diện tương ứng thẻ h1, img, a từ JS
  7 Nhập vào đường dẫn ảnh cho biến một biến bất kì, sau đó in ra ảnh với nguồn ảnh đó
        <img id="img1" alt style="width: 252px; height: 142px;">
        <script>
        let a = "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/475223mqK/anh-mo-ta.png";
        document.getElementById("img1").src=a;
        </script>
  8 Nhập vào tuổi trong biến age, in ra 'Đủ tuổi' nếu age >= 18.
        <script>
            let age=+prompt("Nhập tuổi")
            if(age>=18){
                alert("đủ tuổi")
            }
        </script>
  9 Nhập vào a, b. Nếu a > b in ra tổng, nếu a < b in ra tích, nếu a = b in ra 'a=b':
        <script>
            let a=+prompt("nhập vào a");
            let b=+prompt("Nhập vào b");
            let c=a+b;
            let s=a*b;
            if(a>b){
                alert("Tổng a+b= "+c);
            }else if(a<b){
                alert("Tích ab= "+s)
            }else{
                alert("a=b")
            }
        </script>
  10. Nhập a ,b ,c . In ra số lớn nhất.
        <script>
            let a=+prompt("nhập số thứ nhất");
            let b=+prompt("Nhập số thứ hai");
            let c=+prompt("Nhập số thứ ba");
            let max =a;
            if (b>=max){
                if(b>=c){
                    max=b;
                }else{
                    max=c
                }
            }else if(c>=max){
                max=c
            }
            alert("số lớn nhất là "+max);
        </script>
  11 In ra 100 với các lượt lẻ thì in ra 'Hello', và chẵn in ra 'Hi'.
        <script>
            let a ="hello";
            let b = "hi";
            for(let i=1;i<=100;i++){
                if(i%2==0){
                    console.log(b);
                }else{
                    console.log(a);
                }
            }
        </script>
  12 Nhập vào N từ prompt. In ra N lần chữ 'Hello'.
        <script>
            let n =+prompt("Nhập vào số lần lặp");
            for(let i=1;i<=n;i++){
                console.log("Hello")
            }
        </script>
  13 In ra các số từ a đến b (nâng cao a, b nhập từ input).
        <input id="number1" type="text" placeholder="nhập số thứ nhất">
        <input id="number2" type="text" placeholder="nhập số thứ hai">
        <button onclick="show()">hiển thị console</button>
        <script>
            function show(){
                let a = Number(document.getElementById("number1").value);
                let b = Number(document.getElementById("number2").value);
                for(let i= a;i<=b;i++){
                    console.log(i);
                }
            }
        </script>
  14. In ra các số từ a đến b,số chẵn trong h2 và số lẻ trong h1.
        <input id="number1" type="text" placeholder="nhập số thứ nhất">
        <input id="number2" type="text" placeholder="nhập số thứ hai">
        <button onclick="show()">hiển thị</button>
        <h1 id="showle">Số lẻ</h1>
        <h2 id="showchan">Số chẵn</h2>
        <script>
            function show(){
                let a = Number(document.getElementById("number1").value);
                let b = Number(document.getElementById("number2").value);
                for(let i= a;i<=b;i++){
                    if (i%2==0){
                        document.getElementById("showchan").innerHTML+= ("<br>" +i);
                    }else{
                        document.getElementById("showle").innerHTML+= ("<br>" +i);
                    }
                }
            }
        </script>
  15. Tính trung bình cộng các số chia 5 dư 2 từ a đến b
        <input id="number1" type="text" placeholder="nhập số thứ nhất">
        <input id="number2" type="text" placeholder="nhập số thứ hai">
        <button onclick="show()">hiển thị</button>
        <h2 id="show"></h2>
        <script>
            function show(){
                let a = Number(document.getElementById("number1").value);
                let b = Number(document.getElementById("number2").value);
                let avg;
                let tong=0;
                let count=0;
                for(let i= a;i<=b;i++){
                    if (i%5==2){
                        tong+=i;
                        count++
                    }
                }
                avg=tong/count;
                if(count==0){
                    document.getElementById("show").innerHTML="không có số yêu cầu"
                }else{
                    document.getElementById("show").innerHTML="trung bình cộng các số chia 5 dư 2 từ a đến b là: "+avg;
                }
            }
        </script>
  16. Cho 1 mảng bất kì. In ra các phần tử chẵn trong h2, lẻ trong h1 trong mảng.
        <h2 id="showchan"></h2>
        <h1 id="showle"></h1>
        <script>
                let arr=["Lam",20,161,"SG"]
                for(let i= 0;i<arr.length;i++){
                    if (i%2==0){
                        document.getElementById("showchan").innerHTML+=("<br>"+arr[i]);
                    }else{
                        document.getElementById("showle").innerHTML+=("<br>"+arr[i]);
                    }
                }
        </script>
  17. Tính trung bình cộng các số chia 5 dư 2 các phần tử trong mảng.
        <h1 id="show"></h1>
            <script>
                    let arr=[7,20,161,22,56];
                    let avg;
                    let tong =0;
                    let count=0;
                    for(let i= 0;i<arr.length;i++){
                        if (arr[i]%5==2){
                            tong+=arr[i];
                            count++
                        }
                    }
                    avg=tong/count;
                    if(count==0){
                        document.getElementById("show").innerHTML="không có số yêu cầu"
                    }else{
                        document.getElementById("show").innerHTML="trung bình cộng các số chia 5 dư 2 các phần tử trong mảng là: "+avg;
                    }
            </script>
  18. Cho một mảng bất kì đếm số lượng số nguyên tố có trong mảng.
        <script>
                let arr=[7,17,20,161,22,56];
                let count=0;
                let isPrime = true;
                for(let i= 0;i<arr.length;i++){
                    if(arr[i]>1){
                        for (let j = 2; j <=arr[i]/2; j++) {
                                if (arr[i] % j == 0) {
                                    isPrime=false;
                                    break;
                                }
                        }
                        if(isPrime== true){
                            count++
                        }     
                    }else{
                        continue;
                    }
                }
                if(count==0){
                    console.log("không có số nguyên tố trong mảng");
                }else{
                    console.log("số nguyên tố trong mảng là: "+count);
                }
        </script>
  19 Nhập vao a, tìm vị trí của a trong mảng.
        <script>
                let arr=[7,17,22,161,22,56];
                let a =+prompt("nhập số muốn tìm")
                for(let i= 0;i<arr.length;i++){
                    if(arr[i]==a){
                        console.log("vị trí của "+arr[i]+" trong mảng là: "+i)
                    }
                }
        </script>
  20 Tìm min thứ hai trong mảng
        <script>
                let arr=[7,7,17,22,161,22,56];
                let s = new Set(arr);
                arr = Array.from(s)
                arr.sort((a, b) => a-b);
                console.log(arr[1]);
        </script>
  21 Tìm min của các phần tử chẵn trong mảng.
        <script>
                let arr=[7,7,17,-2,16,22,56];
                let min=Infinity;
                let sochan;
                for(let i=0;i<arr.length;i++){
                    if(arr[i]%2==0){
                        sochan=arr[i];
                    }
                    if(sochan<min){
                        min=sochan
                    }
                }
                console.log("số chẵn be1 nhất là: "+min)
        </script>
  22 Tìm các vị trí của min trong mảng.
        <script>
                const mang = [2, 5, 8, 2, 5, 2, 9];
                let min = mang[0]; 
                let viTriMin = [0];

                for (let i = 1; i < mang.length; i++) {
                    if (mang[i] < min) {
                        min = mang[i];
                        viTriMin = [i];
                    } else if (mang[i] === min) {
                        viTriMin.push(i);
                    }
                }
                console.log("những vị trí min là: "+viTriMin)
        </script>
*/