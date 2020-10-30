import React from 'react'

export const Footer = () => {
    return (
        <footer className="white-80 center w-100  pa2 ma4">
            <a
                href="https://robohash.org/"
                className="white"
                target="_blank"
                rel="noopener noreferrer"
            >
                Images taken from Robohash{' '}
                <span role="img" aria-label="Robot">
                    🤖
                </span>
            </a>
        </footer>
    )
}
