import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
    <div>
      <Link to='/'>
        <button>My Day</button>
      </Link>
      <Link to='/statistic'>
        <button>Statistic</button>
      </Link>
      <Link to='/cabinet'>
        <button>Cabinet</button>
      </Link>
      <Link to='/settings'>
        <button>Setting</button>
      </Link>
      <Outlet />
    </div>
    </>
  );
}
