import React from 'react'

export default function Navbar() {
  return (
    <nav className="container mt-3 navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h3>Blog</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=''>
      <div className="navbar-nav">
        <a className="nav-link"  aria-current="page" href="/"><h3>Home</h3></a>
        <a className="nav-link" href="/Create"><h3>Create</h3></a>
      </div>
    </div>
  </div>
</nav>
  )
}
