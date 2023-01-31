import React from "react";
import Link from "next/link";

export default function Sidebar(props) {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="menu-items">
          <button>
            <Link href="./">Home</Link>
          </button>
          <button>
            <Link href="./toplist">Toplist</Link>
          </button>
          <button>
            <Link href="./ongoing">Ongoing</Link>
          </button>
          <button>
            <Link href="/watchlist">Watchlist</Link>
          </button>
          <button>
            <Link href="./search">Search</Link>
          </button>
        </div>
      </nav>

      <div>{props.children}</div>
    </div>
  );
}
