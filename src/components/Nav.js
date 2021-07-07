import React from 'react';

export default function Nav() {
    return(
        <nav className="nav">
          <div><button>全部</button></div>
          <div><button>已完成</button></div>
          <div><button>未完成</button></div>
        </nav>
    );
}