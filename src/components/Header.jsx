import React from 'react';

export default function Header() {
  const menuItems = ["로그인", "회원가입", "내클래스"]

  return (
    <header className="header-container flex justify-between items-center px-5 py-2.5">
      <h2>OZ코딩스쿨</h2>
      <ul className="menu-container flex justify-center items-center gap-5">
        {menuItems.map((item) => (
          <li
            key = {item}
            className = "list-none font-normal text-[13px]"
          >
            {item}
          </li>
        ))}  
      </ul>
    </header>
  );
}

{/* <li className="list-none font-normal text-[13px]">로그인</li>
    <li className="list-none font-normal text-[13px]">회원가입</li>
    <li className="list-none font-normal text-[13px]">내클래스</li> */}