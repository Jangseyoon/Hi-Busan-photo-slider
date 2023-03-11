const slideContents = document.getElementsByClassName('slide-contents')[0];
const slideInnerContents = slideContents.querySelectorAll("li");
let photoIdx = 0; //현재 사진 인덱스

/*
왼쪽 화살표를 누를 경우 사진이 왼쪽으로 넘어가야 함. left가 +length가 되는 것
오른쪽 화살표를 누를 경우 사진이 오른쪽으로 넘어가야 함. 그럼 left가 -length 만큼 되는 것

left==0일 때 왼쪽 화살표는 비활성화. 색깔도 회색. 오른쪽만 파랑
photoIdx가 sliderInnerContents의 길이-1일 경우 마지막 사진이라는 뜻
오른쪽 화살표 비활성화, 색깔 회색, 왼쪽 파랑
*/

function moveSlide (num){
  slideContents.style.left = -num*497+"px";
  photoIdx = num;
}

let leftKey = document.getElementsByClassName('left')[0];
let rightKey = document.getElementsByClassName("right")[0];
//leftKey.classList.add("hoverleft");
rightKey.classList.add("hoverright");

leftKey.addEventListener('click', ()=>{
  if (photoIdx!=0){ 
    if (rightKey.getElementsByClassName("hoverright").length==0){
      rightKey.classList.add("hoverright");
    }moveSlide(photoIdx-1);
  } 
  if (photoIdx==0){
    leftKey.classList.remove("hoverleft");
  }
  if (photoIdx==1 && leftKey.getElementsByClassName("hoverleft").length==0){
    leftKey.classList.add("hoverleft");
  }
})

rightKey.addEventListener('click',()=>{
  if (photoIdx!=slideInnerContents.length-1){
    if (leftKey.getElementsByClassName("hoverleft").length==0){
      leftKey.classList.add("hoverleft");
    }moveSlide(photoIdx+1);
  }
  if (photoIdx==slideInnerContents.length-1){
    rightKey.classList.remove("hoverright");
  }
  if (photoIdx==slideInnerContents.length-2 && rightKey.getElementsByClassName("hoverright").length==0){
    rightKey.classList.add("hoverright");
  }
})
