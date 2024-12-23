import React, { useState } from "react";
import Header from "@components/Header";
import Button from "@components/Button";
import ImgSlider from '../components/ImgSlider';
import "@styles/main.scss";
import Heart from "@img/Heart.png";

const Main = () => {
  const [username, setUsername] = useState(''); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    console.log("handleLogin 함수가 호출되었습니다.");
    setIsLoggedIn(true);
    setUsername('사용자 이름');
  };

  return (
    <>
      <Header />
      <div className="Main_Container">
        <p>어김없이 돌아온 연말</p>
        <p>
          <img src={Heart} alt="하트 이미지"/> 따뜻한 마음을 담아,
        </p>
        <p>소중한 사람에게 감사 카드를 전해보세요.</p>
        <div className="FromMsg">
            {isLoggedIn ? (
            <p>from. {username}</p>
            ) : (
            <p>from. Opening</p>
            )}
        </div>
      </div>
      
      <Button text="마음 전하러 가기" nav={"write"} />

      <ImgSlider id='1'/>
      <ImgSlider id='2'/>
      <ImgSlider id='3'/>
    </>
  );
};

export default Main;
