import { Link } from "gatsby";
import React from "react"

function Layout({children}) {
    return (
        <main>
            <div style={{display: "flex", gap:10}}>
                <Link to="/" style={{padding:10}}>홈</Link>
                <Link to="/about" style={{padding:10}}>어바웃</Link>
            </div>
            {children}
            <div>Copyright...</div>
        </main>
    );
}

export default Layout;