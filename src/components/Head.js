import { Link } from "gatsby";
import React from "react"

function Head() {
    return (
        <main>
            <title>자기소개</title>
            <header style={{display: "flex"}}>
                <Link to="/" style={{padding:10}}>로고</Link>
                <div style={{flexGrow:1}}></div>
                <Link to="/about" style={{padding:10}}>자기소개</Link>
                <Link to="/test" style={{padding:10}}>테스트</Link>
                <Link to="/test-space" style={{padding:10}}>테스트스페이스</Link>
            </header>
            
        </main>
    ); 
}

export default Head; //바깥에서 얘한테 접근