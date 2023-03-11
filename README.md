# Hi-Busan-photo-slider
hi busan 페이지를 만들기 전 포토 슬라이더를 구현해봄

![잔의_부산_기록_사진_슬라이드_구현__-_Chrome_2023-03-11_09-28-56_AdobeExpress](https://user-images.githubusercontent.com/92420662/224454808-3265e2b7-b09c-4370-bf00-2519fccad21d.gif)

![image](https://user-images.githubusercontent.com/92420662/224454920-6536be53-bece-4c0e-bf10-30b70f842f70.png)

바닐라 js로 포토 슬라이더를 구현해보았다.
버튼을 누름에 따라 사진이 오른쪽, 왼쪽으로 넘어간다.

**<구현 내용>**



슬라이드가 가능하다면 버튼에 마우스 커서를 올렸을 때 색이 변한다. 

또한 translateX를 css로 추가했기 때문에 해당 방향으로 버튼이 살짝 이동한다.

슬라이드가 불가능할 경우 버튼의 색과 cursor : pointer가 사라진다.


  
    
      
      


   
   
   
   
   
**<고민해야 했던 것>**



-여러 개의 사진들은 display:flex를 통해 길이가 긴 박스 안에 들어가게 됨.

-사진들을 슬라이드 박스 한 가운데 위치시키기 위해 flex를 잘 구현해야 했음.

-overflow : hidden을 사진들의 부모 요소에 바로 적용시켜버릴 경우, 영역을 넘어갔을 때 사진이 잘려버리는 현상이 있었음.
그러므로 overflow : none을 해줌.

-overflow : hidden은 사진들의 parentElement.parentElement에 적용함

-사진들이 들어있는 리스트 박스를 좌우로 움직이려면 position : relative, position : absolute를 잘 설정해줘야 했음.
그래야 left를 원하는 방향으로 움직일 수 있음.
