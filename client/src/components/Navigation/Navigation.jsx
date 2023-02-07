import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
    <div>
      <Link to='/'>
        <button>Today</button>
      </Link>
      <Link to='/statistic'>
        <button>Statistic</button>
      </Link>
      <Link to='/cabinet'>
        <button>ClientName</button>
      </Link>
      <Outlet />
    </div>
    </>
  );
}
